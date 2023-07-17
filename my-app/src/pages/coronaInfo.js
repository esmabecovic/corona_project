import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Container, InfoCardsUl, InfoCardContainer, InfoCardLi, LiSpan, LiSpanGreen, LiSpanBlue, LiSpanRed, MainHomePageDiv, ContainerCountry, StatsTitle  } from "../Components/styleComponents/index.style";


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
    <StatsTitle>World Stats</StatsTitle>
    <InfoCardContainer>
    <InfoCardsUl>
    <InfoCardLi>
    <Container style={{borderTop:'none', borderLeft:'none', boxShadow: '-11px -9px 21px -6px rgba(0,0,0,0.1)',borderBottom:'0.5px solid grey', borderRight:'0.5px solid grey'}}> <span style={{fontWeight:'500', fontSize:'17.5px'}}>Recovered:</span>
    <LiSpanGreen>{data.response[0].cases.recovered}</LiSpanGreen>
 </Container>
 </InfoCardLi>
  <InfoCardLi>
    <Container style={{borderTop:'none', borderLeft:'none', boxShadow: '-11px -9px 21px -6px rgba(0,0,0,0.1)', borderBottom:'0.5px solid grey',borderRight:'0.5px solid grey'}}> <span style={{fontWeight:'500', fontSize:'17.5px'}}>Active Cases:</span>
    <LiSpanBlue>{data.response[0].cases.active}</LiSpanBlue>
 </Container>
 </InfoCardLi>
 <InfoCardLi>
    <Container style={{borderTop:'none', borderLeft:'none', boxShadow: '-11px -9px 21px -6px rgba(0,0,0,0.1)', borderBottom:'0.5px solid grey',borderRight:'0.5px solid grey'}}> <span style={{fontWeight:'500', fontSize:'17.5px'}}>Deaths:</span>
    <LiSpanRed>{data.response[0].deaths.total}</LiSpanRed>
 </Container>
 </InfoCardLi>
  <InfoCardLi>
    <a style={{textDecoration: 'none'}} href="http://localhost:3000/covid_stats">
    <ContainerCountry style={{borderTop:'none', borderLeft:'none', boxShadow: '-11px -9px 21px -6px rgba(0,0,0,0.1)', borderBottom:'0.5px solid grey',borderRight:'0.5px solid grey', cursor:'pointer'}}>
   <LiSpan >Country Stats</LiSpan>
 </ContainerCountry>
 </a>
 </InfoCardLi> 
 </InfoCardsUl> 
 </InfoCardContainer>
   </MainHomePageDiv>
  );
};
export default CoronaInfoFunc;