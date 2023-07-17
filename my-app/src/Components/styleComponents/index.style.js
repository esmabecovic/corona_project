import styled from 'styled-components';

export const InfoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40vh;
`;
export const InfoCardLi = styled.li`
width: 100%;
`
export const LiSpan = styled.span`
font-weight: 600;
color: #2A282A;
font-size: 25px;
&:hover{
  color: #6E7DAB
}
`
export const StatsTitle = styled.h2`
font-weight: 500;
color: #DD5560;
font-size: 35px;
`
export const LiSpanGreen = styled.span`
font-weight: bold;
color: #09BC8A;
font-size: 25px;
padding: 10px
`
export const LiSpanBlue = styled.span`
font-weight: bold;
color: #4B57D2;
font-size: 25px;
padding: 10px
`
export const LiSpanRed = styled.span`
font-weight: bold;
color: #D73340;
font-size: 25px;
padding: 10px
`
export const MainHomePageDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`

export const CovidStatsMain = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
export const CountryStatsMain = styled.div`
  /*  */
`;
 
export const CountryStatsCard = styled.div`
  /*  */
`;
 
export const CountryInfoPart = styled.div`
  /*  */
`;
 
export const CountryFlagCard = styled.div`
  /*  */
`;
export const CovidFlagCard = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
height: 120%;
width: 40%;
margin-right: -40px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
background-color: lightred;
`




export const CovidStatsCard = styled.div`
width: 70%;
height: 23vh;
margin-top: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 15px 40px;
border: solid black 0.8px;
border-radius: 5px;
`
export const CovidInfoPart = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
height: 100%;
width: 60%;


`
export const ContainerCountry = styled.div`
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20vh;
    transition: transform 1s ease;
    &:hover{
      transform: scale(1.1);
    }
`;

export const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20vh;
    transition: transform 1s ease;
    cursor: context-menu;
    &:hover{
      transform: scale(1.1);
    }
`;
export const InfoCardsUl = styled.ul`
gap: 2.5rem;
width: 80%;
padding: 0px 20px;
display: flex;
list-style-type: none;
`
export const Main = styled.div`
   width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Info = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const sillyButton = styled.button`
background-color: aquamarine;
    width: 300px;
    height: 400px;
`;

