import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../componetns/categoriesBar/CategoriesBar'
import Video from '../../componetns/video/Video'
import { getPopularVideos } from '../../redux/actions/videos.action'

const HomeScreen = () => {

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getPopularVideos())
},[dispatch])

const {videos} = useSelector(state=>state.homeVideos);

  return (
   <Container>
       <CategoriesBar/>
       <Row>
           {
            /* [...new Array(20)].map((array, index)=>{
                   return<Col key={index} lg={3} md={4}>
                        <Video/>
                   </Col>
               }) */

               videos.map((video, index)=>{
                   return<Col key={index} lg={3} md={4}>
                        <Video video={video} key={video.id}/>
                   </Col>
               })
           }
       </Row>
   </Container>
  )
}

export default HomeScreen