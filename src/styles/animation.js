
import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInkeyFrames} ${type};`

const fadeInkeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const down = ({ time = '.2s', type = 'ease' } = {}) =>
  css`animation: ${time} ${downKeyFrames} ${type};
      animation-fill-mode: forwards;
      `

const downKeyFrames = keyframes`
  from {
    top: -40px;
  }
  to {
    top: -20px
  }
`
