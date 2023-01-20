import { useParams } from "react-router-dom";

function Edit() {
  const { id: photoID } = useParams();

  return <div>Edit Photo {photoID} Page</div>;
}

export default Edit;
