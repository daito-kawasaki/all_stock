import Image from "next/image";

interface ImgProps {
  imgNameLeft: string;
  imgNameMid: string;
  imgNameRight: string;
}

export default function Parts_slider({
  imgNameLeft,
  imgNameMid,
  imgNameRight,
}: ImgProps) {
  const imgPath = "/img/";
  return (
    <div className="img_cnt flex gap-3">
      <div className="l_img_block flex-auto">
        <Image
          src={imgPath + imgNameLeft}
          alt=""
          width={270}
          height={330}
          className=" h-[100%] object-cover w-full"
        />
      </div>
      <div className="m_img_block flex-auto">
        <Image
          src={imgPath + imgNameMid}
          alt=""
          width={806}
          height={330}
          className="h-[100%] object-cover w-full"
        />
      </div>
      <div className="r_img_block flex-auto">
        <Image
          src={imgPath + imgNameRight}
          alt=""
          width={270}
          height={330}
          className=" h-[100%] object-cover w-full"
        />
      </div>
    </div>
  );
}
