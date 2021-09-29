import { Grid } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import CaratFilter from './CaratFilter'
import ClartityFilter from './ClarityFilter'
import ColorFilter from './ColorFilter'
import CutFilter from './CutFilter'
import './filter.css'
import PriceFilter from './PriceFilter'

export default function Filters({data}) {
    console.log(data);
    return (
        <div className="filter_main">
            <div style={{ paddingTop: "100px", paddingLeft: "10px" }}>
                <Grid>
                    <Container>
                        <ColorFilter />
                        <ClartityFilter />
                        <PriceFilter />
                        <CaratFilter />
                        <CutFilter />
                    </Container>
                </Grid>
            </div>
        </div>
    )
}
