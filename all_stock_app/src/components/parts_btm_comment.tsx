import {
  noto_sans_md,
  noto_sans_rl,
  noto_serif_lt,
  noto_serif_rl,
} from "@/lib/fonts";

export default function Parts_btm_comment({ texts }: { texts: string[] }) {
  return (
    <div className="btm_comment_block mt-8 mb-10">
      {texts.map((text, key) => (
        <div
          className={`${noto_serif_rl.className} text-zinc-800/70 text-base leading-normal tracking-widest`}
        >
          <span>{text}</span>
          <br />
        </div>
      ))}
    </div>
  );
}
