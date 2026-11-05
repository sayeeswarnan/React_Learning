import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [showresult, setShowresult] = useState(false);
  const [cache, setChace] = useState({});
  //api calling
  const fetchData = async () => {
    try {
      if (cache[input]) {
        setData(cache[input]);
        return;
      }
      // setLoading(true);
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input,
      );

      // Always check if the HTTP response status is OK (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Await the parsing of JSON data
      const result = await response.json();
      setData(result?.recipes);
      setChace((prev) => ({ ...prev, [input]: result?.recipes }));
    } catch (err) {
      // Catch any network or parsing errors
      setError(err.message);
    }
  };
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="main_ctn">
      <h1>Auto complete Search box</h1>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowresult(true)}
        onBlur={() => setShowresult(false)}
      />
      {showresult && (
        <div className="result_ctn">
          {data?.map((i) => (
            <span className="result" key={i.id}>
              {i.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
