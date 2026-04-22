import {
  MAINTENANCE_WORDPRESS_KEYWORDS,
  MAINTENANCE_WORDPRESS_PATH,
  maintenanceWordpressMetaDescription,
  maintenanceWordpressMetaTitle,
} from '@/lib/constants/maintenance-wordpress-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function maintenanceWordpressPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: maintenanceWordpressMetaTitle,
      description: maintenanceWordpressMetaDescription,
      path: MAINTENANCE_WORDPRESS_PATH,
    }),
    keywords: [...MAINTENANCE_WORDPRESS_KEYWORDS],
  };
}
