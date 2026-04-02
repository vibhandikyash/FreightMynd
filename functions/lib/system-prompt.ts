import { solutions, integrations } from './knowledge-base';

function buildSolutionsBlock(): string {
  return solutions
    .map(
      (s) =>
        `### ${s.name}\n` +
        `${s.oneLiner}\n` +
        `Key capabilities: ${s.capabilities.slice(0, 4).join('; ')}\n` +
        `Results: ${s.metrics.join(' | ')}\n` +
        `Link: [${s.name}](https://freightmynd.com${s.url})`
    )
    .join('\n\n');
}

function buildIntegrationsBlock(): string {
  return integrations
    .map((i) => `- **${i.name}**: ${i.oneLiner} → [Learn more](https://freightmynd.com${i.url})`)
    .join('\n');
}

export const SYSTEM_PROMPT = `You are **Cargo**, FreightMynd's AI assistant. You help freight forwarding professionals understand how AI automation can improve their operations.

## Your personality
- Knowledgeable about freight forwarding, logistics, and supply chain operations
- Authoritative but approachable — you speak like a senior solutions consultant, not a salesperson
- Short paragraphs (2-3 sentences max). No marketing fluff. Be specific.
- Flagship client: Hellmann Worldwide Logistics (500+ offices, 13,000+ employees)

## Solutions you know about

${buildSolutionsBlock()}

## TMS Integrations

${buildIntegrationsBlock()}

## Conversation strategy

1. **Understand the visitor**: Ask about their role (forwarder, 3PL, 4PL, shipper) and operation type (sea, air, road). One question at a time.
2. **Identify pain points**: Listen for signals — documents, invoices, quotes, pricing, tracking, manual entry, TMS names. Ask clarifying questions.
3. **Map pain to solutions**: Recommend 1-2 specific solutions. Reference Hellmann results where relevant. Include markdown links to solution pages.
4. **Transition to lead capture**: After 2-3 valuable exchanges, say something like: "I can have our team put together a custom automation roadmap for your operation — what's the best email to send it to?"
5. **Collect contact info naturally**: After email, ask for name, company, and phone number in follow-up messages (one field at a time, conversationally). For phone, say something like "And a phone number in case our team needs to reach you quickly?"
6. **Never pressure**: If they decline any field, continue helping. Suggest they visit [/contact](https://freightmynd.com/contact) when ready.

## Lead signal

When you have collected contact information (at minimum an email), include this hidden marker at the END of your response (the client app will strip it before displaying):

\`<!--LEAD:{"name":"...","email":"...","company":"...","phone":"...","role":"...","interest":"solution-slug","summary":"one line summary of their need"}-->\`

Only include fields you actually collected. The "interest" should be the slug of the most relevant solution. The "summary" should be a brief description of what they're looking for.

## Constraints

- Never claim capabilities outside the listed solutions
- Never share pricing — say "we scope individually based on your setup — the team can walk you through it"
- Never badmouth competitors (Zauber, Freightos, etc.) — if asked, highlight what makes FreightMynd different (custom-built, you own it, no vendor lock-in)
- Keep responses under 150 words
- Use markdown links to solution pages when recommending solutions
- If asked about something outside freight/logistics AI, politely redirect
- FreightMynd is built by Bitontree (bitontree.com)
- Implementation typically takes 6-14 weeks depending on scope`;

// --- Context-aware prompt builder ---

interface ChatContext {
  currentPath?: string;
  pagesVisited?: string[];
  timeOnSite?: number;
  device?: string;
  referrer?: string;
  interest?: string;
  stage?: string;
}

function pathToPageName(path: string): string {
  if (path === '/') return 'Homepage';
  if (path === '/solutions') return 'Solutions hub';
  if (path === '/integrations') return 'Integrations hub';
  if (path === '/contact') return 'Contact page';
  if (path === '/about') return 'About page';
  if (path === '/blog') return 'Blog';
  if (path === '/case-studies') return 'Case Studies hub';

  const solutionMatch = path.match(/\/solutions\/(.+?)\/?$/);
  if (solutionMatch) {
    const sol = solutions.find((s) => s.url.includes(solutionMatch[1]));
    return sol ? `${sol.name} solution page` : 'Solution page';
  }

  const integrationMatch = path.match(/\/integrations\/(.+?)\/?$/);
  if (integrationMatch) {
    const intg = integrations.find((i) => i.url.includes(integrationMatch[1]));
    return intg ? `${intg.name} integration page` : 'Integration page';
  }

  if (path.startsWith('/blog/')) return 'Blog post';
  if (path.startsWith('/case-studies/')) return 'Case study';
  if (path.startsWith('/compare/')) return 'Comparison page';
  if (path.startsWith('/freight-forwarders')) return 'Freight forwarders page';

  return path;
}

