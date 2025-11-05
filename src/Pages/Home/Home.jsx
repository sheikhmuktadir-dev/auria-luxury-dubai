import { useContext } from "react";
import { FetchContext } from "../../Context/FetchContext";
import HomeHero from "./HomeHero";
import HomeLocation from "./HomeLocation";
import HomeFeatureProperties from "./HomeFeaturedProperties";
import HomeAbout from "./HomeAbout";
import HomeLatestProperties from "./HomeLatestProperties";
import HomeChooseUs from "./HomeChooseUs";
import HomeGetinTouch from "./HomeGetinTouch";
import Loading from "../../Components/Message/Loading";
import ErrorMessage from "../../Components/Message/ErrorMessage";
import NotFound from "../../Components/Message/NotFound";
import Testimonial from "../../Components/Testimonial/Testimonial";

export default function Home() {
  const { fetchData, loading, error } = useContext(FetchContext);

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage />;
  }

  if (!fetchData || Object.keys(fetchData).length === 0)
    return <NotFound> No data found</NotFound>;

  return (
    <>
      <HomeHero heroData={fetchData?.hero || {}} />
      <HomeLocation locationData={fetchData?.locations || {}} />
      <HomeFeatureProperties
        featuredPropertyData={fetchData?.properties || {}}
      />
      <HomeAbout about={fetchData?.about || {}} />
      <HomeLatestProperties latestPropertyData={fetchData?.properties || {}} />
      <HomeChooseUs whyus={fetchData?.whyus || {}} />
      <HomeGetinTouch getinTouch={fetchData?.getInTouch || {}} />
      <Testimonial />
    </>
  );
}
