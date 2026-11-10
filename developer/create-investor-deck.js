import { createRequire } from 'node:module';

// Setup: npm install --prefix /tmp/dialtone-deck pptxgenjs
const require = createRequire(import.meta.url);
const pptxgen = require('/tmp/dialtone-deck/node_modules/pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'ByteStreams LLC';
pptx.company = 'ByteStreams LLC';
pptx.subject = 'DialTone.Med investor presentation';
pptx.title = 'DialTone.Med - Institutional Investor Deck';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Inter',
  bodyFontFace: 'Inter',
  lang: 'en-US',
};
pptx.defineSlideMaster({
  title: 'DIALTONE_DARK',
  background: { color: '0B0E14' },
  objects: [],
  slideNumber: { x: 12.35, y: 7.04, w: 0.42, h: 0.18, color: '64748B', fontFace: 'JetBrains Mono', fontSize: 7, align: 'right', margin: 0 },
});

const C = {
  bg: '0B0E14',
  panel: '131A22',
  panel2: '18212B',
  line: '222F3E',
  white: 'F1F5F9',
  muted: '94A3B8',
  quiet: '64748B',
  mint: '00F5D4',
  teal: '1B998B',
  cyan: '67E8F9',
  blue: '0A2463',
  amber: 'F3B34C',
  red: 'EF4444',
  green: '2EC4B6',
};
const FONT = 'Inter';
const MONO = 'JetBrains Mono';
const OUT = '/home/scotton/dev/projects/bytestreams/dialtone_med/docs/DialToneMed_Rock_Health_First_Pass.pptx';

function addGrid(slide) {
  for (let x = 0; x <= 13.33; x += 0.42) {
    slide.addShape(pptx.ShapeType.line, { x, y: 0, w: 0, h: 7.5, line: { color: '12202A', transparency: 45, width: 0.35 } });
  }
  for (let y = 0; y <= 7.5; y += 0.42) {
    slide.addShape(pptx.ShapeType.line, { x: 0, y, w: 13.333, h: 0, line: { color: '12202A', transparency: 45, width: 0.35 } });
  }
}

function addChrome(slide, section, slideNo) {
  addGrid(slide);
  slide.addText([
    { text: 'DialTone', options: { bold: true, color: C.white } },
    { text: '.Med', options: { color: C.mint } },
  ], { x: 0.65, y: 0.35, w: 2.2, h: 0.28, fontFace: FONT, fontSize: 13, margin: 0, breakLine: false });
  slide.addText(section.toUpperCase(), { x: 9.0, y: 0.39, w: 3.65, h: 0.18, fontFace: MONO, fontSize: 7.5, bold: true, color: C.quiet, align: 'right', charSpacing: 1.4, margin: 0 });
  slide.addShape(pptx.ShapeType.line, { x: 0.65, y: 0.78, w: 12.0, h: 0, line: { color: C.line, width: 0.8 } });
  slide.addText('CONFIDENTIAL // INVESTOR DRAFT', { x: 0.65, y: 7.05, w: 2.75, h: 0.14, fontFace: MONO, fontSize: 6.5, color: C.quiet, charSpacing: 0.9, margin: 0 });
}

function addTitle(slide, kicker, title, subtitle) {
  slide.addText(kicker.toUpperCase(), { x: 0.68, y: 1.08, w: 5.8, h: 0.2, fontFace: MONO, fontSize: 8, bold: true, color: C.mint, charSpacing: 1.3, margin: 0 });
  slide.addText(title, { x: 0.65, y: 1.37, w: 11.95, h: 0.76, fontFace: FONT, fontSize: 27, bold: true, color: C.white, breakLine: false, margin: 0, fit: 'shrink' });
  if (subtitle) slide.addText(subtitle, { x: 0.68, y: 2.18, w: 11.4, h: 0.42, fontFace: FONT, fontSize: 12, color: C.muted, margin: 0, breakLine: false, fit: 'shrink' });
}

function panel(slide, x, y, w, h, opts = {}) {
  slide.addShape(pptx.ShapeType.rect, {
    x, y, w, h,
    fill: { color: opts.fill || C.panel, transparency: opts.transparency || 0 },
    line: { color: opts.line || C.line, width: opts.width || 0.8 },
    radius: 0,
  });
}

function label(slide, text, x, y, w, color = C.mint) {
  slide.addText(text.toUpperCase(), { x, y, w, h: 0.2, fontFace: MONO, fontSize: 7, bold: true, color, charSpacing: 1.1, margin: 0, fit: 'shrink' });
}

function body(slide, text, x, y, w, h, opts = {}) {
  slide.addText(text, { x, y, w, h, fontFace: opts.mono ? MONO : FONT, fontSize: opts.size || 11, bold: opts.bold || false, color: opts.color || C.muted, margin: opts.margin === undefined ? 0 : opts.margin, breakLine: false, valign: opts.valign || 'top', fit: 'shrink', bullet: opts.bullet });
}

