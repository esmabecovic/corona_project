import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Container, InfoCardsUl, InfoCardContainer, InfoCardLi } from "../styleComponents/index.style";

const CoronaInfoFunc = () => {
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics?country=all",
    headers: {
      "X-RapidAPI-Key": "3b19298a97mshc8c02c752874df7p11a258jsnd1e9799fa782",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  const fetchCoronaData = async () => {
    try {
      const response = await axios.request(options);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    "statistics",
    fetchCoronaData
  );

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <InfoCardContainer>
    <InfoCardsUl>
    <InfoCardLi>
    <Container>
    {data.response[0].cases.active}
 </Container>
 </InfoCardLi>
  <InfoCardLi>
    <Container>
    {data.response[0].cases.active}
 </Container>
 </InfoCardLi>
 <InfoCardLi>
    <Container>
    {data.response[0].cases.active}
 </Container>
 </InfoCardLi>
  <InfoCardLi>
    <Container>
    {data.response[0].cases.active}
 </Container>
 </InfoCardLi> 
 </InfoCardsUl> 
 </InfoCardContainer>
   
   
  );
};
export default CoronaInfoFunc;