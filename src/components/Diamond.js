import React from 'react'
import {Card } from 'react-bootstrap'


export default function Diamond({data}) {
    console.log(data);
    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img style={{width:"100%", height:"250px"}} variant="top" src={data.image} />
            <Card.Body>
                <Card.Title style={{textAlign:"center"}}>{data.name}</Card.Title>
                <Card.Text style={{textAlign:"center"}}>
                   ${data.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
