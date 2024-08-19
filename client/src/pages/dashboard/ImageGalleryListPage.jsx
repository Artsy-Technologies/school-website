import ImageGallery from "../../components/admin/ImageGalleryCard"
import Data from "../../components/Carousel/ImageGalleryData"
function  ImageGalleryListPage() {
  return (
    <div className="w-[100%] h-full">
      <ImageGallery images={Data}/>
    </div>
  );
}

export default ImageGalleryListPage;
