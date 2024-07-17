import Image from "next/image";

interface ImageProps {
  imgPath: string;
  imgWidth: number;
  imgHeight: number;
}

export default function first({ imgPath, imgWidth, imgHeight }: ImageProps) {
  return <Image src={imgPath} alt="" width={imgWidth} height={imgHeight} />;
}
