import "./imageList.css";
import React from "react";
import ImageCard from "./imageCard";


const ImageList = (props) => {
  const images = props.images.map(image => {
    return (
      // keyプロパティをつけるのは、mapから返すjsxのルートエレメント
      // <img alt={description} key={id} src={urls.regular} />
      <ImageCard image={image} />
    )
  })

  return (
    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList;