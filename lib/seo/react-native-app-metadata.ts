import {
  REACT_NATIVE_APP_KEYWORDS,
  REACT_NATIVE_APP_PATH,
  reactNativeAppMetaDescription,
  reactNativeAppMetaTitle,
} from '@/lib/constants/react-native-app-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function reactNativeAppPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: reactNativeAppMetaTitle,
      description: reactNativeAppMetaDescription,
      path: REACT_NATIVE_APP_PATH,
    }),
    keywords: [...REACT_NATIVE_APP_KEYWORDS],
  };
}
