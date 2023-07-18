import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CovidStatsCard.css";

const CovidStatsCard = ({
  continent,
  countryName,
  population,
  newCases,
  deaths,
  countryImg,
}) => {
  return (
    <Box 
      sx={{
        margin: 2,
        minWidth: 275,
        width: 1000,
        border: "1px solid rgb(239, 110, 110);",
        borderRadius: "5px",
        cursor: "default",
      }}
    >
      <Card
        className="covid-kartica"
        sx={{
          boxShadow: "10px 5px 18px rgba(82, 32, 20, 0.6)",

          backgroundImage: `url(
            https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/png250px/${countryImg}.png
              )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "35% 100%",
          backgroundPosition: "right",
        }}
        style={{}}
      >
        <CardContent className="cardContent">
          <Typography variant="h6" component="div" className="relative left-6">
            Continent: <span className="relative left-3">{continent}</span>
          </Typography>
          <Typography variant="h5" component="div" className="relative left-6">
            Country: <span className="relative left-3">{countryName}</span>
          </Typography>
          <div className="allInfo">
            <div className="popSpanDiv">
              Population:{" "}
              <span className="populationSpan">
                {population}
              </span>
            </div>
            <div className="deathsSpanDiv">
              New Cases:{" "}
              <span className="newCasesSpan">
                {newCases}
              </span>
            </div>
            <div className="deathsSpanDiv">
              Deaths:{" "}
              <span className='deathsSpan'>
                {deaths}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CovidStatsCard;