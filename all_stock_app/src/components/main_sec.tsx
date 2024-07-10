import Image from "next/image";
import { noto_serif_md } from "@/lib/fonts";
import Blue_bg from "./parts_blue_gb";

export default function Main_sec() {
  const imgPath = "/img/";
  return (
    <div className=" w-full h-[84vh] flex items-end justify-between pt-16 pl-24 relative">
      <Image
        src={`${imgPath}cloud.png`}
        alt=""
        width={300}
        height={300}
        className=" w-[21.96193265vw] absolute top-0 left-[21%]"
      />
      <Image
        src={`${imgPath}tree.png`}
        alt=""
        width={250}
        height={250}
        className=" w-[18.3vw] absolute bottom-0 left-[-4%]"
      />
      <div className="left">
        <div className="w-[378px] h-[631.88px] pl-[90px] pb-[130px] justify-end items-end gap-[15px] inline-flex">
          <div className="justify-center items-start gap-1 flex">
            <div
              className={`${noto_serif_md}w-6 text-black/opacity-70 text-2xl leading-normal [writing-mode:vertical-rl]`}
            >
              ３つの思い出を車庫に。
            </div>
            <div
              className={`${noto_serif_md}w-6 text-black/opacity-70 text-2xl leading-normal [writing-mode:vertical-rl]`}
            >
              美容室、カフェ、バイクガレージ。
            </div>
          </div>
          <Image
            src={`${imgPath}coffe-man.png`}
            alt=""
            width={220}
            height={220}
          />
        </div>
      </div>
      <div className="right h-[100%]">
        <Image
          src={`${imgPath}main-visual.png`}
          alt=""
          width={840}
          height={631.88}
          className=" h-[100%]"
        />
      </div>
      <Blue_bg bg_position="botttom-0" bg_height="h-1/2" />
    </div>
  );
}
