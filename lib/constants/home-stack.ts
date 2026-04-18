export type StackItem = {
  label: string;
  href: string;
};

/** 12 expertises — liens vers silo /expertises/ (pages à produire en Phase 4). */
export const homeStackItems: StackItem[] = [
  { label: "Next.js", href: "/expertises/nextjs/" },
  { label: "WordPress", href: "/expertises/wordpress/" },
  { label: "Shopify", href: "/expertises/shopify/" },
  { label: "WooCommerce", href: "/expertises/woocommerce/" },
  { label: "React Native", href: "/expertises/react-native/" },
  { label: "Laravel", href: "/expertises/laravel/" },
  { label: "Node.js", href: "/expertises/nodejs/" },
  { label: "OpenAI", href: "/expertises/openai/" },
  { label: "Claude API", href: "/expertises/claude-api/" },
  { label: "LangChain", href: "/expertises/langchain/" },
  { label: "Sanity", href: "/expertises/sanity/" },
  { label: "PostgreSQL", href: "/expertises/postgresql/" },
];