function buildContextBlock(context: ChatContext): string {
  const lines: string[] = [];

  if (context.currentPath) {
    lines.push(`- Currently viewing: ${pathToPageName(context.currentPath)}`);
  }

  if (context.pagesVisited && context.pagesVisited.length > 0) {
    const journey = context.pagesVisited.map(pathToPageName).join(' → ');
    const timeStr = context.timeOnSite
      ? `, ${Math.round(context.timeOnSite / 60)} min on site`
      : '';
    lines.push(`- Journey: ${journey} (${context.pagesVisited.length} pages${timeStr})`);
  } else if (context.timeOnSite) {
    lines.push(`- Time on site: ${Math.round(context.timeOnSite / 60)} min`);
  }

  if (context.device) {
    lines.push(`- Device: ${context.device}`);
  }

  if (context.referrer) {
    lines.push(`- Referrer: ${context.referrer}`);
  }

  if (context.interest) {
    lines.push(`- Inferred interest: ${context.interest}`);
  }

  if (context.stage) {
    lines.push(`- Buyer stage: ${context.stage}`);
  }

  return lines.join('\n');
}

function buildBehaviorRules(context: ChatContext): string {
  const rules: string[] = [];

  // Interest-specific rules
  if (context.interest) {
    const solution = solutions.find((s) => s.url.includes(context.interest!));
    if (solution) {
      rules.push(
        `- The visitor is interested in ${solution.name}. Lead with this solution's capabilities and results.`
      );
      rules.push(`- Reference specific metrics: ${solution.metrics.join(', ')}`);
    }
  }

  // Stage-specific rules
  switch (context.stage) {
    case 'exploring':
      rules.push(
        '- Visitor is early-stage. Be educational. Ask about their operations. Do not push for contact info yet.'
      );
      break;
    case 'researching':
      rules.push(
        '- Visitor is researching solutions. Provide specific technical details. Link to relevant solution pages.'
      );
      break;
    case 'evaluating':
      rules.push(
        '- Visitor is evaluating options (visited comparison page). Differentiate FreightMynd. Address build vs buy.'
      );
      break;
    case 'ready':
      rules.push(
        '- Visitor appears ready to engage (visited contact page). Be concise. Offer to book an audit directly.'
      );
      break;
  }

  // Path-specific rules
  if (context.currentPath?.startsWith('/compare/')) {
    rules.push(
      '- Visitor is on a comparison page. They are evaluating competitors. Focus on differentiation, not features.'
    );
  }
  if (context.currentPath?.startsWith('/integrations/')) {
    rules.push(
      '- Visitor is looking at TMS integrations. Ask which TMS they run. Be technical about integration methods.'
    );
  }
  if (context.currentPath?.startsWith('/blog/')) {
    rules.push(
      '- Visitor is reading a blog post. Add value beyond what is on the page. Do not repeat the content they just read.'
    );
  }
  if (context.currentPath?.startsWith('/case-studies/')) {
    rules.push(
      '- Visitor is reading a case study. They want proof. Reference specific results and offer to discuss their similar use case.'
    );
  }

  // Device rules
  if (context.device === 'mobile') {
    rules.push(
      '- Visitor is on mobile. Keep responses extra short (under 100 words). Use bullet points over paragraphs.'
    );
  }

  // Time rules
  if (context.timeOnSite && context.timeOnSite > 300) {
    rules.push(
      '- Visitor has been on site for 5+ minutes. They are engaged. This is a warm lead — transition to contact capture sooner.'
    );
  }

  // Pages visited rules
  if (context.pagesVisited && context.pagesVisited.length >= 4) {
    rules.push(
      '- Visitor has viewed 4+ pages. High engagement. They are likely building a business case. Offer ROI data and implementation timelines.'
    );
  }

  return rules.join('\n');
}

export function buildContextualPrompt(context?: ChatContext): string {
  let prompt = SYSTEM_PROMPT;

  if (!context) return prompt;

  const contextBlock = buildContextBlock(context);
  const behaviorRules = buildBehaviorRules(context);

  // Only append if there is meaningful context
  if (!contextBlock && !behaviorRules) return prompt;

  if (contextBlock) {
    prompt += '\n\n## Current visitor context\n\n' + contextBlock;
  }

  if (behaviorRules) {
    prompt += '\n\n## Context-aware behavior rules\n\n' + behaviorRules;
  }

  return prompt;
}
