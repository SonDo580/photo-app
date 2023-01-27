import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "../components/PhotoList";
import { removePhoto } from "../photoSlice";

function Main() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const handleRemove = (photoID) => {
    dispatch(removePhoto(photoID));
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center ">
        <div className="py-5">
          <Link to="add">Add New Photo</Link>
        </div>

        <PhotoList photos={photos} handleRemove={handleRemove} />
      </Container>
    </div>
  );
}

export default Main;