function metric(slide, value, caption, x, y, w, color = C.mint) {
  slide.addText(value, { x, y, w, h: 0.55, fontFace: MONO, fontSize: 27, bold: true, color, margin: 0, fit: 'shrink' });
  slide.addText(caption, { x, y: y + 0.62, w, h: 0.38, fontFace: FONT, fontSize: 8.5, color: C.muted, margin: 0, fit: 'shrink' });
}

function addSource(slide, text) {
  slide.addText(text, { x: 0.68, y: 6.75, w: 11.5, h: 0.18, fontFace: FONT, fontSize: 6.5, italic: true, color: C.quiet, margin: 0, fit: 'shrink' });
}

function arrow(slide, x, y, w, color = C.mint) {
  slide.addShape(pptx.ShapeType.chevron, { x, y, w, h: 0.24, fill: { color, transparency: 25 }, line: { color, transparency: 100 } });
}

// 1. Cover
{
  const slide = pptx.addSlide('DIALTONE_DARK');
  addGrid(slide);
  slide.addText([
    { text: 'DialTone', options: { bold: true, color: C.white } },
    { text: '.Med', options: { color: C.mint } },
  ], { x: 0.72, y: 0.52, w: 2.6, h: 0.38, fontFace: FONT, fontSize: 18, margin: 0 });
  label(slide, 'Customized patient-engagement platform', 0.75, 1.55, 5.6);
  slide.addText('Every patient call answered.\nEvery request moved forward.', { x: 0.72, y: 1.92, w: 7.4, h: 1.7, fontFace: FONT, fontSize: 34, bold: true, color: C.white, margin: 0, breakLine: false, fit: 'shrink' });
  body(slide, 'An AI phone agent that turns appointments, refill requests, billing, and insurance calls into structured, practice-approved workflows.', 0.75, 3.87, 6.8, 0.75, { size: 14, color: C.muted });
  panel(slide, 8.35, 1.5, 4.25, 4.25, { fill: C.panel });
  label(slide, 'Live workflow model', 8.7, 1.85, 2.8);
  const steps = ['INBOUND CALL ANSWERED', 'INTENT CLASSIFIED', 'WORKFLOW EXECUTED', 'OUTCOME CAPTURED'];
  steps.forEach((step, index) => {
    const y = 2.32 + index * 0.72;
    slide.addShape(pptx.ShapeType.rect, { x: 8.72, y, w: 3.5, h: 0.43, fill: { color: index === 3 ? '0B2423' : C.bg }, line: { color: index === 3 ? C.mint : C.line, width: 0.8 } });
    body(slide, `> ${step}`, 8.9, y + 0.12, 3.1, 0.16, { mono: true, size: 7.5, bold: index === 3, color: index === 3 ? C.mint : C.white });
  });
  slide.addText('RAISING $1.5M SEED', { x: 0.75, y: 5.42, w: 2.5, h: 0.34, fontFace: MONO, fontSize: 11, bold: true, color: C.mint, margin: 0 });
  body(slide, 'Two pilot design partners lined up: PBM + general practice', 0.75, 5.9, 5.6, 0.3, { size: 11, color: C.white, bold: true });
  body(slide, 'Steven Cotton, Founder & CEO  |  ByteStreams LLC  |  Memphis, TN', 0.75, 6.35, 7.2, 0.24, { size: 8.5, color: C.quiet });
  body(slide, 'CONFIDENTIAL // NOVEMBER 2026', 9.15, 6.67, 3.45, 0.18, { mono: true, size: 7, color: C.quiet });
}

// 2. Problem
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Problem', 2);
  addTitle(slide, 'The broken front door', 'Patient demand arrives by phone. Operations still break at voicemail.', 'High-intent calls enter disconnected workflows while staff split attention between patients in front of them and patients on the line.');
  const cards = [
    ['01 // CAPTURE', 'Calls compete with in-person care', 'Front-desk staff cannot answer every appointment, refill, billing, and insurance request at peak load.'],
    ['02 // COORDINATE', 'Voicemail loses context', 'Messages create manual callbacks, duplicate work, and incomplete handoffs across practice teams.'],
    ['03 // COMPLETE', 'Systems do not close the loop', 'A phone interaction rarely becomes a structured outcome without staff re-entry into another system.'],
  ];
  cards.forEach((item, index) => {
    const x = 0.68 + index * 4.08;
    panel(slide, x, 2.92, 3.75, 2.6);
    label(slide, item[0], x + 0.25, 3.2, 3.2, index === 1 ? C.cyan : C.mint);
    body(slide, item[1], x + 0.25, 3.62, 3.2, 0.52, { size: 16, color: C.white, bold: true });
    body(slide, item[2], x + 0.25, 4.33, 3.2, 0.85, { size: 10.2 });
  });
  slide.addShape(pptx.ShapeType.line, { x: 0.68, y: 5.93, w: 11.98, h: 0, line: { color: C.line, width: 1 } });
  metric(slide, '23%', 'Directional benchmark: inbound calls unanswered or abandoned in queue', 0.72, 6.03, 3.25, C.red);
  metric(slide, '62%', 'Directional benchmark: callers who hang up without leaving a voicemail', 4.62, 6.03, 3.25, C.amber);
  metric(slide, '4', 'Core workflows competing for the same front-desk bandwidth', 8.52, 6.03, 3.25, C.mint);
  slide.addText('Directional industry benchmarks for ambulatory-practice phone handling. Pilot measurement will replace benchmarks with observed data.', { x: 0.72, y: 5.65, w: 11.5, h: 0.16, fontFace: FONT, fontSize: 6.3, italic: true, color: C.quiet, margin: 0, fit: 'shrink' });
}

