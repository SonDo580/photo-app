import { Col, Row } from "reactstrap";
import PhotoCard from "./PhotoCard";

function PhotoList(props) {
  const { photos } = props;

  const handleRemove = (photoID) => {
    console.log(photoID);
  };

  return (
    <Row>
      {photos.map((photo) => (
        <Col key={photo.id} xs="12" md="6" lg="3">
          <PhotoCard photo={photo} handleRemove={handleRemove} />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
