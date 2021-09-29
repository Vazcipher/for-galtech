import React, { useState, useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Diamond from './Diamond'
import ShapeFilter from './ShapeFilter'

export default function Home() {

    const [diamonds, setDiamonds] = useState([])
    const [buttons, setButtons] = useState([])
    const [items, setItems] = useState()
    // const allCatagories = ['All' , ...diamonds.map('')]

    const fetchdiamonds = async () => {
        await fetch("/diamonds.json").then(res => {
            res.json().then(data => {
                setDiamonds(data.diamonds)
                console.log(data.diamonds);
            })
        })
    }

    const filter = (button) => {
        const filteredData = diamonds.filter(item => item.shape === button)
        setItems(filteredData)

    }


    console.log(items);

    useEffect(() => {
        fetchdiamonds()

    }, [])


    return (
        <div>
            <ShapeFilter filter={filter}/>
            <Row>

                {items? items.map(item => (
                    <Col sm={12} ms={8} lg={6} xl={3}>
                        <Diamond data={item} />
                    </Col>
                )):diamonds.map(item => (
                    <Col sm={12} ms={8} lg={6} xl={3}>
                        <Diamond data={item} />
                    </Col>
                ))

                }
            </Row>
        </div>
    )
}
