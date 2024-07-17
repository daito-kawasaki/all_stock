import Parts_btm_comment from "./parts_btm_comment";
import Parts_mid_comment from "./parts_mid_comment";
import Parts_slider from "./parts_slider";
import Parts_sub_ttl from "./parts_sub_ttl";
import Parts_ttl from "./parts_ttl";
import Image from "next/image";
import Parts_view_more from "./parts_view_more";

export default function Cafe_sec() {
  const imgPath = "/img/";
  return (
    <div className="cafe_sec relative">
      <div className="cafe_top w-[19vw] h-auto absolute top-[1%] right-[1%]">
        <Image
          src={`${imgPath}sakura.png`}
          alt=""
          width={260}
          height={260}
          className="w-full h-auto"
        />
      </div>
      <div className="ttl_cnt  pt-[14.64vw]">
        <Parts_ttl ttl="カフェ紹介" sub_ttl="Cafe Introduction" margin="" />
      </div>
      <Parts_slider
        imgNameLeft="cafe_l.png"
        imgNameMid="cafe_m.png"
        imgNameRight="cafe_r.png"
      />
      <div className="contents_cnt flex items-center gap-10 mx-auto w-fit mt-14">
        <div className="lefft">
          <Parts_sub_ttl
            ttl_l="雰囲気で"
            ttl_m="リラックス"
            ttl_r="できる空間を。"
            sub_ttl="Atmosphere and relaxing space."
          />
          <Parts_mid_comment
            text_top="カフェは雰囲気が良すぎて逆に入りづらい。"
            text_btm="そんな固定概念を楽しさと想い出で塗り替えます。"
          />
          <Parts_btm_comment
            texts={[
              "私達のカフェでは落ち着いた雰囲気の場所と",
              "バイクガレージを自由に行き来することができます。",
              "それぞれお好きな方で皆さんにあった体験をしていただけます。",
            ]}
          />
          <Parts_view_more
            back="bg-slate-900/70"
            color="text-white"
            border="none"
          />
        </div>
        <div className="right">
          <div className="cafe_img w-[16.25183vw] h-auto">
            <Image
              src={`${imgPath}cafe.png`}
              alt=""
              width={222}
              height={222}
              className="w-hull h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
