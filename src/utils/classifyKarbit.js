export function classifyKarbit(favorite) {
  if (favorite <= 5000) return "Setia banget";
  if (favorite <= 20000) return "Setia";
  if (favorite <= 50000) return "Agak karbit";
  if (favorite <= 90000) return "Karbit";
  if (favorite <= 130000) return "Raja karbit";
  if (favorite <= 160000) return "Lord karbitos";
  return "Lord karbitos tukang klem istri orang";
}