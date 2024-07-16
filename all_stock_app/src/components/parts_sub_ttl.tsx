import { noto_sans_md, noto_serif_md, playfair_md } from "@/lib/fonts";

interface SubTtlProps {
  ttl_l: string;
  ttl_m: string;
  ttl_r: string;
  sub_ttl: string;
}

export default function Parts_sub_ttl({
  ttl_l,
  ttl_m,
  ttl_r,
  sub_ttl,
}: SubTtlProps) {
  return (
    <div className="ttl_block mb-10 w-fit">
      <div className="span_flex flex items-end">
        <span
          className={`${noto_serif_md.className}text-black/70 text-xl tracking-[3px]`}
        >
          {ttl_l}
        </span>
        <span
          className={`${noto_serif_md.className}text-black/70 text-4xl tracking-[4.80px]`}
        >
          {ttl_m}
        </span>
        <span
          className={`${noto_serif_md.className}text-black/70 text-xl tracking-[3px]`}
        >
          {ttl_r}
        </span>
      </div>
      <div
        className={`${playfair_md.className}text-black/70 text-sm text-center`}
      >
        {sub_ttl}
      </div>
    </div>
  );
}
