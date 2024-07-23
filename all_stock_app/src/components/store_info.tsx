import { playfair_md } from "@/lib/fonts";
import Image from "next/image";

export default function Store_info() {
  const imgPath = "/img/";
  return (
    <div className="store_info flex justify-between mx-[14.445vw] items-center">
      <div className="left">
        <span className={`${playfair_md} block text-[#333333] pb-10 text-2xl`}>
          ALL.Stock　滋賀本店
        </span>
        <div className="flex gap-20">
          <div className="info_left flex flex-col gap-2">
            <span className="block">営業時間</span>
            <span className="block">定休日</span>
            <span className="block">アクセス</span>
            <span className="block">電話番号</span>
            <span className="block">駐車場</span>
          </div>
          <div className="info_right flex flex-col gap-2">
            <span className="block">10:00~17:00</span>
            <span className="block">不定休</span>
            <span className="block">滋賀県野洲市</span>
            <span className="block">00-0000-0000</span>
            <span className="block">12台</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="store_img w-[37.3352855vw] h-auto">
          <Image
            src={`${imgPath}store_img.png`}
            alt=""
            width={510}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
