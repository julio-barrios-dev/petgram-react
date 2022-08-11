import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../Context'
import PropTypes from 'prop-types'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutationToogleLike } from '../../hooks/ToggleLikeMutation.js'
import { FavButton } from '../FavButton'

export const PhotoCard = ({ id, likes, src, liked } = {}) => {
  const [show, element] = useNearScreen()
  const { mutation } = useMutationToogleLike()

  const { state: { showAlert }, onAlert } = useContext(Context)

  const showCard = () => {
    const handleFavClick = async () => {
      try {
        await mutation({
          variables: {
            input: { id }
          }
        })
      } catch (error) {
        onAlert()
      }
    }
    if (!show) {
      return null
    }
    return <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="" />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
  }

  return (
      <Article ref={element}>
        {showCard()}
      </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
