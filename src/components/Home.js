import React, { useState,useEffect } from 'react'
import { Col,Row } from 'react-bootstrap'
import Diamond from './Diamond'

export default function Home() {

    const [diamonds, setDiamonds] = useState([])

    const fetchdiamonds=async()=>{
        await fetch("/diamonds.json").then(res=>{
            res.json().then(data=>{
                setDiamonds(data.diamonds)
                console.log(data.diamonds);
            })
        })
    }


    console.log(diamonds);

    useEffect(() => {
        fetchdiamonds()
       
    }, [])


    return (
       <Row>
           {diamonds.map(item=>(
               <Col sm={12} ms={8} lg={6} xl={3}>
                    <Diamond data={item}/>
               </Col>
           ))

           }
       </Row>
    )
}
