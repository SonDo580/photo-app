import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

function PhotoCard(props) {
  const { photo, handleRemove } = props;

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo-overlay">
        <h3 className="photo-title">{photo.title}</h3>

        <div className="photo-actions">
          <div>
            <Link to={`/photos/${photo.id}`}>
              <Button outline size="sm" color="light">
                Edit
              </Button>
            </Link>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => handleRemove(photo.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
