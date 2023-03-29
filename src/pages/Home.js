import React from 'react'
import ColumnContainer from '../components/containers/ColumnContainer'
import MainContainer from '../components/containers/MainContainer'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <MainContainer>
        <ColumnContainer></ColumnContainer>
        <ColumnContainer></ColumnContainer>
      </MainContainer>
      <Footer></Footer>
    </div>
  )
}

export default Home