// 3. Why now
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Why now', 3);
  addTitle(slide, 'Three forces', 'AI is abundant. Healthcare-specific execution is scarce.', 'The investable opportunity is not another model wrapper. It is the operating layer that adapts safely to real workflows and proves measurable value.');
  const items = [
    ['01', 'LABOR PRESSURE', 'Administrative demand keeps rising while practices struggle to add front-desk capacity.'],
    ['02', 'MODEL COMMODITIZATION', 'Voice and language models lower the cost to build, raising the premium on workflow depth and delivery.'],
    ['03', 'BUYER EXPECTATION', 'Healthcare buyers increasingly expect customized implementation, security readiness, and attributable ROI.'],
  ];
  items.forEach((item, index) => {
    const y = 2.9 + index * 1.12;
    slide.addText(item[0], { x: 0.76, y, w: 0.55, h: 0.42, fontFace: MONO, fontSize: 18, bold: true, color: C.mint, margin: 0 });
    label(slide, item[1], 1.52, y + 0.03, 2.5, index === 1 ? C.cyan : C.mint);
    body(slide, item[2], 4.0, y - 0.02, 7.75, 0.56, { size: 12, color: C.white });
    slide.addShape(pptx.ShapeType.line, { x: 1.52, y: y + 0.74, w: 10.2, h: 0, line: { color: C.line, width: 0.7 } });
  });
  panel(slide, 0.72, 6.25, 11.9, 0.48, { fill: '10201F', line: C.teal });
  body(slide, 'ROCK HEALTH LENS  //  Durable advantage comes from founder edge, ownership of the operating layer, hands-on delivery, and trusted partnerships.', 0.96, 6.4, 11.45, 0.16, { mono: true, size: 7.5, color: C.mint, bold: true });
  addSource(slide, 'Source: Rock Health, H1 2026 funding and market overview: Durable roots, shifting routes (July 13, 2026).');
}

// 4. Product flow
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Product', 4);
  addTitle(slide, 'From hello to handled', 'One call becomes a structured operational outcome.', 'DialTone.Med answers, identifies intent, applies practice-approved rules, and moves the request into the right next action.');
  const stages = [
    ['01', 'ANSWER', 'Practice-branded voice agent'],
    ['02', 'UNDERSTAND', 'Identity + intent capture'],
    ['03', 'EXECUTE', 'Deterministic workflow tools'],
    ['04', 'CONFIRM', 'SMS / email / staff handoff'],
  ];
  stages.forEach((item, index) => {
    const x = 0.72 + index * 3.05;
    panel(slide, x, 3.03, 2.55, 2.35, { line: index === 3 ? C.mint : C.line });
    slide.addText(item[0], { x: x + 0.25, y: 3.3, w: 0.55, h: 0.35, fontFace: MONO, fontSize: 15, bold: true, color: C.mint, margin: 0 });
    label(slide, item[1], x + 0.25, 3.86, 2.0, index === 3 ? C.cyan : C.mint);
    body(slide, item[2], x + 0.25, 4.33, 2.0, 0.6, { size: 12, color: C.white, bold: true });
    if (index < 3) arrow(slide, x + 2.67, 4.03, 0.25);
  });
  panel(slide, 0.72, 5.82, 11.7, 0.63, { fill: C.bg, line: C.line });
  body(slide, 'VOICE ENTRY  ->  PRACTICE POLICY  ->  WORKFLOW ACTION  ->  AUDITABLE OUTCOME', 1.05, 6.05, 11.0, 0.18, { mono: true, size: 9.5, color: C.mint, bold: true });
}

