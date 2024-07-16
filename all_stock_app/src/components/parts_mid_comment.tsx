import { noto_sans_md, noto_serif_md } from "@/lib/fonts";

interface TextProps {
  text_top: string;
  text_btm: string;
}

export default function Parts_mid_comment({ text_top, text_btm }: TextProps) {
  return (
    <div className="mid_comment_block">
      <span
        className={`${noto_serif_md.className} text-zinc-800/90 text-lg leading-normal tracking-[2.70px]`}
      >
        {text_top}
        <br />
        {text_btm}
      </span>
    </div>
  );
}
