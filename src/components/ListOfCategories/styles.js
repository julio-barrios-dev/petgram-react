import styled, { css } from 'styled-components/macro'
import { fadeIn, down } from '../../styles/animation'

export const ContainerListCategory = styled.div`
  position: relative;
`

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  margin: 30px 0;
  cursor: -webkit-grab; 
  cursor: grab;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
  {
    /* ${fadeIn()} */
    ${down()}
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    transform: scale(.5);
    z-index: 1;

  }
  `}
  
`
export const Item = styled.li`
  padding: 0 8px;
`
export const ButtonRight = styled.button`
  position: absolute;
  font-size: 30px;
  color: #ffffffed;
  height: 100%;
  top: 0;
  right: 10px;
`
export const ButtonLeft = styled.button`
  position: absolute;
  font-size: 30px;
  color: #ffffffed;
  height: 100%;
  top: 0;
  left: 10px;
`
