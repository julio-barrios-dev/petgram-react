import styled, { keyframes } from 'styled-components/macro'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
const backgroundKeyframes = keyframes`
  from {
    background-position: -100px;
  }
  to {
    background-position: 100px;    
  }
`
export const Loading = styled.div`
  background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
  background-size: 300px;
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  animation: ${backgroundKeyframes} 1s linear infinite;
`
