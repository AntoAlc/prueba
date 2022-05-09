import ImageGallery from "react-image-gallery";
import { Fragment } from "react/cjs/react.production.min";
import "./GalleryFullscreen.css";

function GalleryFullscreen(props) {
  let images = [];
  if (props.images != null) {
    for (let i = 0; i < props.images.length; i++) {
      images.push({
        original: props.images[i].urlImage,
        thumbnail: props.images[i].urlImage,
      })
  }
  } else {
    console.log("No se cargaron las imagenes correctamente");
  }
  
  
  return (
    <Fragment>
      <ImageGallery items={images}/>
    </Fragment>
  )
}

export default GalleryFullscreen;
