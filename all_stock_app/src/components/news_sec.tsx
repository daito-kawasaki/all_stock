import Parts_news_list from "./parts_news_list";
import Parts_ttl from "./parts_ttl";
import Parts_view_more from "./parts_view_more";

export default function News_sec() {
  const newsData = {
    date: ["2024.5.11", "2024.6.18", "2024.7.12"],
    tags: ["bike", "cafe", "salon"],
    ttl: [
      "バイクガレージアルバムに新しい写真が追加されました！",
      "珈琲豆を入荷しました",
      "新卒スタッフ紹介!",
    ],
    contents: [
      "KawasakiのElimnaterがアルバムに追加されました!他の車種もどんどんお待ちしています!!",
      "コロンビア産の珈琲豆を入荷しました。味わいは苦みが強い反面後味はスッキリした印象です。",
      "新卒で入社した川﨑さんです！「精一杯頑張りますのでよろしくお願いします！！」",
    ],
  };
  return (
    <div className="news_sec pt-[2.196193265vw]">
      <Parts_ttl ttl="お知らせ" sub_ttl="news infomation" margin="mb-10" />
      <Parts_news_list data={newsData} />
      <Parts_view_more
        back="bg-stone-300"
        color="text-zinc-800/70"
        border="none"
      />
    </div>
  );
}
