import styled from 'styled-components/macro'

export const DivAlert = styled.div`
  position: fixed;
  top: 100px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 300px;
  height: auto;
  padding: 30px;
  font-size: 25px;
  text-align: center;
  background-color: azure;
  z-index: 1000;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const PAlert = styled.p`
  margin-bottom: 20px;
`
export const ButtonClose = styled.button`
  margin-bottom: 20px;
  position: absolute;
  width: 30px;
  font-size: 25px;
  color: #49494940;
  left: 0px;
  right: 5px;
  top: 10px;
  margin-left: auto;
`
