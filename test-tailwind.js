const css = `
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-primary: #ff0000;
}
.test {
  @apply dark:bg-primary;
}
`;
console.log("ready");
