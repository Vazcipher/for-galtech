import React from 'react'
import {Button} from 'react-bootstrap'

export default function ShapeFilter({filter}) {
    return (
        <div>
            <h6>Chose Your Favorite Shape</h6>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Round')}>round</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Princess')}>Princess</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Cushion')}>Cushion</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Emerald')}>Emerald</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Oval')}>Oval</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Radiant')}>Radiant</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Asscher')}>Asscher</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Marquise')}>Marquise</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Heart')}>Heart</Button>
            <Button size="sm" style={{marginRight:"5px", marginBottom:"5px"}} type="button" onClick={()=>filter('Pear ')}>Pear </Button>
        </div>
    )
}
