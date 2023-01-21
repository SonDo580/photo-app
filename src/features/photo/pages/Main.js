import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import Banner from "components/Banner";
import Images from "constants/images";

function Main() {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="add">Add New Photo</Link>
      </Container>
    </div>
  );
}

export default Main;
