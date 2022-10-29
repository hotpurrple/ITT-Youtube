import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import get100RandomCategories from "../../utils/generate100RandomCategories";

export default function CategoriesBar(props) {
  const [value, setValue] = useState(0);

  const [randomCategories, setRandomCategories] = useState(
    get100RandomCategories()
  );

  console.log(randomCategories);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable auto tabs example"
      sx={{
        pt: "5px",
        pb: "5px",
        width: "100%",
        "& .MuiTabs-indicator": {
          display: "none", //за да няма черта под текущо селектирания tab
        },
      }}
    >
      {randomCategories.map((c) => (
        <Tab
          label={c.name}
          variant="outlined"
          sx={{
            margin: "0px 5px 0px 5px",
            minHeight: "25px",
            maxHeight: "35px",
            padding: "5px 5px 5px 5px",
            borderRadius: "20px",
            color: "#444444" /*"#dddddd"*/,
            fontSize: "14px",
            lineHeight: "20px",
            backgroundColor: "#f2f2f2" /*"#393a3a",*/,
            letterSpacing: "0.2px",
            border: 1,
            borderColor: "#d9d9d9" /*#605f60"*/,
            "&:hover": {
              backgroundColor: "#e5e5e5" /*#4d4d4d",*/,
              borderColor: "#605f60",
            },
          }}
          onClick={() => props.setSelectedCategory(c.name)}
          key={c.name}
        />
      ))}
    </Tabs>
  );
}
