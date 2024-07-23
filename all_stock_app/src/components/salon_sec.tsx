import Image from "next/image";
import Parts_ttl from "./parts_ttl";
import Parts_sub_ttl from "./parts_sub_ttl";
import Parts_mid_comment from "./parts_mid_comment";
import Parts_btm_comment from "./parts_btm_comment";
import Parts_view_more from "./parts_view_more";
import Parts_slider from "./parts_slider";

export default function Salon_sec() {
  const imgPath = "/img/";
  return (
    <div className="salon_sec pt-36 relative">
      <div className="salon_top_img absolute top-[-5%] right-[5%]">
        <Image
          src={`${imgPath}salon_top.png`}
          alt=""
          width={294.15}
          height={288.15}
        />
      </div>
      <Parts_ttl ttl="美容室紹介" sub_ttl="Salon Introduction" margin="mb-16" />
      <Parts_slider
        imgNameLeft="salon_l.png"
        imgNameMid="salon_m.png"
        imgNameRight="salon_r.png"
      />
      <div className="contents_cnt pt-14 flex items-center gap-28 w-fit mx-auto">
        <div className="left">
          <Image
            src={`${imgPath}salon_man.png`}
            alt=""
            width={222}
            height={222}
          />
        </div>
        <div className="right">
          <Parts_sub_ttl
            ttl_l="最高の上で最高の"
            ttl_m="ひととき"
            ttl_r="を。"
            sub_ttl="The best hair, the best time."
          />
          <Parts_mid_comment
            text_top="髪型や髪色というのは自分を理想の容姿にしてくれる。"
            text_btm="そんな、気分を上げられる美容室でありたい。"
          />
          <Parts_btm_comment
            text_top="髪型や髪色というのは、時間が経つとともに、色が落ちたり"
            text_mid="伸びたりしてしまって、理想とは離れてしまいます。"
            text_mid_2=""
            text_btm="だから、ぜひ最高の状態で自分の髪アルバムを当店に残してみませんか？？"
          />
          <Parts_view_more
            back="bg-slate-900/70"
            color="text-white"
            border="none"
          />
        </div>
      </div>
    </div>
  );
}
