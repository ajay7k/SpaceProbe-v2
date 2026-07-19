export interface SEOContent {
  title: string;
  description: string;
}

export interface HeroContent {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
}

export interface PageContent {
  seo: SEOContent;
  hero: HeroContent;
  sections?: Record<string, unknown>;
}
