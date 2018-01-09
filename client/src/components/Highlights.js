import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Highlights = ({ highlights }) => (
  <Slider {...settings}>
    {highlights.map(highlight => (
      <div>
        <Slide slide={highlight} />
      </div>
    ))}
  </Slider>
)

export default Highlights
