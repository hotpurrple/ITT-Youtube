import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./recommendedcategories.css"
import { useState } from 'react';
import { categoriesForCategoriesBar } from '../../../../utils/constants';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function RecommendedCategories({ setRecommendedSlider }) {

    const url = useParams().id
    const [randomCategories, setRandomCategories] = useState([])
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setRandomCategories(categoriesForCategoriesBar.sort(() => 0.5 - Math.random()).slice(0, 4))
    }, [url])


    return (
        <>


            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, width: "23vw", bgcolor: 'background.paper', marginBottom: "2vh", }}>
                <Tabs className='muiRecommendedTabs'
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    indicatorColor="white"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    {randomCategories.map((e, i) => {
                        return <Tab onClick={() => setRecommendedSlider(e.name)}
                            className='muiRecommendedTab' label={e.name} key={i} />
                    })}
                </Tabs>
            </Box>
        </>
    )
}
