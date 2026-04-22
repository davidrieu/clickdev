import {
  MAINTENANCE_ECOMMERCE_KEYWORDS,
  MAINTENANCE_ECOMMERCE_PATH,
  maintenanceEcommerceMetaDescription,
  maintenanceEcommerceMetaTitle,
} from '@/lib/constants/maintenance-ecommerce-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function maintenanceEcommercePageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: maintenanceEcommerceMetaTitle,
      description: maintenanceEcommerceMetaDescription,
      path: MAINTENANCE_ECOMMERCE_PATH,
    }),
    keywords: [...MAINTENANCE_ECOMMERCE_KEYWORDS],
  };
}
