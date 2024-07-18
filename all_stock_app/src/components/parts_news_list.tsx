import { noto_serif_md, playfair_md } from "@/lib/fonts";
import Image from "next/image";

type NewsProps = {
  data: {
    date: string[];
    tags: string[];
    ttl: string[];
    contents: string[];
  };
};

export default function Parts_news_list({ data }: NewsProps) {
  const imgPath = "/img/";
  const { date, tags, ttl, contents } = data;
  return (
    <div className="news_list_cnt flex flex-wrap gap-y-10 justify-between  mx-[7.32vw] mb-[3.66vw]">
      {date.map((dates, key) => (
        <li
          key={key}
          className="news_list list-none flex items-start gap-10 flex-[0_0_50%]"
        >
          <div className="news_img left w-[12.591508vw]">
            <Image
              src={`${imgPath}news_img.png`}
              alt=""
              width={172.76}
              height={171.24}
              className="w-full h-auto"
            />
          </div>
          <div className="right max-w-[320px] pt-[1.1vw]">
            <div className="span_flex flex gap-3 pb-3">
              <span
                className={`${playfair_md} text-xs text-black/70 news_date block`}
              >
                {dates}
              </span>
              <span
                className={`${playfair_md} text-xs text-black/40 news_date block`}
              >
                #{tags[key]}
              </span>
            </div>
            <span
              className={`${noto_serif_md} text-lg pb-3 text-black/80 news_date block`}
            >
              {ttl[key]}
            </span>
            <span
              className={`${noto_serif_md} break-keep pb-3 text-sm text-black/60 news_date block`}
            >
              {contents[key]}
            </span>
          </div>
        </li>
      ))}
    </div>
  );
}

{
}
