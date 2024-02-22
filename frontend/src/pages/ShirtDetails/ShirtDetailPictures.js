import React from "react"
import { Carousel } from "react-bootstrap"

export default function ShirtDetailPictures(props) {
    const shirtData = props.shirtData
    const shirtImages = shirtData.img
    const [index, setIndex] = React.useState(0)
    
    console.log(shirtImages)
    const shirtScrollElements = shirtImages.map((img) => {
        return (
            <img src={`/images/${img}`} className="shirt-small-img"/>
        )
    })

    return (
        <div className="shirt-detail-img-container">
            <Carousel variant="dark" interval={null} indicators={false} className="shirt-hero-img-container">
                <Carousel.Item>
                    <img src={`/images/${shirtData.img[0]}`} alt="shirt" className="shirt-hero-img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`/images/${shirtData.img[1]}`} alt="shirt" className="shirt-hero-img"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={`/images/${shirtData.img[2]}`} alt="shirt" className="shirt-hero-img"/>
                </Carousel.Item>
            </Carousel>
            <div className="shirt-small-img-container">
                    {shirtScrollElements}
            </div>
        </div>
    )
}