import { Button } from "reactstrap";

function PhotoCard(props) {
  const { photo } = props;

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo-overlay">
        <h3 className="photo-title">{photo.title}</h3>

        <div className="photo-actions">
          <div>
            <Button outline size="sm" color="light">
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="danger">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
