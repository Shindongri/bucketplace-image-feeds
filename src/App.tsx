import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
// import { fetchFeedsAPI } from './api'
import datas from './data.json'

import Filter from "./components/Filter"
import Card from "./components/Card"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: AppleSDGothicNeo;
    display: flex;
    justify-content: center;
  }
`

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  width: 1256px;
  height: 772px;
  background-color: #ffffff;
`

const App: React.FC = () => {
  // const [page, setPage] = useState(1)

  // useEffect(() => {
  //   const fetchFeeds = async () => {
  //     try {
  //       const response = await fetchFeedsAPI(page)

  //       console.log(response)
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }

  //   fetchFeeds()
  // }, [])
  
  return (
    <div className="App">
      <Filter checked />
      <Container>
        {
          datas.map(({ id, image_url, nickname, profile_image_url }) => (<Card key={ id } image_url={ image_url } nickname={ nickname } profile_image_url={ profile_image_url }  />))
        }
      </Container>
      <GlobalStyle />
    </div>
  )
}

export default App
