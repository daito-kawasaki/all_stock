import Image from "next/image";
import Parts_ttl from "./parts_ttl";
import Parts_sub_ttl from "./parts_sub_ttl";
import Parts_mid_comment from "./parts_mid_comment";
import Parts_btm_comment from "./parts_btm_comment";
import Blue_bg from "./parts_blue_gb";
import Parts_view_more from "./parts_view_more";

export default function Concept_sec() {
  const imgPath = "/img/";
  return (
    <section className="concept_sec pt-52 relative">
      <div className="concept_img w-[21.1vw] h-auto absolute top-0 right-[3%]">
        <Image
          src={`${imgPath}concept_top.png`}
          alt=""
          width={343}
          height={373}
        />
      </div>
      <Blue_bg bg_position="top-0" bg_height="h-full" />
      <Parts_ttl sub_ttl="concept" ttl="私たちの想い" margin="mb-16" />
      <div className="contents_cnt flex justify-between items-center px-[7.32vw]">
        <div className="left w-[43.9238653vw]">
          <Image
            src={`${imgPath}concept_img.png`}
            alt=""
            width={600}
            height={406.26}
            className=" w-full"
          />
        </div>
        <div className="right">
          <Parts_sub_ttl
            ttl_l="All Stockに"
            ttl_m="想い出"
            ttl_r="を残す。"
            sub_ttl="Stock up on memories."
          />
          <Parts_mid_comment
            text_top="記憶は時間とともに失っていく。"
            text_btm="だから、体験や想い出を「ストック」する"
          />
          <Parts_btm_comment
            texts={[
              "美容室、カフェ、バイクガレージ",
              "３種類の体験で紡がれた皆様の思い出を",
              "当店が保管することで、再度ご来店いただいたときに",
              "懐かしんでもえるような、時間や空間を提供します。",
            ]}
          />
          <Parts_view_more
            back="bg-slate-900/70"
            color="text-white"
            border="none"
          />
        </div>
      </div>
    </section>
  );
}
