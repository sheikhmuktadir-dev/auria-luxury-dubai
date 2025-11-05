import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Style from "./search.module.css";
import { useContext, useState, useEffect } from "react";
import { FetchContext } from "../../Context/FetchContext";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Message/Loading";
import ErrorMessage from "../../Components/Message/ErrorMessage";
import NotFound from "../../Components/Message/NotFound";

export default function Search({ style }) {
  const { fetchData, loading, error } = useContext(FetchContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [dropDownOpen, setDropdownOpen] = useState(null);
  const [propertyLocation, setPropertyLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyOption, setPropertyOption] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setPropertyLocation("");
      setPropertyType("");
      setPropertyOption("");
      setPriceRange("");
      return;
    }

    const query = new URLSearchParams(location.search);
    setPropertyLocation(query.get("location") || "");
    setPropertyType(query.get("type") || "");
    setPropertyOption(query.get("option") || "");
    setPriceRange(query.get("priceRange") || "");
  }, [location]);

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage />;
  }

  if (!fetchData || Object.keys(fetchData).length === 0)
    return <NotFound>No data found</NotFound>;

  function formSubmit(e) {
    e.preventDefault();

    const query = new URLSearchParams({
      location: propertyLocation || "",
      type: propertyType || "",
      option: propertyOption || "",
      priceRange: priceRange || "",
    }).toString();

    navigate(`/properties?${query}`);
  }

  const searchStyle = Style[style] || "";

  return (
    <div className={Style.searchArea}>
      <form
        onSubmit={(e) => formSubmit(e)}
        className={`${Style.search} ${searchStyle}`}
      >
        <div className={Style.searchItem}>
          <CustomDropdown
            isOpen={dropDownOpen}
            setIsOpen={setDropdownOpen}
            deafultMessage="Choose Location"
            dropdownCheck="location"
            option={propertyLocation}
            setOption={setPropertyLocation}
            dropdownData={fetchData?.searchOptions?.locations || []}
          />
        </div>

        <div className={Style.searchItem}>
          <CustomDropdown
            isOpen={dropDownOpen}
            setIsOpen={setDropdownOpen}
            deafultMessage="Property Type"
            dropdownCheck="type"
            option={propertyType}
            setOption={setPropertyType}
            dropdownData={fetchData?.searchOptions?.propertyTypes || []}
          />
        </div>

        <div className={Style.searchItem}>
          <CustomDropdown
            isOpen={dropDownOpen}
            setIsOpen={setDropdownOpen}
            deafultMessage="Buy or Rent"
            dropdownCheck="option"
            option={propertyOption}
            setOption={setPropertyOption}
            dropdownData={fetchData?.searchOptions?.option || []}
          />
        </div>

        <div className={Style.searchItem}>
          <CustomDropdown
            isOpen={dropDownOpen}
            setIsOpen={setDropdownOpen}
            deafultMessage="Price Range"
            dropdownCheck="priceRange"
            option={priceRange}
            setOption={setPriceRange}
            dropdownData={fetchData?.searchOptions?.priceRange || []}
          />
        </div>

        <button
          type="submit"
          className={`${Style.searchBtn} ${
            location.pathname === "/properties" && Style.searchBtnDark
          }`}
        >
          {location.pathname === "/" ? (
            <span>Find Properties</span>
          ) : (
            <span>Filter Properties</span>
          )}
        </button>
      </form>
    </div>
  );
}
