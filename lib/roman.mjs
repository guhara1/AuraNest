// ============================================================================
// 한글 → 로마자 URL 슬러그 변환 (개정 로마자 근사)
// 슬러그 용도이므로 음운 동화 규칙은 생략(근사). 부모 안에서 고유하면 충분.
// ============================================================================
const CHO = ["g","kk","n","d","tt","r","m","b","pp","s","ss","","j","jj","ch","k","t","p","h"];
const JUNG = ["a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","wo","we","wi","yu","eu","ui","i"];
const JONG = ["","k","k","ks","n","nj","nh","t","l","lk","lm","lp","ls","lt","lp","lh","m","p","ps","t","t","ng","t","t","k","t","p","t"];

function romanizeChar(ch) {
  const code = ch.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return null;
  const cho = Math.floor(code / 588);
  const jung = Math.floor((code % 588) / 28);
  const jong = code % 28;
  return CHO[cho] + JUNG[jung] + JONG[jong];
}

export function romanize(s) {
  let out = "";
  for (const ch of String(s)) {
    const r = romanizeChar(ch);
    out += r !== null ? r : "";
  }
  return out.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
