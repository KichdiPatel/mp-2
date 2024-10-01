import React from "react";
import styled from "styled-components";
import { Token } from "../interfaces/Token";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border: 2px solid black;
`;

const TableHeader = styled.th`
  background-color: #9dbc98;
  color: white;
  text-align: left;
  padding: 20px 10px;
  font-size: 2rem;
`;

const TableRow = styled.tr`
  font-size: 1.2rem;
  &:nth-child(even) {
    background-color: #ebd9b4;
  }

  &:nth-child(odd) {
    background-color: #f9efdb;
  }
`;

const TableData = styled.td`
  padding: 10px;
  text-align: left;
`;

export default function CryptoData(props: { data: Token[] }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Symbol</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Current Price (USD)</TableHeader>
          <TableHeader>Market Cap</TableHeader>
          <TableHeader>Total Volume</TableHeader>
          <TableHeader>24h % Change</TableHeader>
        </tr>
      </thead>
      <tbody>
        {props.data.map((token: Token) => (
          <TableRow key={token.id}>
            <TableData>{token.symbol.toUpperCase()}</TableData>
            <TableData>{token.name}</TableData>
            <TableData>${token.current_price}</TableData>
            <TableData>${token.market_cap.toLocaleString()}</TableData>
            <TableData>${token.total_volume.toLocaleString()}</TableData>
            <TableData>
              {token.price_change_percentage_24h.toFixed(3)}%
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
