import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { FetchContext } from "../../Context/FetchContext";
import Section from "../../Components/Section/Section";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import PropertiesSearch from "./PropertiesSearch";
import PropertiesList from "./PropertiesList";
import Loading from "../../Components/Message/Loading";
import ErrorMessage from "../../Components/Message/ErrorMessage";
import NotFound from "../../Components/Message/NotFound";

export default function Properties() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const locationMain = query.get("location");
  const typeMain = query.get("type");
  const optionMain = query.get("option");
  const priceRangeMain = query.get("priceRange");

  // context
  const {
    gridType,
    setGridType,
    visibleCount,
    setVisibleCount,
    fetchData,
    loading,
    error,
  } = useContext(FetchContext);

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage />;
  }

  if (!fetchData || Object.keys(fetchData).length === 0)
    return <NotFound> No data found</NotFound>;

  // filter logic
  const searchResult = fetchData.properties.propertyCard.filter((property) => {
    const location =
      !locationMain ||
      locationMain === "Any Location" ||
      property.location.neighborhood === locationMain;

    const type =
      !typeMain ||
      typeMain === "Any Property Type" ||
      property.type === typeMain;

    const option =
      !optionMain ||
      optionMain === "Any" ||
      property.transactionType === optionMain;

    const priceMap = {
      "Under AED 2M": [0, 2000000],
      "AED 2M - 5M": [2000000, 5000000],
      "AED 5M - 10M": [5000000, 10000000],
      "AED 10M - 20M": [10000000, 20000000],
      "AED 20M - 50M": [20000000, 50000000],
      "Over AED 50M": [50000000, Infinity],
    };

    let minPrice = 0;
    let maxPrice = Infinity;

    if (priceRangeMain && priceMap[priceRangeMain]) {
      [minPrice, maxPrice] = priceMap[priceRangeMain];
    }

    const propertyPrice = parseInt(
      property.price?.replace(/[^0-9]/g, "") || "0",
      10
    );

    const priceMatch =
      propertyPrice >= minPrice &&
      (maxPrice === Infinity || propertyPrice <= maxPrice);

    return location && type && option && priceMatch;
  });

  if (!searchResult.length) return <ErrorMessage propertMsg={true} />;

  // load more logic
  const visibleProperties = searchResult.slice(0, visibleCount);

  function onLoadMore() {
    setVisibleCount((prev) => prev + 6);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <>
      <Section padding="sectionPaddingLarge">
        <Breadcrumb mainPage="Home" mainPageLink="/" activePage="Properties" />
      </Section>

      <PropertiesSearch />

      <PropertiesList
        gridType={gridType}
        setGridType={setGridType}
        searchResult={searchResult}
        visibleProperties={visibleProperties}
        visibleCount={visibleCount}
        moreBtnclick={() => onLoadMore()}
      />
    </>
  );
}
