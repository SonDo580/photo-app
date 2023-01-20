import { useParams } from "react-router-dom";

function Edit() {
  const photoID = useParams("id");

  return <div>Edit Photo {photoID} Page</div>;
}

export default Edit;
