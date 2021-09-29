import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function PriceFilter() {
    const [value, setValue] = useState(0)

    const handleChange=(event,newValue)=>{
        setValue(newValue)
        console.log(newValue);
    }

    const marks=[
        {
            "value":0,
            "label":"demo"
        },
        {
            "value":50,
            "label":"sfsdf"
        },
        {
            "value":100,
            "label":"desdfsdfsdmo"
        }
    ]

    return (
        <Grid sx={{ width: 180 }} price={value}>
            
            <Grid>
            <Typography>Price</Typography>
                <Grid item>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        max={50000}
                        min={100}
                        step={10}
                       
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
