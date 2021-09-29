import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function CutFilter() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    function valuetext(value) {
        return `${value}°C`;
      }

      const marks=[
        {
            "value":0,
            "label":"good"
        },
        {
            "value":50,
            "label":"Very Good"
        },
        {
            "value":100,
            "label":"Excelent"
        }
      ]
      

    return (
        <Grid sx={{ width: 180 }}>

            <Grid>
                <Typography>Cut</Typography>
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
