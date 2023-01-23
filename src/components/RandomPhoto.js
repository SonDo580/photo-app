import { Button } from "reactstrap";

function RandomPhoto() {
  return (
    <div className="random-photo">
      <div className="random-photo__buton">
        <Button outline color="primary">
          Random a Photo
        </Button>
      </div>
      <div className="random-photo__photo">
        <img
          width="200px"
          height="200px"
          src="https://picsum.photos/id/cat/300/300"
          alt="Ooops...Not found. Please click random again"
        />
      </div>
    </div>
  );
}

export default RandomPhoto;
