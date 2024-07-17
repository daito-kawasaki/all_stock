import Image from "next/image";
import Parts_slider from "./parts_slider";
import Parts_sub_ttl from "./parts_sub_ttl";
import Parts_ttl from "./parts_ttl";
import Parts_mid_comment from "./parts_mid_comment";
import Parts_btm_comment from "./parts_btm_comment";
import Parts_view_more from "./parts_view_more";
import Blue_bg from "./parts_blue_gb";

export default function Bike_sec() {
  const imgPath = "/img/";
  return (
    <div className="bike_sec  pb-14 pt-[14.64vw] relative">
      <div className="mounten_img w-[16.25183vw] h-auto absolute top-0 left-[14%]">
        <Image
          src={`${imgPath}mounten.png`}
          alt=""
          width={222}
          height={222}
          className="w-full h-full object-cover"
        />
      </div>
      <Parts_ttl
        ttl="バイクガレージ紹介"
        sub_ttl="Garage Introduction"
        margin="mb-10"
      />
      <Parts_slider
        imgNameLeft="bike_l.png"
        imgNameMid="bike_m.png"
        imgNameRight="bike_r.png"
      />
      <div className="contents_cnt w-fit mx-auto flex items-center gap-10 mt-14">
        <div className="left w-[24.158125915vw] h-auto">
          <Image
            src={`${imgPath}film_camera.png`}
            alt=""
            width={330}
            height={330}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="right">
          <Parts_sub_ttl
            ttl_l="バイクをガレージアルバムで"
            ttl_m="生かす"
            ttl_r="。"
            sub_ttl="Keep your bike alive in a garage album."
          />
          <Parts_mid_comment
            text_top="当店をバイカーの聖地に。"
            text_btm="気軽に立ち寄り、コミュニティの場を提供します。"
          />
          <Parts_btm_comment
            texts={[
              "近年バイクブームが到来し、バイクに乗る方が増えた状況で",
              "バイカー同士がコミュニケーションを取れる場所休憩できる場所でありたい。",
              "そんな想いのガレージです。",
            ]}
          />
          <Parts_view_more
            back="bg-slate-900/70"
            color="text-white"
            border="none"
          />
          <Blue_bg
            bg_position="bottom-0"
            bg_height="h-[50%]"
            color="bg-gray-300/30"
          />
        </div>
      </div>
    </div>
  );
}