// 5. Core workflows
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Platform', 5);
  addTitle(slide, 'Four workflow families', 'A patient-engagement platform, not a single-purpose bot.', 'Each workflow shares the same identity, consent, policy, communication, and audit foundation.');
  const cards = [
    ['APPOINTMENTS', 'Review, schedule, reschedule, and callback workflows.', 'SCHEDULING'],
    ['REFILLS', 'Capture eligible requests and route provider-approved follow-up.', 'MEDICATION'],
    ['BILLING', 'Look up balances, support payment flows, and record outcomes.', 'REVENUE'],
    ['INSURANCE', 'Collect eligibility details and move verification forward.', 'ELIGIBILITY'],
  ];
  cards.forEach((item, index) => {
    const col = index % 2; const row = Math.floor(index / 2);
    const x = 0.72 + col * 6.0; const y = 2.88 + row * 1.65;
    panel(slide, x, y, 5.65, 1.35, { line: index === 0 ? C.mint : C.line });
    label(slide, item[2], x + 0.25, y + 0.22, 1.65, index % 2 ? C.cyan : C.mint);
    body(slide, item[0], x + 0.25, y + 0.54, 2.0, 0.32, { size: 15, color: C.white, bold: true });
    body(slide, item[1], x + 2.35, y + 0.37, 2.95, 0.55, { size: 10 });
  });
  body(slide, 'Shared controls: practice branding  |  explicit consent  |  approved recipients  |  tenant isolation  |  audit history', 0.78, 6.35, 11.4, 0.26, { mono: true, size: 8.5, color: C.mint });
}

// 6. Product evidence
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Product proof', 6);
  addTitle(slide, 'Built, staged, and deliberately gated', 'The demo MVP proves workflow orchestration before production integrations.', 'Current evidence uses synthetic data. Production healthcare connections remain gated roadmap work, not implied capability.');
  panel(slide, 0.72, 2.88, 5.7, 3.4, { line: C.mint });
  label(slide, 'Implemented in staging', 1.02, 3.18, 3.2);
  const built = [
    'Inbound voice dispatch and practice branding',
    'Deterministic scheduling and pseudo eligibility',
    'Billing lookup, test payment, and refill outcomes',
    'Consent-bound SMS and branded email workflows',
    'Authenticated admin controls and audit foundations',
  ];
  built.forEach((text, index) => body(slide, `+ ${text}`, 1.02, 3.67 + index * 0.43, 4.95, 0.24, { mono: true, size: 8.3, color: index < 3 ? C.white : C.muted }));
  panel(slide, 6.75, 2.88, 5.7, 3.4, { line: C.amber });
  label(slide, 'Production gates / roadmap', 7.05, 3.18, 3.6, C.amber);
  const roadmap = [
    'Live payer, EHR, pharmacy, and eRx connections',
    'Carrier delivery and actual-call smoke validation',
    'Consent recording provider evidence',
    'Production PHI workflows and customer deployment',
    'Pilot-specific ROI and safety evidence',
  ];
  roadmap.forEach((text, index) => body(slide, `> ${text}`, 7.05, 3.67 + index * 0.43, 4.95, 0.24, { mono: true, size: 8.3, color: index === 4 ? C.amber : C.muted }));
  addSource(slide, 'Product status grounded in dialtone_med_app README and staging checkpoint documentation, reviewed November 2026.');
}

// 7. Pilots
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Pilot validation', 7);
  addTitle(slide, 'Two design partners lined up', 'A PBM and a general practice create two views of the same engagement layer.', 'Status: planned pilots / design partners. The deck does not claim live deployment, revenue, or measured outcomes.');
  panel(slide, 0.72, 2.92, 3.65, 2.85, { line: C.cyan });
  label(slide, 'Pilot archetype 01', 1.02, 3.2, 2.2, C.cyan);
  body(slide, 'PBM', 1.02, 3.65, 2.8, 0.52, { size: 23, color: C.white, bold: true });
  body(slide, 'Test refill-oriented engagement, routing, consent, and partner workflow requirements.', 1.02, 4.34, 2.8, 0.85, { size: 11 });
  panel(slide, 4.58, 2.92, 3.65, 2.85, { line: C.mint });
  label(slide, 'Pilot archetype 02', 4.88, 3.2, 2.2);
  body(slide, 'GENERAL PRACTICE', 4.88, 3.65, 2.85, 0.52, { size: 18, color: C.white, bold: true });
  body(slide, 'Test appointment, billing, refill, and insurance workflows in a front-desk environment.', 4.88, 4.34, 2.8, 0.85, { size: 11 });
  panel(slide, 8.43, 2.92, 4.0, 2.85, { fill: '10201F', line: C.teal });
  label(slide, 'Shared pilot scorecard', 8.73, 3.2, 3.0);
  const metrics = ['Answer / containment rate', 'Intent accuracy', 'Time to resolution', 'Staff minutes saved', 'Workflow completion', 'Safety + escalation'];
  metrics.forEach((text, index) => body(slide, `${String(index + 1).padStart(2, '0')}  ${text}`, 8.75, 3.65 + index * 0.31, 3.15, 0.2, { mono: true, size: 7.6, color: index < 2 ? C.white : C.muted }));
  body(slide, 'Pilot objective: convert assumptions into attributable operational evidence and a repeatable implementation playbook.', 0.78, 6.18, 11.4, 0.35, { size: 12, color: C.white, bold: true });
}

