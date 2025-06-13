import Layout from "@/components/Shared/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const geistSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" ></link>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head> */}

      <Layout className={`${geistSans.className} font-[family-name:var(--font-geist-sans)]`}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
