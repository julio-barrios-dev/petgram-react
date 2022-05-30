import React from 'react'
import { Link } from 'react-router-dom'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutationToogleLike } from '../../hooks/ToggleLikeMutation.js'
import { FavButton } from '../FavButton'

export const PhotoCard = ({ id, likes = 0, src, liked } = {}) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [photoLiked, setPhotoLiked] = useLocalStorage(key, liked)
  const { mutation } = useMutationToogleLike()

  const showCard = () => {
    const handleFavClick = () => {
      !photoLiked && mutation({
        variables: {
          input: { id }
        }
      })
      setPhotoLiked(!photoLiked)
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
            <FavButton liked={photoLiked} likes={likes} onClick={handleFavClick} />
          </>
  }

  return (
      <Article ref={element}>
        {showCard()}
      </Article>
  )
}
