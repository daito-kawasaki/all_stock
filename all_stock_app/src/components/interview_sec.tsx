import Parts_sub_ttl from "./parts_sub_ttl";
import Parts_ttl from "./parts_ttl";
import { noto_sans_md, noto_serif_md } from "@/lib/fonts";
import Parts_view_more from "./parts_view_more";
import Image from "next/image";
import Blue_bg from "./parts_blue_gb";

export default function Interview_sec() {
  const imgPath = "/img/";
  return (
    <div className="interview_sec pt-40 pb-16 relative">
      <Blue_bg bg_position="top-0" bg_height="h-[60%]" />
      <div className="moon_img w-[15.373352855vw] absolute top-[2%] left-[12%]">
        <Image src={`${imgPath}moon.png`} alt="" width={210} height={210} />
      </div>
      <div className="ttl_cnt">
        <Parts_ttl ttl="代表紹介" sub_ttl="Interview" margin="mb-10" />
      </div>
      <div className="content_cnt mx-[7.32vw] flex items-center justify-between">
        <div className="left mb-16 flex-1">
          <div className="ttl_block ml-10">
            <Parts_sub_ttl
              ttl_l="想い出が"
              ttl_m="残る"
              ttl_r="場所を作る"
              sub_ttl="Create a place where memories will linger."
            />
          </div>
          <div className="comment_block ml-10 mt-8 mb-10">
            <p
              className={` w-[36.16398243vw] text-black/70 text-base ${noto_serif_md} leading-normal tracking-widest`}
            >
              「一つの場所で様々な体験ができる」
              そんな場所を作りたいという想いのもと 今年、2024年に
              ALL.Stockをオープンさせていただきました。
              <br />
              <br />
              皆さんの想い出を我々が残すことで忘れられない
              体験をしていただけるという考えでこれからも 精進していきます。
              また、どれか一つのために当店をご利用いただくことも
              もちろん大歓迎でございます。
              <br />
              <br />
              当店が皆様の楽しい場所になるようにスタッフ一同
              対応させていただきますのでどうぞよろしくお願いします。
            </p>
            <span
              className={`text-right text-black/70 text-base ${noto_serif_md} leading-normal tracking-widest pt-4`}
            >
              オーナー　国元博士
            </span>
          </div>

          <Parts_view_more
            back="none"
            color="text-black/opacity-60"
            border="rounded-lg border border-black/40"
          />
        </div>
        <div className="right flex-1">
          <Image
            src={`${imgPath}owner_img.png`}
            alt=""
            width={587}
            height={783.69}
          />
        </div>
      </div>
    </div>
  );
}
