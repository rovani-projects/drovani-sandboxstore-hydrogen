import {
  CookieSessionStorage,
  defineConfig,
  PerformanceMetricsServerAnalyticsConnector
} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultLanguageCode: 'EN',
    defaultCountryCode: 'US',
    storeDomain:
      Oxygen.env.SHOPIFY_STORE_DOMAIN || 'drovani-sandboxstore.myshopify.com',
    storefrontToken:
      Oxygen.env.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN ||
      'f799cf8e11b00c88e674228410422ffd',
    storefrontApiVersion: '2022-07',
  }),
  routes: '/src/routes',
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    //sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [PerformanceMetricsServerAnalyticsConnector],
});
