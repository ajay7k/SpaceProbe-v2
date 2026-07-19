import { SITE_CONFIG } from '@/constants/site';

interface PageMetadata {
  title?: string;
  description?: string;
}

/**
 * Clean metadata coordinator to dynamically update page titles
 * and meta description tags inside the DOM.
 */
export function updatePageMetadata({ title, description }: PageMetadata = {}) {
  if (typeof document === 'undefined') return;

  // Set Title
  const documentTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.titleFallback;
  document.title = documentTitle;

  // Set Description
  const metaDescription = document.querySelector('meta[name="description"]');
  const descriptionContent = description || SITE_CONFIG.descriptionFallback;

  if (metaDescription) {
    metaDescription.setAttribute('content', descriptionContent);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = descriptionContent;
    document.head.appendChild(meta);
  }
}
