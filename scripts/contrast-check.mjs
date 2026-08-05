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
  ink: "#10161C",
  paper: "#EFEDE6",
  card: "#F7F5EF",
  rust: "#A34F2C",
  "rust-ink": "#FBF6F0",
  steel: "#456F87",
  "steel-ink": "#F4F8FA",
  "eyebrow-accent": "#E8A87C",
  fg: "#10161C",
  "ink-fg": "#F0EEE8",
};

const pairs = [
  ["rust text on paper", tokens.rust, tokens.paper, 4.5],
  ["rust-ink on rust (Donate button)", tokens["rust-ink"], tokens.rust, 4.5],
  ["steel text on paper", tokens.steel, tokens.paper, 4.5],
  ["steel-ink on steel (btn-steel)", tokens["steel-ink"], tokens.steel, 4.5],
  ["ink-fg on ink (headline/body dark)", tokens["ink-fg"], tokens.ink, 4.5],
  ["eyebrow-accent on ink", tokens["eyebrow-accent"], tokens.ink, 4.5],
  ["fg on paper (headline/body light)", tokens.fg, tokens.paper, 4.5],
  ["steel as outline-button border on ink (UI component)", tokens.steel, tokens.ink, 3.0],
  ["rust text on card", tokens.rust, tokens.card, 4.5],
  ["steel text on card", tokens.steel, tokens.card, 4.5],
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