// 8. GTM sequencing
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Go to market', 8);
  addTitle(slide, 'Evidence before expansion', 'Use the pilots to choose the first repeatable market, buyer, and value case.', 'The PBM and GP are not treated as two simultaneous scale motions. They are structured learning environments for market sequencing.');
  const steps = [
    ['01', 'DESIGN', 'Map buyer, workflow, security, and integration requirements with each pilot.'],
    ['02', 'MEASURE', 'Establish baseline, launch controlled workflows, and attribute operational change.'],
    ['03', 'SELECT', 'Choose the first market with the clearest urgency, evidence path, and purchase motion.'],
    ['04', 'REPEAT', 'Standardize implementation and expand through integrations, partners, and additional sites.'],
  ];
  steps.forEach((item, index) => {
    const x = 0.72 + index * 3.04;
    slide.addShape(pptx.ShapeType.ellipse, { x, y: 3.0, w: 0.55, h: 0.55, fill: { color: index === 2 ? C.mint : C.panel2 }, line: { color: C.mint, width: 1 } });
    body(slide, item[0], x + 0.11, 3.18, 0.34, 0.12, { mono: true, size: 7.5, color: index === 2 ? C.bg : C.mint, bold: true });
    if (index < 3) slide.addShape(pptx.ShapeType.line, { x: x + 0.56, y: 3.28, w: 2.47, h: 0, line: { color: C.line, width: 1.5, beginArrowType: 'none', endArrowType: 'triangle' } });
    label(slide, item[1], x, 3.9, 2.35, index === 2 ? C.cyan : C.mint);
    body(slide, item[2], x, 4.3, 2.55, 1.0, { size: 10 });
  });
  panel(slide, 0.72, 5.72, 11.75, 0.66, { fill: C.bg, line: C.line });
  body(slide, 'BUYING TABLE  //  Operations champion + finance + IT/security + compliance/procurement', 1.02, 5.94, 11.15, 0.2, { mono: true, size: 8.5, color: C.mint, bold: true });
  addSource(slide, 'Framework informed by Rock Health, Three questions to pressure-test healthcare enterprise go-to-market strategy (Sept. 28, 2026).');
}

// 9. Business model
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Business model', 9);
  addTitle(slide, 'Tiered expansion', 'Land with answering. Price per provider. Expand with depth.', 'Tiers scale with workflow depth and integration. Price scales with providers and call volume, because AI minutes do.');
  const tiers = [
    ['TIER 1', 'ESSENTIAL ANSWERING', 'Branding + four-category call capture'],
    ['TIER 2', 'PATIENT CONNECT', 'SMS workflows + recorded-call visibility'],
    ['TIER 3', 'PRACTICE OPERATIONS', 'EMR integration + analytics upgrades'],
    ['TIER 4', 'ENTERPRISE NETWORK', 'EHR integration + multi-site support'],
  ];
  tiers.forEach((item, index) => {
    const x = 0.7 + index * 3.05;
    panel(slide, x, 2.9, 2.72, 1.4, { line: index === 1 ? C.mint : C.line, fill: index === 1 ? '10201F' : C.panel });
    label(slide, item[0], x + 0.22, 3.12, 1.15, index === 3 ? C.cyan : C.mint);
    body(slide, item[1], x + 0.22, 3.4, 2.3, 0.3, { size: 12, color: C.white, bold: true });
    body(slide, item[2], x + 0.22, 3.76, 2.3, 0.45, { size: 8.8 });
  });
  panel(slide, 0.7, 4.55, 11.87, 1.62);
  label(slide, 'Unit economics at the $999 solo rate', 0.95, 4.8, 4.0, C.cyan);
  metric(slide, '~$0.30', 'Variable cost per AI-handled call incl. SMS + email confirmation, vs ~$3.25 of staff time', 0.95, 5.05, 2.75, C.mint);
  metric(slide, '~2,500', 'AI minutes per physician per month (~53 calls/day, ~2.2 min blended)', 3.9, 5.05, 2.75, C.white);
  metric(slide, '70-85%', 'Gross margin per solo practice at $999, across the cost-stack range', 6.85, 5.05, 2.75, C.cyan);
  metric(slide, '$2k/mo', 'Fixed HIPAA/BAA platform cost, amortized as the customer base grows', 9.8, 5.05, 2.6, C.amber);
  body(slide, 'Standard: $999/mo solo + $699/mo per added provider, plus a 1.5% platform fee on patient payments the agent collects. Pilot: $599/mo, time-boxed.', 0.76, 6.33, 11.5, 0.26, { mono: true, size: 8.2, color: C.amber });
  addSource(slide, 'Vendor list prices, Nov 2026: Vapi $0.05/min + STT/LLM/TTS pass-through; Telnyx $0.0052/min inbound; Vapi HIPAA add-on $2,000/mo. Volume: MGMA. Staff: $24.37/hr loaded. Containment and handle time are assumptions pending pilots.');
}

