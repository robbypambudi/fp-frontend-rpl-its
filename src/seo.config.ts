// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.tiket-in.com/',
    siteName: 'Tiket in',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s | Tiket in - Pesan Tiket Bioskop mudah dan murah',
  description:
    'Merupakan aplikasi yang memudahkan anda untuk memesan tiket bioskop secara online, dengan harga yang terjangkau dan mudah',
  defaultTitle: 'Tiket in - Pesan Tiket Bioskop mudah dan murah',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/logo.png',
    },
  ],
};

export default config;
