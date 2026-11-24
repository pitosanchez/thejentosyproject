// WCAG 2.2 contrast checker for the brand palette (tokens in src/styles/global.css).
// Run after any palette change: node scripts/contrast-check.mjs
// AA thresholds: 4.5:1 for normal text, 3:1 for large text and UI components (SC 1.4.11).

function hexToRgb(hex) {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function relLuminance([r, g, b]) {
  const chan = (c) => {
    const cs = c / 255;
    return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
  };
  const [R, G, B] = [chan(r), chan(g), chan(b)];
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrast(hex1, hex2) {
  const L1 = relLuminance(hexToRgb(hex1));
  const L2 = relLuminance(hexToRgb(hex2));
  const [lighter, darker] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (lighter + 0.05) / (darker + 0.05);
}

// Current tokens (keep in sync with src/styles/global.css)
const tokens = {
  ink: "#0D0D0D", // black (forest green #1D2A1E → navy → black, 2026-11-24)
  paper: "#FFFFFF",
  card: "#FFFFFF",
  sage: "#F3F2EE", // .on-soft band background (light warm gray; token name kept)
  rust: "#8C5A00",
  gold: "#F5C02E",
  "gold-ink": "#0D0D0D",
  "rust-ink": "#FBF6EC",
  "rust-on-dark": "#F5C02E", // = --gold
  steel: "#111111",
  "steel-ink": "#FFFFFF",
  "eyebrow-accent": "#F5C02E", // = --gold
  fg: "#111111",
  "ink-fg": "#F5F2EA",
};

const pairs = [
  ["rust text on paper", tokens.rust, tokens.paper, 4.5],
  ["gold-ink on gold (Donate / primary pill button)", tokens["gold-ink"], tokens.gold, 4.5],
  ["gold text on ink (stats, eyebrows on dark)", tokens.gold, tokens.ink, 4.5],
  ["steel text on paper", tokens.steel, tokens.paper, 4.5],
  ["steel-ink on steel (btn-steel)", tokens["steel-ink"], tokens.steel, 4.5],
  ["ink-fg on ink (headline/body dark)", tokens["ink-fg"], tokens.ink, 4.5],
  ["eyebrow-accent on ink", tokens["eyebrow-accent"], tokens.ink, 4.5],
  ["fg on paper (headline/body light)", tokens.fg, tokens.paper, 4.5],
  // Neither accent is asked to double as a UI element directly on the dark
  // --ink background (see the token comment in global.css) — dark-bg
  // outline buttons use --ink-fg instead, so that's the pair that matters.
  ["ink-fg as outline-button border on ink (UI component)", tokens["ink-fg"], tokens.ink, 3.0],
  ["rust text on card", tokens.rust, tokens.card, 4.5],
  ["steel text on card", tokens.steel, tokens.card, 4.5],
  ["rust as left-border accent on card (UI component)", tokens.rust, tokens.card, 3.0],
  ["steel as left-border accent on card (UI component)", tokens.steel, tokens.card, 3.0],
  ["rust-on-dark as nav menu link hover on ink", tokens["rust-on-dark"], tokens.ink, 4.5],
  // .on-soft bands re-scope --ink to --sage and --ink-fg to --fg, and
  // --eyebrow-accent/--rust-on-dark to --rust (see global.css).
  ["fg on sage (.on-soft body/headline)", tokens.fg, tokens.sage, 4.5],
  ["rust on sage (.on-soft eyebrow/link)", tokens.rust, tokens.sage, 4.5],
  ["steel on sage (.on-soft text)", tokens.steel, tokens.sage, 4.5],
  ["fg as outline-button border on sage (UI component)", tokens.fg, tokens.sage, 3.0],
];

console.log("label".padEnd(52), "ratio".padEnd(8), "required", "pass?");
let anyFail = false;
for (const [label, fg, bg, required] of pairs) {
  const r = contrast(fg, bg);
  const pass = r >= required;
  if (!pass) anyFail = true;
  console.log(label.padEnd(52), r.toFixed(2).padEnd(8), String(required).padEnd(9), pass ? "PASS" : "FAIL");
}

process.exitCode = anyFail ? 1 : 0;
