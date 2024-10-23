import Image from "next/image";
// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { zen_kaku_md } from "@/lib/fonts";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  const imgPath = "/img/";

  return (
    <>
      <header className=" flex items-center justify-between px-4 w-full h-32 bg-stone-300/80">
        <div className="left">
          <Image
            src={`${imgPath}all_stock_logo.svg`}
            alt=""
            width={79.5}
            height={100}
            className=" w-20"
          />
        </div>
        <div className="right flex items-center gap-10">
          <AnchorLink
            href="#contact"
            className={
              `${zen_kaku_md.className}` +
              " flex items-center gap-4 py-2 px-5 border border-zinc-800/70 rounded-3xl text-base text-black/70"
            }
          >
            <FontAwesomeIcon icon={faPaperPlane} className=" w-4 h-4" />
            お問い合わせ
          </AnchorLink>
          <div className="w-[50px] h-[50px] rounded-[100px] border border-zinc-800 flex-col justify-center items-center gap-[7px] inline-flex">
            <div className="w-[30px] h-[0px] relative">
              <span className="w-[30px] h-[0px] left-0 top-0 absolute border border-zinc-800/70"></span>
            </div>
            <div className="w-[30px] h-[0px] relative">
              <span className="w-[30px] h-[0px] left-0 top-0 absolute border border-zinc-800/70"></span>
            </div>
            <div className="w-[30px] h-[0px] relative">
              <span className="w-[30px] h-[0px] left-0 top-0 absolute border border-zinc-800/70"></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