// 10. Market size
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Market size', 10);
  addTitle(slide, 'Market size', 'An 85,000-practice wedge, sized bottom-up.', 'Independent practices feel the front-desk strain today. We enter at the Tier 1 floor and expand ACV with workflow depth and integration.');
  metric(slide, '85,000', 'Target practices (independent, 1–10 physicians)', 0.72, 2.95, 3.7, C.mint);
  metric(slide, '$1.0B', 'Bottom-up TAM at the $999 / mo solo rate', 5.0, 2.95, 3.7, C.cyan);
  metric(slide, '$2B+', 'Serviceable with per-provider and tier expansion', 9.1, 2.95, 3.5, C.white);
  const tiers = [
    ['Solo — 1 physician', '~50 inbound calls/day. Price-sensitive and fast to decide, lower contract value.', C.line],
    ['Small group — 2–5 physicians', 'The sweet spot: budget to buy, small enough to skip enterprise procurement.', C.mint],
    ['Regional — 6–10 physicians', 'Highest leakage. Needs EHR integration; longer cycles, higher retention.', C.line],
  ];
  tiers.forEach((t, i) => {
    const x = 0.72 + i * 4.07;
    panel(slide, x, 4.35, 3.75, 1.55, { line: t[2] });
    label(slide, t[0], x + 0.3, 4.62, 3.3, t[2] === C.mint ? C.mint : C.cyan);
    body(slide, t[1], x + 0.3, 4.98, 3.2, 0.72, { size: 9.8, color: C.white });
  });
  body(slide, 'Bottom-up: ~85,000 practices × ~$12,000 solo ACV ≈ $1.0B; multi-provider practices (~$29k ACV at 3 MDs) lift it past $2B. Each fields ~53 inbound calls per physician per day against $50k–$200k of front-desk labor, ~85% of it automatable. Adjacency: PBMs and multi-site networks extend the same engagement layer.', 0.72, 6.08, 11.85, 0.4, { size: 9, color: C.muted });
  addSource(slide, 'Practice counts: AMA Physician Practice Benchmark Survey; IQVIA. Call volume: MGMA. Wages: US Bureau of Labor Statistics. Market size is a bottom-up estimate for pilot validation.');
}

// 11. Competition
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Competition', 11);
  addTitle(slide, 'Positioning', 'Between point bots and heavyweight system replacement.', 'DialTone.Med aims to coordinate multiple patient workflows while fitting above existing practice systems.');
  const left = 2.25, top = 2.82, width = 8.15, height = 3.35;
  slide.addShape(pptx.ShapeType.line, { x: left, y: top + height, w: width, h: 0, line: { color: C.muted, width: 1 } });
  slide.addShape(pptx.ShapeType.line, { x: left, y: top, w: 0, h: height, line: { color: C.muted, width: 1 } });
  body(slide, 'LOW WORKFLOW DEPTH', left - 0.25, top + height + 0.23, 2.1, 0.18, { mono: true, size: 6.8, color: C.quiet });
  body(slide, 'HIGH WORKFLOW DEPTH', left + width - 1.7, top + height + 0.23, 2.0, 0.18, { mono: true, size: 6.8, color: C.quiet });
  slide.addText('SYSTEM REPLACEMENT', { x: 0.75, y: 3.36, w: 1.2, h: 0.18, rotate: 270, fontFace: MONO, fontSize: 6.8, color: C.quiet, margin: 0 });
  slide.addText('SYSTEM AUGMENTATION', { x: 0.75, y: 5.41, w: 1.35, h: 0.18, rotate: 270, fontFace: MONO, fontSize: 6.8, color: C.quiet, margin: 0 });
  // [label, x, y, color, labelSide]  y: top = system replacement, bottom = augmentation; x: workflow depth
  const competitors = [
    ['Generic voice bots', 2.6, 5.78, C.quiet, 'r'],
    ['Zocdoc Zo', 4.3, 5.42, C.quiet, 'r'],
    ['Simbo AI', 5.1, 5.78, C.cyan, 'r'],
    ['Parakeet', 5.6, 5.06, C.cyan, 'r'],
    ['Hello Patient', 6.9, 5.42, C.cyan, 'r'],
    ['Weave', 5.9, 3.2, C.teal, 'r'],
    ['Luma / Artera', 7.3, 3.95, C.teal, 'r'],
    ['Epic Emmie', 8.3, 2.95, C.amber, 'r'],
    ['Hyro / Syllable', 9.35, 3.6, C.amber, 'l'],
    ['Assort Health', 9.2, 4.3, C.amber, 'l'],
    ['DialTone.Med', 8.6, 5.78, C.mint, 'r'],
  ];
  slide.addShape(pptx.ShapeType.ellipse, { x: 8.51, y: 5.69, w: 0.4, h: 0.4, fill: { color: C.bg, transparency: 100 }, line: { color: C.mint, width: 1 } });
  competitors.forEach(([text, x, y, color, side]) => {
    slide.addShape(pptx.ShapeType.ellipse, { x, y, w: 0.22, h: 0.22, fill: { color }, line: { color } });
    if (side === 'l') {
      slide.addText(text.toUpperCase(), { x: x - 1.55, y: y + 0.03, w: 1.45, h: 0.2, fontFace: MONO, fontSize: 7, bold: true, color, charSpacing: 1.1, align: 'right', margin: 0, fit: 'shrink' });
    } else {
      label(slide, text, x + 0.32, y + 0.03, 1.45, color);
    }
  });
  panel(slide, 10.72, 2.82, 1.85, 3.35, { fill: C.panel, line: C.line });
  label(slide, 'Differentiation', 10.97, 3.15, 1.35);
  body(slide, 'Multi-workflow context\n\nPractice-specific delivery\n\nIntegration path\n\nAuditable controls', 10.97, 3.68, 1.28, 1.95, { size: 9.2, color: C.white });
  addSource(slide, 'Placement reflects public product positioning as of November 2026 (vendor sites, trade press). Grey: horizontal bots. Cyan: practice voice AI. Teal: comms and phone platforms. Amber: enterprise and EHR-native. DialTone.Med shown at target position pending pilot validation.');
}

