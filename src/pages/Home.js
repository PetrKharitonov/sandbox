import React from 'react'
import ColumnContainer from '../components/containers/ColumnContainer'
import MainContainer from '../components/containers/MainContainer'
import Nav from '../components/nav/Nav'

const Home = () => {
  return (
    <div>
      <Nav/>
      <MainContainer>
        <ColumnContainer></ColumnContainer>
        <ColumnContainer></ColumnContainer>
      </MainContainer>
    </div>
  )
}

export default Home