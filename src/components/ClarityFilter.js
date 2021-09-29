import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function ClarityFilter() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
        console.log(newValue);
    }

    const marks = [
        {
            "value": 10,
            "label": "I1"
        },
        {
            "value": 20,
            "label": "SI2"
        },
        {
            "value": 30,
            "label": "SI1"
        },
        {
            "value": 40,
            "label": "VS2"
        },
        {
            "value": 50,
            "label": "VVS2"
        },
        {
            "value": 60,
            "label": "VVS1"
        },
        {
            "value": 70,
            "label": "IF"
        },
        {
            "value": 80,
            "label": "FL"
        }
    ]

    return (
        <Grid sx={{ width: 180 }}>

            <Grid>
                <Typography>Clarity</Typography>
                <Grid item>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        min={10}
                        max={80}

                        step={10}
                        marks={marks}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