// 12. Durable advantage
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Durable advantage', 12);
  addTitle(slide, 'The moat compounds through deployment', 'Each implementation should make the next workflow faster, safer, and harder to replace.', 'Durability comes from accumulated operating context and trusted execution, not exclusive access to a foundation model.');
  const items = [
    ['WORKFLOW LIBRARY', 'Reusable, versioned patterns across appointments, refills, billing, and insurance.'],
    ['IMPLEMENTATION DATA', 'Observed failure modes, escalations, and completion benchmarks improve deployment quality.'],
    ['INTEGRATION GRAPH', 'Practice, payer, messaging, and EHR connections increase switching cost and context.'],
    ['TRUST LAYER', 'Consent, tenant isolation, audit history, and delivery controls support buyer confidence.'],
  ];
  items.forEach((item, index) => {
    const x = 0.72 + index * 3.05;
    panel(slide, x, 3.0, 2.7, 2.75, { line: index === 3 ? C.mint : C.line });
    slide.addText(String(index + 1).padStart(2, '0'), { x: x + 0.25, y: 3.3, w: 0.45, h: 0.3, fontFace: MONO, fontSize: 14, bold: true, color: C.mint, margin: 0 });
    label(slide, item[0], x + 0.25, 3.9, 2.2, index === 1 ? C.cyan : C.mint);
    body(slide, item[1], x + 0.25, 4.45, 2.2, 0.95, { size: 10 });
  });
  body(slide, 'COMPOUNDING LOOP  //  more workflows -> more operating context -> stronger outcomes -> deeper customer trust', 0.78, 6.2, 11.4, 0.26, { mono: true, size: 8.7, color: C.mint, bold: true });
}

// 13. Raise and milestones
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Seed plan', 13);
  addTitle(slide, '$1.5M seed', 'Fund 24 months to a Series A-ready data set.', 'Staged hiring stretches $1.5M to 24 months post-close: 18 months of execution plus a 6-month fundraising buffer. Revenue is not counted toward runway.');
  const allocations = [
    ['45%', 'ENGINEERING  $675K', C.mint],
    ['30%', 'GO-TO-MARKET  $450K', C.cyan],
    ['15%', 'COMPLIANCE  $225K', C.amber],
    ['10%', 'OPERATIONS  $150K', C.muted],
  ];
  let x = 0.72;
  allocations.forEach(([value, name, color]) => {
    const w = 11.7 * Number(value.replace('%', '')) / 100;
    slide.addShape(pptx.ShapeType.rect, { x, y: 2.9, w, h: 0.34, fill: { color }, line: { color } });
    metric(slide, value, name, x, 3.42, Math.max(w, 1.45), color);
    x += w;
  });
  body(slide, 'Engineering funds the slide 6 production gates: payer, EHR, pharmacy and eRx connections, consent recording, and PHI workflows. Compliance funds the HIPAA/BAA platform ($2k/mo), SOC 2 groundwork, and legal. Go-to-market funds one hands-on implementation lead and pilot delivery.', 0.76, 4.5, 11.6, 0.4, { size: 8.8, color: C.muted });
  panel(slide, 0.72, 4.98, 7.35, 1.2, { fill: C.panel, line: C.line });
  const milestones = [
    ['Q1 2027', 'PILOTS LIVE', 'Controlled PBM + GP workflows'],
    ['Q2 2027', 'EVIDENCE', 'Scorecard: ROI, safety, implementation'],
    ['Q3 2027', 'PRODUCTION', 'Priority integrations + compliance'],
    ['Q4 2027', 'REPEATABILITY', 'First-market playbook + launch'],
  ];
  milestones.forEach((item, index) => {
    const mx = 0.98 + index * 1.8;
    body(slide, item[0], mx, 5.18, 1.5, 0.16, { mono: true, size: 7, color: C.cyan, bold: true });
    label(slide, item[1], mx, 5.4, 1.6, C.mint);
    body(slide, item[2], mx, 5.64, 1.6, 0.45, { size: 8.2, color: C.white });
  });
  panel(slide, 8.3, 4.98, 4.27, 1.2, { fill: '10201F', line: C.mint });
  label(slide, 'Series A gate (end of 2027)', 8.55, 5.18, 3.8, C.cyan);
  body(slide, '> 20–30 paying practices (~$400k–$700k ARR)\n> 70%+ gross margin on observed per-minute cost\n> Pilot scorecard thresholds met\n> 2 production EHR / PM integrations live', 8.55, 5.42, 3.85, 0.7, { size: 8.4, color: C.white });
  body(slide, 'Runway: 24 months at ~$62k/mo average burn. Team: founder, engineer 1 at close, implementation lead at month 3, engineer 2 at month 6. Series A process opens month 15 with Q4 2027 evidence in hand.', 0.76, 6.33, 11.5, 0.26, { mono: true, size: 8.2, color: C.amber });
  addSource(slide, 'Allocation and burn are planning estimates. Milestone timing depends on pilot agreements, production integrations, and compliance gates. Revenue from paying practices extends runway and is excluded above.');
}

