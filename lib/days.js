const daysInMonth = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getDate();
export const daysOfOneMonth = Array.from(
  { length: daysInMonth },
  (_, i) => i + 1
);
