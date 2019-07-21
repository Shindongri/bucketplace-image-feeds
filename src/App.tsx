import React, { useState, useRef } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { BeatLoader } from "react-spinners"

import { IResponse } from './App.spec'

import Filter from "./components/Filter"
import Card from "./components/Card"

import useFetch from "./hooks/useFetch"
// import useOnScreen from "./hooks/useOnScreen"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: AppleSDGothicNeo;
    display: flex;
    justify-content: center;
  }
`

const Container = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  width: 1256px;
  height: 772px;
  background-color: #ffffff;
`

const App: React.FC = () => {
  const ref = useRef(null)

  const [page] = useState(1)
  const [onlyScrapped, setOnlyScrapped] = useState(false)

  const { items, loading, error }: IResponse = useFetch(page)

  // const onScreen = useOnScreen(ref, '-100px')

  if (loading) {
    return (
    <BeatLoader
    sizeUnit={"px"}
    size={15}
    color={'#36D7B7'}
    loading={loading}
    />
    )
  }

  if (error) {
    return null
  }

  const toggleScrapped = () => setOnlyScrapped(!onlyScrapped)

  return (
    <div className="App">
      <Filter onlyScrapped={ onlyScrapped } toggleScrapped={ toggleScrapped } />
      <Container ref={ ref }>
        {
          items.map(({ id, image_url, nickname, profile_image_url }) => (<Card key={ id } id={ id } image_url={ image_url } nickname={ nickname } profile_image_url={ profile_image_url } onlyScrapped={ onlyScrapped } />))
        }
      </Container>
      <GlobalStyle />
    </div>
  )
}

export default App