// 14. Founder and operating model
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addChrome(slide, 'Execution', 14);
  addTitle(slide, 'Founder-led, pilot-built', 'Steven Cotton is building the platform with healthcare workflows as the constraint.', 'The operating model pairs product engineering with hands-on implementation so pilot learning becomes reusable platform capability.');
  panel(slide, 0.72, 2.92, 4.1, 3.2, { line: C.mint });
  label(slide, 'Founder & CEO', 1.05, 3.25, 2.0);
  body(slide, 'Steven Cotton', 1.05, 3.74, 3.2, 0.55, { size: 24, color: C.white, bold: true });
  body(slide, 'ByteStreams LLC\nMemphis, Tennessee', 1.05, 4.52, 3.1, 0.72, { size: 12, color: C.muted });
  label(slide, 'Shared voice stack', 1.05, 5.26, 3.4, C.cyan);
  body(slide, "Reused the voice-agent stack built for DialTone.Menu to stand up DialTone.Med's phone agent.", 1.05, 5.5, 3.55, 0.55, { size: 9.8, color: C.white });
  panel(slide, 5.2, 2.92, 7.25, 3.2);
  label(slide, 'Healthcare operations background', 5.53, 3.25, 4.5, C.cyan);
  const edge = [
    ['DEMAND MODELING', 'Built probability-based models forecasting surgical implant and device-component utilization from historical procedure data.'],
    ['NETWORK SCALING', 'Designed geospatial logistics heat maps that optimized inventory-hub placement, supporting expansion from 8 to 37 distribution hubs.'],
    ['FIELD OPS PLATFORM', 'Led a field-operations platform where reps schedule surgical case deliveries, monitor inventory, and coordinate replenishment across hospitals and surgery centers.'],
  ];
  edge.forEach((item, index) => {
    const y = 3.78 + index * 0.76;
    label(slide, item[0], 5.53, y, 2.9, C.mint);
    body(slide, item[1], 5.53, y + 0.24, 6.6, 0.5, { size: 9.8, color: C.white });
  });
  addSource(slide, 'Founder healthcare operations background and prior product work provided by Steven Cotton; identity and company location from the DialTone.Med Brand Kit, version 1.0 (April 2026).');
}

// 15. Close
{
  const slide = pptx.addSlide('DIALTONE_DARK'); addGrid(slide);
  slide.addText([
    { text: 'DialTone', options: { bold: true, color: C.white } },
    { text: '.Med', options: { color: C.mint } },
  ], { x: 0.72, y: 0.52, w: 2.6, h: 0.38, fontFace: FONT, fontSize: 18, margin: 0 });
  label(slide, 'Investment opportunity', 0.75, 1.55, 3.2);
  slide.addText('Build the patient-engagement layer\nhealthcare practices can trust.', { x: 0.72, y: 1.92, w: 8.6, h: 1.5, fontFace: FONT, fontSize: 34, bold: true, color: C.white, margin: 0, fit: 'shrink' });
  panel(slide, 0.75, 3.85, 11.75, 1.45, { fill: C.panel, line: C.mint });
  const close = [
    ['2', 'PILOT DESIGN PARTNERS LINED UP'],
    ['4', 'CORE PATIENT WORKFLOWS'],
    ['$1.5M', 'SEED ROUND'],
  ];
  close.forEach((item, index) => {
    const x = 1.15 + index * 3.8;
    metric(slide, item[0], item[1], x, 4.18, 2.8, index === 1 ? C.cyan : C.mint);
  });
  body(slide, 'Pilot -> evidence -> repeatability -> platform expansion', 0.78, 5.92, 7.0, 0.32, { mono: true, size: 11, color: C.mint, bold: true });
  body(slide, 'dialtone.med  |  hello@bytestreams.ai', 0.78, 6.5, 5.5, 0.24, { size: 10, color: C.white, bold: true });
  body(slide, 'CONFIDENTIAL // INVESTOR DRAFT', 9.3, 6.5, 3.2, 0.2, { mono: true, size: 7, color: C.quiet });
}

await pptx.writeFile({ fileName: OUT });