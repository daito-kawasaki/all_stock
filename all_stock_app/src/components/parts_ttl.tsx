import { noto_sans_bl, noto_sans_md, playfair_md } from "@/lib/fonts";

interface TtlProps {
  sub_ttl: string;
  ttl: string;
}

export default function Parts_ttl({ sub_ttl, ttl }: TtlProps) {
  return (
    <div className="ttl_block w-fit mb-24 pl-12 pr-24 pb-2 border-b border-black">
      <span
        className={`${playfair_md.className} text-zinc-800/70 text-sm block pb-[5%]`}
      >
        {sub_ttl}
      </span>
      <span
        className={`${noto_sans_md.className} text-zinc-800 text-2xl block leading-[1]`}
      >
        {ttl}
      </span>
    </div>
  );
}
