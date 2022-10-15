import React from "react";
import { categoriesForCategoriesBar } from "../../utils/constants";
// import "./categoriesBar.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function CategoriesBar(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    //Ширината на този box трябва да се доизмисли
    <Box sx={{ maxWidth: "1682px", backgroundColor: "#ffffff" /*"#202020"*/ }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
    
      >
        {categoriesForCategoriesBar.map((c) => (
          <Tab
            label={c.name}
            variant="outlined"
            sx={{
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
    </Box>
  );
}
