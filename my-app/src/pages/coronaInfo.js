import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Container, InfoCardsUl, InfoCardContainer, InfoCardLi, LiSpan, LiSpanGreen, LiSpanBlue, LiSpanRed, MainHomePageDiv } from "../Components/styleComponents/index.style";

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
    <MainHomePageDiv>
    <img src='https://www.universewithme.com/wp-content/uploads/2015/06/EU_visa_countries.svg_.png' className='targets'/>
    <InfoCardContainer>
    <InfoCardsUl>
    <InfoCardLi>
    <Container> <span>Recovered:</span>
    <LiSpanGreen>{data.response[0].cases.recovered}</LiSpanGreen>
 </Container>
 </InfoCardLi>
  <InfoCardLi>
    <Container> <span>ActiveCases:</span>
    <LiSpanBlue>{data.response[0].cases.active}</LiSpanBlue>
 </Container>
 </InfoCardLi>
 <InfoCardLi>
    <Container> <span>Deaths:</span>
    <LiSpanRed>{data.response[0].deaths.total}</LiSpanRed>
 </Container>
 </InfoCardLi>
  <InfoCardLi>
    <Container>
   <LiSpan>Country Stats</LiSpan>
 </Container>
 </InfoCardLi> 
 </InfoCardsUl> 
 </InfoCardContainer>
   </MainHomePageDiv>
  );
};
export default CoronaInfoFunc;