import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const resp = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york"
        }
      });
      setResults(resp.data.businesses);
    } catch (err) {
      setErrorMessage("Error Message");
    }
  };

  useEffect(() => {
    searchApi("burger");
  });

  return [searchApi, results, errorMessage];
};
