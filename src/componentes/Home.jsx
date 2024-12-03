import Banner from "./Banner";
import Onsell from "./Onsell";
import OurTimeline from "./OurTimeline";
import SummerSell from "./SummerSell";
import TopBrand from "./TopBrand";

const Home = () => {
  return (
    <div className="  w-[100%] mx-auto max-w-[1400px] mt-10">
      <Banner />
      <SummerSell />
      <TopBrand />
      <Onsell />
      <OurTimeline />
    </div>
  );
};

export default Home;
