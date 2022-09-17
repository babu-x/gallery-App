// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImageDetails

  const changeImage = () => {
    updateImage(id)
  }

  const selectedImage = isActive ? 'selected-thumbnail-image' : ''

  return (
    <li>
      <button type="button">
        <img
          className={`thumbnail-image ${selectedImage}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
