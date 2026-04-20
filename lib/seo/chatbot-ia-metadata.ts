import {
  CHATBOT_IA_KEYWORDS,
  CHATBOT_IA_PATH,
  chatbotIaMetaDescription,
  chatbotIaMetaTitle,
} from '@/lib/constants/chatbot-ia-page';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export function chatbotIaPageMetadata(): Metadata {
  return {
    ...listingPageMetadata({
      title: chatbotIaMetaTitle,
      description: chatbotIaMetaDescription,
      path: CHATBOT_IA_PATH,
    }),
    keywords: [...CHATBOT_IA_KEYWORDS],
  };
}
