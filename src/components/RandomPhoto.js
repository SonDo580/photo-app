import { Button } from "reactstrap";

function RandomPhoto(props) {
  const { name, imageUrl, onRandomButtonBlur } = props;

  return (
    <div className="random-photo">
      <div className="random-photo__buton">
        <Button outline color="primary" name={name} onBlur={onRandomButtonBlur}>
          Random a Photo
        </Button>
      </div>
      <div className="random-photo__photo">
        <img
          src={imageUrl}
          alt="Ooops...Not found. Please click random again"
        />
      </div>
    </div>
  );
}

export default RandomPhoto;
