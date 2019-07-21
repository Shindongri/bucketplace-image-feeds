import React from "react"
import styled from "styled-components"
import CheckedImage from "../assets/bt-checkbox-checked@2x.png"

const Wrap = styled.div`
  display: flex;
  margin: 30px 0 30px;
`

const Checkbox = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`

const Text = styled.text`
  font-size: 15px;
  color: #424242;
  margin: 3px 0 2px 6px;
`

interface IProps {
  checked: boolean;
}

const Filter = ({ checked }: IProps) => (
  <Wrap>
    <Checkbox src={ CheckedImage } />
    <Text>스크랩한 것만 보기</Text>
  </Wrap>
)

export default Filter
