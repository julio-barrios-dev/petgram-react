import React from 'react'
import { Link } from 'react-router-dom'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutationToogleLike } from '../../hooks/ToggleLikeMutation.js'
import { FavButton } from '../FavButton'

export const PhotoCard = ({ id, likes = 0, src, liked } = {}) => {
  const [show, element] = useNearScreen()
  const { mutation } = useMutationToogleLike()

  const showCard = () => {
    const handleFavClick = () => {
      mutation({
        variables: {
          input: { id }
        }
      })
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
