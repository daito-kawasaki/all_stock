import {
  noto_sans_md,
  noto_sans_rl,
  noto_serif_lt,
  noto_serif_rl,
} from "@/lib/fonts";

interface TextProps {
  text_top: string;
  text_mid: string;
  text_mid_2: string;
  text_btm: string;
}

export default function Parts_btm_comment({
  text_top,
  text_mid,
  text_mid_2,
  text_btm,
}: TextProps) {
  return (
    <div className="btm_comment_block mt-8 mb-10">
      <div
        className={`${noto_serif_rl.className} text-zinc-800/70 text-base leading-normal tracking-widest`}
      >
        {text_top}
        <br />
        {text_mid}
        <br />
        {text_mid_2}
        <br />
        {text_btm}
      </div>
    </div>
  );
}
