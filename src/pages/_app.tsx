import Layout from "@/components/Shared/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { DefaultSeo } from 'next-seo';

const geistSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});

// SEO Configuration
const SEO = {
  title: "Seifac - Premium Hair Extensions & Business Solutions",
  description: "Leading manufacturer of premium virgin hair extensions from India and South East Asia. Also offering Agriculture, Wine Supply, Medical Devices, and other business solutions.",
  canonical: "https://seifac.com",
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://seifac.com',
    siteName: 'Seifac',
    title: 'Premium Hair Extensions & Business Solutions',
    description: 'High-quality virgin hair extensions with cuticles aligned from root to end. Also offering Agriculture, Wine Supply, Medical Devices, and other business solutions.',
    images: [
      {
        url: 'https://seifac.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Seifac Logo',
      }
    ],
  },
  twitter: {
    handle: '@seifac',
    site: '@seifac',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Virgin Hair, Hair Extensions, Lace Front Wigs, Agriculture Solutions, Farm ERP, Medical Devices, Seifac'
    }
  ]
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout className={`${geistSans.className} font-[family-name:var(--font-geist-sans)]`}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
