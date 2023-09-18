import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useAppSelector } from "@/store/store";
import parse from "html-react-parser";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageInfo {
  url: string;
  alt: string;
}

const images: ImageInfo[] = [
  {
    url: "https://sg-api.admin.webmanza.com/4571dbd0-2cd7-11ed-9717-00155d212c06/uploads/20_1680588807441-bookshopjpg.jpeg",
    alt: "Bookshop Image",
  },
  // Add more images here if needed
];

export const BannerSection: React.FC = () => {
  const { theme_info } = useAppSelector(
    (state) => state.themeReducer.value.storeInfo
  );
  const slideCount = 1;

  const settings = {
    dots: theme_info?.slider_g5BCN7?.setting?.slider?.dots,
    infinite: true,
    speed: 500,
    slidesToShow: slideCount,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {theme_info?.slider_g5BCN7?.list?.map((image, index) => (
          <div key={index}>
            <div className="image-wrapper">
              <Image
                src={image.banner_url}
                alt="Banner Image"
                layout="responsive"
                width={1920} // Set the desired image width
                height={1080} // Set the desired image height
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
