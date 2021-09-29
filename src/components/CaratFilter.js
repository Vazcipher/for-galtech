import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function CaratFilter() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const marks = [
        {
            "value": 0,
            "label": "demo"
        },
        {
            "value": 5,
            "label": "demo"
        },
        {
            "value": 6,
            "label": "demo"
        }
    ]
    function valuetext(value) {
        return `${value}°C`;
      }
      

    return (
        <Grid sx={{ width: 180 }}>

            <Grid>
                <Typography>Carat</Typography>
                <Grid item>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
