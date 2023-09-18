import Image from "next/image";

type ThumbType = {
  alt: string;
  src: any;
  styles?: any;
};

export const Thumb = ({ src, alt, styles }: ThumbType) => {
  return (
    <div className="custom_thumb" style={{ height: styles?.height }}>
      <div className="inner">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};
