import { Col, Row } from "reactstrap";
import PhotoCard from "./PhotoCard";

function PhotoList(props) {
  const { photos } = props;

  return (
    <Row>
      {photos.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard photo={photo} />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
