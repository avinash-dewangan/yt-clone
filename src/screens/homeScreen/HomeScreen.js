import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../componetns/categoriesBar/CategoriesBar'
import Video from '../../componetns/video/Video'

const HomeScreen = () => {
  return (
   <Container>
       <CategoriesBar/>
       <Row>
           {
               [...new Array(20)].map(()=>{
                   return<Col lg={3} md={4}>
                        <Video/>
                   </Col>
               })
           }
       </Row>
   </Container>
  )
}

export default HomeScreen