import { Fragment } from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";

function Gallery(props) {
  let images = [];
  
  if(props.images.length>3){
    for (let i = 0; i < 4; i++) {
      images.push({
        original: props.images[i].urlImage,
        thumbnail: props.images[i].urlImage,
      })
    }
  }
  else 
    if(props.images.length===3){
      for (let i = 0; i < props.images.length; i++) {
        images.push({
          original: props.images[i].urlImage,
          thumbnail: props.images[i].urlImage,
        })
      }
      images.push({
        original: props.images[1].urlImage,
        thumbnail: props.images[1].urlImage,
      })
    
  } else if(props.images.length===2){
      for (let i = 0; i < props.images.length; i++) {
        images.push({
          original: props.images[i].urlImage,
          thumbnail: props.images[i].urlImage,
        })
      }
      images.push({
        original: props.images[1].urlImage,
        thumbnail: props.images[1].urlImage,
      })
      
      images.push({
        original: props.images[0].urlImage,
        thumbnail: props.images[0].urlImage,
      })
    }
    else{
      for (let index = 0; index < 4; index++) {
        images.push({
          original: props.images[0].urlImage,
          thumbnail: props.images[0].urlImage,
        })
      }
    }
  

  return (
    <div className="containerGallery">
      {document.documentElement.scrollWidth > 768 ?
        <ImageGallery
          items={images}
          thumbnailPosition="bottom"
          stopPropagation={true}
          useTranslate3D={false}
          showIndex={true}
          showPlayButton={false}
        />
      :
        
        <ImageGallery
        items={images}
        thumbnailPosition="bottom"
        stopPropagation={true}
        useTranslate3D={false}
        showIndex={true}
        autoPlay={true}
        showPlayButton={false}
        />
      }
     <a className="VerMas">Ver más</a>
    </div>
  );
}

export default Gallery;
