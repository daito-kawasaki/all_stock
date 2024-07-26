import { noto_sans_rl, playfair_md } from "@/lib/fonts";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

export default function Footer() {
  const imgPath = "/img/";
  return (
    <footer>
      <div className="footer_img w-[100%] h-auto">
        <Image
          src={`${imgPath}footer_img.png`}
          alt=""
          width={1366}
          height={410}
          className="w-full h-auto"
        />
        <div className="btm_list flex justify-between items-center bg-[#cac1b9]/30 px-[10.98vw] py-[2.196193265vw]">
          <div className="logo_block w-[24.89vw] h-auto">
            <Image
              src={`${imgPath}logo_block.png`}
              alt=""
              width={340}
              height={120}
              className="w-full h-auto"
            />
          </div>
          <div className="list_block">
            <ul className="flex items-center justify-center gap-[5.12445vw]">
              <div className={`text-[#333] left flex flex-col gap-2`}>
                <li className={`${noto_sans_rl.className}`}>TOP</li>
                <li className={` ${noto_sans_rl.className}`}>私達の想い</li>
                <li className={` ${noto_sans_rl.className}`}>美容室紹介</li>
                <li className={` ${noto_sans_rl.className}`}>カフェ紹介</li>
              </div>
              <div className="right text-[#333] flex flex-col gap-2">
                <li className={` ${noto_sans_rl.className}`}>
                  バイクガレージ紹介
                </li>
                <li className={` ${noto_sans_rl.className}`}>お知らせ</li>
                <li className={` ${noto_sans_rl.className}`}>お問い合わせ</li>
                <li className={` ${noto_sans_rl.className}`}>店舗情報</li>
              </div>
            </ul>

            <span
              className={` ${playfair_md.className} block pt-[1.464vw] text-[#333333]/50 text-sm`}
            >
              ©All.Stock. ALL Right Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
