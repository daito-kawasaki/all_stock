import Image from "next/image";
import Parts_ttl from "./parts_ttl";
import Store_info from "./store_info";

export default function Store_sec() {
  const imgPath = "/img/";
  return (
    <div className="store_sec pt-[14.64vw] relative pb-[3.66vw]">
      <div className="shop_img w-[24.37774524vw] h-auto absolute right-[5%] top-[-15%]">
        <Image src={`${imgPath}shop_img.png`} alt="" width={333} height={318} />
      </div>
      <Parts_ttl
        ttl="店舗情報"
        sub_ttl="Store Information"
        margin="mb-[7.32vw]"
      />
      <Store_info />
    </div>
  );
}
