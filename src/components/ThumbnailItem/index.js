import './index.css'

const ThumbnailItem = props => {
  const {imagesListDetails, updateDisplayThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesListDetails

  const onClickThumbnail = () => {
    updateDisplayThumbnail(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
