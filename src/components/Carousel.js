import React from 'react'
import { Carousel } from 'react-bootstrap'
// import styled from 'styled-components'

// const Styles = styled.div`
//     .slider3 {
//         height: 300px;
//     }
// `

export const Slider = () => (
    <Carousel className='slider3'>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src='https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=backpack-blonde-hair-blur-214574.jpg&fm=jpg'
                alt='First slide'
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src='https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=beach-dark-dawn-39853.jpg&fm=jpg'
                alt='Second slide'
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src='https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=adult-background-beach-296282.jpg&fm=jpg'
                alt='Third slide'
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
