import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "../components/PhotoList";

import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

function Main() {
  const photos = useSelector((state) => state.photos);

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center ">
        <div className="py-5">
          <Link to="add">Add New Photo</Link>
        </div>

        <PhotoList photos={photos} />
      </Container>
    </div>
  );
}

export default Main;
