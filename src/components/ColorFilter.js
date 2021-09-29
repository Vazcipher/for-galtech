import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function ColorFilter() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const marks = [
        {
            "value": 10,
            "label": "D"
        },
        {
            "value": 20,
            "label": "E"
        },
        {
            "value": 30,
            "label": "F"
        },
        {
            "value": 40,
            "label": "G"
        },
        {
            "value": 50,
            "label": "H"
        },
        {
            "value": 60,
            "label": "I"
        },
        {
            "value": 70,
            "label": "J"
        },
        {
            "value": 80,
            "label": "K"
        },
        {
            "value": 90,
            "label": "L"
        },
        {
            "value": 100,
            "label": "M"
        }
    ]

    function valuetext(value) {
        return `${value}°C`;
      }
      

    return (
        <Grid sx={{ width: 180 }}>

            <Grid>
                <Typography>Color</Typography>
                <Grid item>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        marks={marks}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
