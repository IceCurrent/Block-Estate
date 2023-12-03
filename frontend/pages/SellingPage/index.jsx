import React from "react"

import {
  Button,
  GoogleMap,
  Img,
  Input,
  List,
  SelectBox,
  Text,
} from "components"
import LandingPageCard from "components/LandingPageCard"
import LandingPageFooter from "components/LandingPageFooter"
import LandingPageHeader from "components/LandingPageHeader"

const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
]
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
]
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
]

const SellingPage = () => {
  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_3.png" },
  ]

  return (
    <>
      <LandingPageCard {...landingPageCardPropList[0]} />
      <LandingPageCard {...landingPageCardPropList[1]} />
      <Button>+</Button>
    </>
  )
}

export default SellingPage
