import Header from "@/components/header";
import Main_sec from "@/components/main_sec";
import Concept_sec from "@/components/concept_sec";
import Interview_sec from "@/components/interview_sec";
import Salon_sec from "@/components/salon_sec";
import Cafe_sec from "@/components/cafe_sec";
import Bike_sec from "@/components/bike_sec";
import News_sec from "@/components/news_sec";
import Store_sec from "@/components/store_sec";
import Contact_sec from "@/components/contact_sec";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main_sec />
      <Concept_sec />
      <Interview_sec />
      <Salon_sec />
      <Cafe_sec />
      <Bike_sec />
      <News_sec />
      <Store_sec />
      <Contact_sec />
      <Footer />
    </>
  );
}
