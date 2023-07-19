import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect({ countryNameFunc }) {
  return (
    <Autocomplete
      onChange={(event, value) => {
        countryNameFunc(value.searchName, value.code.toLowerCase());
      }}
      defaultValue={countries.find((el) => el.label === "Serbia")}
      id="country-select-demo"
      sx={{
        width: 300,
      }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            "& > img": { mr: 2, flexShrink: 0 },
          }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          sx={{
            backgroundColor: "white",
          }}
        />
      )}
    />
  );
}


    
export const countries = [
    { code: "AD", searchName: "Andorra", label: "Andorra", phone: "376" },
    {
      code: "AE",
      searchName: "UAE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", searchName: "Afghanistan", label: "Afghanistan", phone: "93" },
    {
      code: "AG",
      searchName: "Antigua-and-Barbuda",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
    { code: "AI", searchName: "Anguilla", label: "Anguilla", phone: "1-264" },
    { code: "AL", searchName: "Albania", label: "Albania", phone: "355" },
    { code: "AM", searchName: "Armenia", label: "Armenia", phone: "374" },
    { code: "AO", searchName: "Angola", label: "Angola", phone: "244" },
    // { code: "AQ", searchName: "Antarctica", label: "Antarctica", phone: "672" },
    { code: "AR", searchName: "Argentina", label: "Argentina", phone: "54" },
    // { code: "AS", label: "American Samoa", phone: "1-684" },
    { code: "AT", searchName: "Austria", label: "Austria", phone: "43" },
    {
      code: "AU",
      searchName: "Australia",
      label: "Australia",
      phone: "61",
      suggested: true,
    },
    { code: "AW", searchName: "Aruba", label: "Aruba", phone: "297" },
    // { code: "AX", searchName: "Alland Islands", label: "Alland Islands", phone: "358" },
    { code: "AZ", searchName: "Azerbaijan", label: "Azerbaijan", phone: "994" },
    {
      code: "BA",
      searchName: "Bosnia-and-Herzegovina",
      label: "Bosnia and Herzegovina",
      phone: "387",
    },
    {
      code: "BB",
      searchName: "Barbados",
      label: "Barbados",
      phone: "1-246",
    },
    { code: "BD", searchName: "Bangladesh", label: "Bangladesh", phone: "880" },
    { code: "BE", searchName: "Belgium", label: "Belgium", phone: "32" },
    {
      code: "BF",
      searchName: "Burkina-Faso",
      label: "Burkina Faso",
      phone: "226",
    },
    { code: "BG", searchName: "Bulgaria", label: "Bulgaria", phone: "359" },
    { code: "BH", searchName: "Bahrain", label: "Bahrain", phone: "973" },
    { code: "BI", searchName: "Burundi", label: "Burundi", phone: "257" },
    { code: "BJ", searchName: "Benin", label: "Benin", phone: "229" },
    {
      code: "BL",
      searchName: "St-Barth",
      label: "Saint Barthelemy",
      phone: "590",
    },
    { code: "BM", searchName: "Bermuda", label: "Bermuda", phone: "1-441" },
    {
      code: "BN",
      searchName: "Brunei",
      label: "Brunei Darussalam",
      phone: "673",
    },
    { code: "BO", searchName: "Bolivia", label: "Bolivia", phone: "591" },
    { code: "BR", searchName: "Brazil", label: "Brazil", phone: "55" },
    { code: "BS", searchName: "Bahamas", label: "Bahamas", phone: "1-242" },
    { code: "BT", searchName: "Bhutan", label: "Bhutan", phone: "975" },
    // { code: "BV", searchName: "Brazil", label: "Bouvet Island", phone: "47" },
    { code: "BW", searchName: "Botswana", label: "Botswana", phone: "267" },
    { code: "BY", searchName: "Belarus", label: "Belarus", phone: "375" },
    { code: "BZ", searchName: "Belize", label: "Belize", phone: "501" },
    {
      code: "CA",
      searchName: "Canada",
      label: "Canada",
      phone: "1",
      suggested: true,
    },
    // {
    //   code: "CC",
    //   searchName: "Canada",
    //   label: "Cocos (Keeling) Islands",
    //   phone: "61",
    // },
    {
      code: "CD",
      searchName: "Congo",
      label: "Congo, Democratic Republic of the",
      phone: "243",
    },
    {
      code: "CF",
      searchName: "CAR",
      label: "Central African Republic",
      phone: "236",
    },
    {
      code: "CG",
      searchName: "Congo",
      label: "Congo, Republic of the",
      phone: "242",
    },
    { code: "CH", searchName: "Switzerland", label: "Switzerland", phone: "41" },
    {
      code: "CI",
      searchName: "Ivory-Coast",
      label: "Cote d'Ivoire",
      phone: "225",
    },
    {
      code: "CK",
      searchName: "Cook-Islands",
      label: "Cook Islands",
      phone: "682",
    },
    { code: "CL", searchName: "Chile", label: "Chile", phone: "56" },
    { code: "CM", searchName: "Cameroon", label: "Cameroon", phone: "237" },
    { code: "CN", searchName: "China", label: "China", phone: "86" },
    { code: "CO", searchName: "Colombia", label: "Colombia", phone: "57" },
    { code: "CR", searchName: "Costa-Rica", label: "Costa Rica", phone: "506" },
    { code: "CU", searchName: "Cuba", label: "Cuba", phone: "53" },
    { code: "CV", searchName: "Cabo-Verde", label: "Cape Verde", phone: "238" },
    { code: "CW", searchName: "Cura&ccedil;ao", label: "Curacao", phone: "599" },
    // {
    //   code: "CX",
    //   searchName: "Cook-Islands",
    //   label: "Christmas Island",
    //   phone: "61",
    // },
    { code: "CY", searchName: "Cyprus", label: "Cyprus", phone: "357" },
    {
      code: "CZ",
      searchName: "Czechia",
      label: "Czech Republic",
      phone: "420",
    },
    {
      code: "DE",
      searchName: "Germany",
      label: "Germany",
      phone: "49",
      suggested: true,
    },
    { code: "DJ", searchName: "Djibouti", label: "Djibouti", phone: "253" },
    { code: "DK", searchName: "Denmark", label: "Denmark", phone: "45" },
    { code: "DM", searchName: "Dominica", label: "Dominica", phone: "1-767" },
    {
      code: "DO",
      searchName: "Dominican-Republic",
      label: "Dominican Republic",
      phone: "1-809",
    },
    { code: "DZ", searchName: "Algeria", label: "Algeria", phone: "213" },
    { code: "EC", searchName: "Ecuador", label: "Ecuador", phone: "593" },
    { code: "EE", searchName: "Estonia", label: "Estonia", phone: "372" },
    { code: "EG", searchName: "Egypt", label: "Egypt", phone: "20" },
    {
      code: "EH",
      searchName: "Western-Sahara",
      label: "Western Sahara",
      phone: "212",
    },
    { code: "ER", searchName: "Eritrea", label: "Eritrea", phone: "291" },
    { code: "ES", searchName: "Spain", label: "Spain", phone: "34" },
    { code: "ET", searchName: "Ethiopia", label: "Ethiopia", phone: "251" },
    { code: "FI", searchName: "Finland", label: "Finland", phone: "358" },
    { code: "FJ", searchName: "Fiji", label: "Fiji", phone: "679" },
    {
      code: "FK",
      searchName: "Falkland-Islands",
      label: "Falkland Islands (Malvinas)",
      phone: "500",
    },
    {
      code: "FM",
      searchName: "Micronesia",
      label: "Micronesia, Federated States of",
      phone: "691",
    },
    {
      code: "FO",
      searchName: "Faeroe-Islands",
      label: "Faroe Islands",
      phone: "298",
    },
    {
      code: "FR",
      searchName: "France",
      label: "France",
      phone: "33",
      suggested: true,
    },
    { code: "GA", searchName: "Gabon", label: "Gabon", phone: "241" },
    { code: "GB", searchName: "UK", label: "United Kingdom", phone: "44" },
    { code: "GD", searchName: "Grenada", label: "Grenada", phone: "1-473" },
    { code: "GE", searchName: "Georgia", label: "Georgia", phone: "995" },
    {
      code: "GF",
      searchName: "French-Guiana",
      label: "French Guiana",
      phone: "594",
    },
    // { code: "GG", searchName: "France", label: "Guernsey", phone: "44" },
    { code: "GH", searchName: "Ghana", label: "Ghana", phone: "233" },
    { code: "GI", searchName: "Gibraltar", label: "Gibraltar", phone: "350" },
    { code: "GL", searchName: "Greenland", label: "Greenland", phone: "299" },
    { code: "GM", searchName: "Gambia", label: "Gambia", phone: "220" },
    { code: "GN", searchName: "Guinea", label: "Guinea", phone: "224" },
    { code: "GP", searchName: "Guadeloupe", label: "Guadeloupe", phone: "590" },
    {
      code: "GQ",
      searchName: "Equatorial-Guinea",
      label: "Equatorial Guinea",
      phone: "240",
    },
    { code: "GR", searchName: "Greece", label: "Greece", phone: "30" },
    // {
    //   code: "GS",
    //   searchName: "Greece",
    //   label: "South Georgia and the South Sandwich Islands",
    //   phone: "500",
    // },
    { code: "GT", searchName: "Guatemala", label: "Guatemala", phone: "502" },
    { code: "GU", searchName: "Guam", label: "Guam", phone: "1-671" },
    {
      code: "GW",
      searchName: "Guinea-Bissau",
      label: "Guinea-Bissau",
      phone: "245",
    },
    { code: "GY", searchName: "Guyana", label: "Guyana", phone: "592" },
    { code: "HK", searchName: "Hong-Kong", label: "Hong Kong", phone: "852" },
    // {
    //   code: "HM",
    //   searchName: "Hong-Kong",
    //   label: "Heard Island and McDonald Islands",
    //   phone: "672",
    // },
    { code: "HN", searchName: "Honduras", label: "Honduras", phone: "504" },
    { code: "HR", searchName: "Croatia", label: "Croatia", phone: "385" },
    { code: "HT", searchName: "Haiti", label: "Haiti", phone: "509" },
    { code: "HU", searchName: "Hungary", label: "Hungary", phone: "36" },
    { code: "ID", searchName: "Indonesia", label: "Indonesia", phone: "62" },
    { code: "IE", searchName: "Ireland", label: "Ireland", phone: "353" },
    { code: "IL", searchName: "Israel", label: "Israel", phone: "972" },
    { code: "IM", searchName: "Isle-of-Man", label: "Isle of Man", phone: "44" },
    { code: "IN", searchName: "India", label: "India", phone: "91" },
    // {
    //   code: "IO",
    //   label: "British Indian Ocean Territory",
    //   phone: "246",
    // },
    { code: "IQ", searchName: "Iraq", label: "Iraq", phone: "964" },
    {
      code: "IR",
      searchName: "Iran",
      label: "Iran, Islamic Republic of",
      phone: "98",
    },
    { code: "IS", searchName: "Iceland", label: "Iceland", phone: "354" },
    { code: "IT", searchName: "Italy", label: "Italy", phone: "39" },
    // { code: "JE", searchName: "India", label: "Jersey", phone: "44" },
    { code: "JM", searchName: "Jamaica", label: "Jamaica", phone: "1-876" },
    { code: "JO", searchName: "Jordan", label: "Jordan", phone: "962" },
    {
      code: "JP",
      searchName: "Japan",
      label: "Japan",
      phone: "81",
      suggested: true,
    },
    { code: "KE", searchName: "Kenya", label: "Kenya", phone: "254" },
    { code: "KG", searchName: "Kyrgyzstan", label: "Kyrgyzstan", phone: "996" },
    { code: "KH", searchName: "Cambodia", label: "Cambodia", phone: "855" },
    { code: "KI", searchName: "Kiribati", label: "Kiribati", phone: "686" },
    { code: "KM", searchName: "Comoros", label: "Comoros", phone: "269" },
    {
      code: "KN",
      searchName: "Saint-Kitts-and-Nevis",
      label: "Saint Kitts and Nevis",
      phone: "1-869",
    },
    {
      code: "KP",
      searchName: "DPRK",
      label: "Korea, Democratic People's Republic of",
      phone: "850",
    },
    {
      code: "KR",
      searchName: "S-Korea",
      label: "Korea, Republic of",
      phone: "82",
    },
    { code: "KW", searchName: "Kuwait", label: "Kuwait", phone: "965" },
    {
      code: "KY",
      searchName: "Cayman-Islands",
      label: "Cayman Islands",
      phone: "1-345",
    },
    { code: "KZ", searchName: "Kazakhstan", label: "Kazakhstan", phone: "7" },
    {
      code: "LA",
      searchName: "Laos",
      label: "Lao People's Democratic Republic",
      phone: "856",
    },
    { code: "LB", searchName: "Lebanon", label: "Lebanon", phone: "961" },
    {
      code: "LC",
      searchName: "Saint-Lucia",
      label: "Saint Lucia",
      phone: "1-758",
    },
    {
      code: "LI",
      searchName: "Liechtenstein",
      label: "Liechtenstein",
      phone: "423",
    },
    { code: "LK", searchName: "Sri-Lanka", label: "Sri Lanka", phone: "94" },
    { code: "LR", searchName: "Liberia", label: "Liberia", phone: "231" },
    { code: "LS", searchName: "Lesotho", label: "Lesotho", phone: "266" },
    { code: "LT", searchName: "Lithuania", label: "Lithuania", phone: "370" },
    { code: "LU", searchName: "Luxembourg", label: "Luxembourg", phone: "352" },
    { code: "LV", searchName: "Latvia", label: "Latvia", phone: "371" },
    { code: "LY", searchName: "Libya", label: "Libya", phone: "218" },
    { code: "MA", searchName: "Morocco", label: "Morocco", phone: "212" },
    { code: "MC", searchName: "Monaco", label: "Monaco", phone: "377" },
    {
      code: "MD",
      searchName: "Moldova",
      label: "Moldova, Republic of",
      phone: "373",
    },
    { code: "ME", searchName: "Montenegro", label: "Montenegro", phone: "382" },
    {
      code: "MF",
      searchName: "Saint-Martin",
      label: "Saint Martin (French part)",
      phone: "590",
    },
    { code: "MG", searchName: "Madagascar", label: "Madagascar", phone: "261" },
    {
      code: "MH",
      searchName: "Marshall-Islands",
      label: "Marshall Islands",
      phone: "692",
    },
    {
      code: "MK",
      searchName: "North-Macedonia",
      label: "North Macedonia",
      phone: "389",
    },
    { code: "ML", searchName: "Mali", label: "Mali", phone: "223" },
    { code: "MM", searchName: "Myanmar", label: "Myanmar", phone: "95" },
    { code: "MN", searchName: "Mongolia", label: "Mongolia", phone: "976" },
    { code: "MO", searchName: "Macao", label: "Macao", phone: "853" },
    // {
    //   code: "MP",
    //   searchName: "Macao",
    //   label: "Northern Mariana Islands",
    //   phone: "1-670",
    // },
    { code: "MQ", searchName: "Martinique", label: "Martinique", phone: "596" },
    { code: "MR", searchName: "Mauritania", label: "Mauritania", phone: "222" },
    { code: "MS", searchName: "Montserrat", label: "Montserrat", phone: "1-664" },
    { code: "MT", searchName: "Malta", label: "Malta", phone: "356" },
    { code: "MU", searchName: "Mauritius", label: "Mauritius", phone: "230" },
    { code: "MV", searchName: "Maldives", label: "Maldives", phone: "960" },
    { code: "MW", searchName: "Malawi", label: "Malawi", phone: "265" },
    { code: "MX", searchName: "Mexico", label: "Mexico", phone: "52" },
    { code: "MY", searchName: "Malaysia", label: "Malaysia", phone: "60" },
    { code: "MZ", searchName: "Mozambique", label: "Mozambique", phone: "258" },
    { code: "NA", searchName: "Namibia", label: "Namibia", phone: "264" },
    {
      code: "NC",
      searchName: "New-Caledonia",
      label: "New Caledonia",
      phone: "687",
    },
    { code: "NE", searchName: "Niger", label: "Niger", phone: "227" },
    // { code: "NF", searchName: "Namibia", label: "Norfolk Island", phone: "672" },
    { code: "NG", searchName: "Nigeria", label: "Nigeria", phone: "234" },
    { code: "NI", searchName: "Nicaragua", label: "Nicaragua", phone: "505" },
    { code: "NL", searchName: "Netherlands", label: "Netherlands", phone: "31" },
    { code: "NO", searchName: "Norway", label: "Norway", phone: "47" },
    { code: "NP", searchName: "Nepal", label: "Nepal", phone: "977" },
    { code: "NR", searchName: "Nauru", label: "Nauru", phone: "674" },
    { code: "NU", searchName: "Niue", label: "Niue", phone: "683" },
    { code: "NZ", searchName: "New-Zealand", label: "New Zealand", phone: "64" },
    { code: "OM", searchName: "Oman", label: "Oman", phone: "968" },
    { code: "PA", searchName: "Panama", label: "Panama", phone: "507" },
    { code: "PE", searchName: "Peru", label: "Peru", phone: "51" },
    {
      code: "PF",
      searchName: "French-Polynesia",
      label: "French Polynesia",
      phone: "689",
    },
    {
      code: "PG",
      searchName: "Papua-New-Guinea",
      label: "Papua New Guinea",
      phone: "675",
    },
    { code: "PH", searchName: "Philippines", label: "Philippines", phone: "63" },
    { code: "PK", searchName: "Pakistan", label: "Pakistan", phone: "92" },
    { code: "PL", searchName: "Poland", label: "Poland", phone: "48" },
    {
      code: "PM",
      searchName: "Saint-Pierre-and-Miquelon",
      label: "Saint Pierre and Miquelon",
      phone: "508",
    },
    // { code: "PN", searchName: "Pakistan", label: "Pitcairn", phone: "870" },
    { code: "PR", searchName: "Puerto Rico", label: "Puerto Rico", phone: "1" },
    {
      code: "PS",
      searchName: "Palestine",
      label: "Palestine, State of",
      phone: "970",
    },
    { code: "PT", searchName: "Portugal", label: "Portugal", phone: "351" },
    { code: "PW", searchName: "Palau", label: "Palau", phone: "680" },
    { code: "PY", searchName: "Paraguay", label: "Paraguay", phone: "595" },
    { code: "QA", searchName: "Qatar", label: "Qatar", phone: "974" },
    // { code: "RE", searchName: "Pakistan", label: "Reunion", phone: "262" },
    { code: "RO", searchName: "Romania", label: "Romania", phone: "40" },
    { code: "RS", searchName: "Serbia", label: "Serbia", phone: "381" },
    {
      code: "RU",
      searchName: "Russia",
      label: "Russian Federation",
      phone: "7",
    },
    { code: "RW", searchName: "Rwanda", label: "Rwanda", phone: "250" },
    {
      code: "SA",
      searchName: "Saudi-Arabia",
      label: "Saudi Arabia",
      phone: "966",
    },
    {
      code: "SB",
      searchName: "Solomon-Islands",
      label: "Solomon Islands",
      phone: "677",
    },
    { code: "SC", searchName: "Seychelles", label: "Seychelles", phone: "248" },
    { code: "SD", searchName: "Sudan", label: "Sudan", phone: "249" },
    { code: "SE", searchName: "Sweden", label: "Sweden", phone: "46" },
    { code: "SG", searchName: "Singapore", label: "Singapore", phone: "65" },
    {
      code: "SH",
      searchName: "Saint-Helena",
      label: "Saint Helena",
      phone: "290",
    },
    { code: "SI", searchName: "Slovenia", label: "Slovenia", phone: "386" },
    // {
    //   code: "SJ",
    //   searchName: "Pakistan",
    //   label: "Svalbard and Jan Mayen",
    //   phone: "47",
    // },
    { code: "SK", searchName: "Slovakia", label: "Slovakia", phone: "421" },
    {
      code: "SL",
      searchName: "Sierra Leone",
      label: "Sierra Leone",
      phone: "232",
    },
    { code: "SM", searchName: "San-Marino", label: "San Marino", phone: "378" },
    { code: "SN", searchName: "Senega", label: "Senegal", phone: "221" },
    { code: "SO", searchName: "Somalia", label: "Somalia", phone: "252" },
    { code: "SR", searchName: "Suriname", label: "Suriname", phone: "597" },
    { code: "SS", searchName: "South Sudan", label: "South Sudan", phone: "211" },
    {
      code: "ST",
      searchName: "Sao-Tome-and-Principe",
      label: "Sao Tome and Principe",
      phone: "239",
    },
    { code: "SV", searchName: "El-Salvador", label: "El Salvador", phone: "503" },
    {
      code: "SX",
      searchName: "Sint-Maarten",
      label: "Sint Maarten (Dutch part)",
      phone: "1-721",
    },
    {
      code: "SY",
      searchName: "Syrian",
      label: "Syrian Arab Republic",
      phone: "963",
    },
    // { code: "SZ", searchName: "Swaziland", label: "Swaziland", phone: "268" },
    {
      code: "TC",
      searchName: "Turks-and-Caicos",
      label: "Turks and Caicos Islands",
      phone: "1-649",
    },
    { code: "TD", searchName: "Chad", label: "Chad", phone: "235" },
    {
      code: "TF",
      searchName: "Pakistan",
      label: "French Southern Territories",
      phone: "262",
    },
    { code: "TG", searchName: "Togo", label: "Togo", phone: "228" },
    { code: "TH", searchName: "Thailand", label: "Thailand", phone: "66" },
    { code: "TJ", searchName: "Tajikistan", label: "Tajikistan", phone: "992" },
    // { code: "TK", searchName: "Pakistan", label: "Tokelau", phone: "690" },
    { code: "TL", searchName: "Timor-Leste", label: "Timor-Leste", phone: "670" },
    // {
    //   code: "TM",
    //   searchName: "Turkmenistan",
    //   label: "Turkmenistan",
    //   phone: "993",
    // },
    { code: "TN", searchName: "Tunisia", label: "Tunisia", phone: "216" },
    { code: "TO", searchName: "Tonga", label: "Tonga", phone: "676" },
    { code: "TR", searchName: "Turkey", label: "Turkey", phone: "90" },
    {
      code: "TT",
      searchName: "Trinidad-and-Tobago",
      label: "Trinidad and Tobago",
      phone: "1-868",
    },
    { code: "TV", searchName: "Tuvalu", label: "Tuvalu", phone: "688" },
    {
      code: "TW",
      searchName: "Taiwan",
      label: "Taiwan, Province of China",
      phone: "886",
    },
    {
      code: "TZ",
      searchName: "Tanzania",
      label: "United Republic of Tanzania",
      phone: "255",
    },
    { code: "UA", searchName: "Ukraine", label: "Ukraine", phone: "380" },
    { code: "UG", searchName: "Uganda", label: "Uganda", phone: "256" },
    {
      code: "US",
      searchName: "USA",
      label: "United States",
      phone: "1",
      suggested: true,
    },
    { code: "UY", searchName: "Uruguay", label: "Uruguay", phone: "598" },
    { code: "UZ", searchName: "Uzbekistan", label: "Uzbekistan", phone: "998" },
    {
      code: "VA",
      searchName: "Vatican-City",
      label: "Holy See (Vatican City State)",
      phone: "379",
    },
    {
      code: "VC",
      searchName: "St-Vincent-Grenadines",
      label: "Saint Vincent and the Grenadines",
      phone: "1-784",
    },
    { code: "VE", searchName: "Venezuela", label: "Venezuela", phone: "58" },
    {
      code: "VG",
      searchName: "British-Virgin-Islands",
      label: "British Virgin Islands",
      phone: "1-284",
    },
    {
      code: "VI",
      searchName: "US-Virgin-Islands",
      label: "US Virgin Islands",
      phone: "1-340",
    },
    { code: "VN", searchName: "Vietnam", label: "Vietnam", phone: "84" },
    { code: "VU", searchName: "Vanuatu", label: "Vanuatu", phone: "678" },
    {
      code: "WF",
      searchName: "Wallis-and-Futuna",
      label: "Wallis and Futuna",
      phone: "681",
    },
    { code: "WS", searchName: "Samoa", label: "Samoa", phone: "685" },
    // { code: "XK", searchName: "Kosovo", label: "Kosovo", phone: "383" },
    { code: "YE", searchName: "Yemen", label: "Yemen", phone: "967" },
    { code: "YT", searchName: "Mayotte", label: "Mayotte", phone: "262" },
    {
      code: "ZA",
      searchName: "South-Africa",
      label: "South Africa",
      phone: "27",
    },
    { code: "ZM", searchName: "Zambia", label: "Zambia", phone: "260" },
    { code: "ZW", searchName: "Zimbabwe", label: "Zimbabwe", phone: "263" },
  ];
