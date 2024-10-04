import CryptoData from "./components/CryptoData";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Token } from "./interfaces/Token";

// using styled components to create tags that can help design the page
const ParentDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
  font-family: "Bebas Neue", sans-serif;
`;

const StyledHeader = styled.h1`
  font-size: 6rem;
  color: #638889;
`;

export default function App() {
  // useState Hook to store Data.
  const [data, setData] = useState<Token[]>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {
      // using the coingecko API to fetch the tokens tracked on their platform and related financial information
      const rawData = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const tokens: Token[] = await rawData.json();
      setData(tokens);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <StyledHeader>Ayan's Crypto Token Tracker</StyledHeader>
      <CryptoData data={data} />
    </ParentDiv>
  );
}
