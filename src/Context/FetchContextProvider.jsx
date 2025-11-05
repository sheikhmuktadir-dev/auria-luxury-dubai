import { useEffect, useState } from "react";
import { FetchContext } from "./FetchContext";
export default function FetchContextProvider({ children }) {
  const [fetchData, setFetchData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [visibleCount, setVisibleCount] = useState(6);

  const [gridType, setGridType] = useState("3Column");

  const fetchHandler = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/data/data.json");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setFetchData(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <FetchContext.Provider
      value={{
        gridType,
        setGridType,
        visibleCount,
        setVisibleCount,
        fetchData,
        loading,
        error,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
