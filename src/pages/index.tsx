import Head from "next/head";
import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import {
  BannerSection,
  CategorySection,
  ProductSection,
  FeatureProduct,
  SupportSection,
} from "@/component";
import Image from "next/image";
import { useAppSelector } from "@/store/store";

export default function Home() {
  const { theme_info } = useAppSelector(
    (state) => state.themeReducer.value.storeInfo
  );
  return (
    <>
      <Head>
        <title>WebManza | Bookshop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BannerSection />
        <CategorySection />
        <ProductSection />
        <Image
          src={theme_info?.image_osrc9o?.url}
          alt="Banner Image"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <FeatureProduct />
        <SupportSection />
      </main>
    </>
  );
}
