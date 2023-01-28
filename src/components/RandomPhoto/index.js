import { Button } from "reactstrap";

function RandomPhoto(props) {
  const { name, imageUrl, onRandomButtonBlur, onImageUrlChange } = props;

  const getRandomImageUrl = () => {
    const randomID = Math.trunc(Math.random() * 1000);
    return `https://picsum.photos/id/${randomID}/300/300`;
  };

  const handleRandomPhoto = () => {
    const randomImageUrl = getRandomImageUrl();
    onImageUrlChange(randomImageUrl);
  };

  return (
    <div className="random-photo">
      <div className="random-photo__buton">
        <Button
          outline
          color="primary"
          name={name}
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhoto}
        >
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
