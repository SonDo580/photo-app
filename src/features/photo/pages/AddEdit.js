import Banner from "components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PhotoForm from "../components/PhotoForm";
import { addPhoto, updatePhoto } from "../photoSlice";
import "./AddEdit.scss";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: photoID } = useParams();

  const editPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === Number(photoID))
  );

  const initialValues = photoID
    ? editPhoto
    : {
        title: "",
        category: null,
        photo: "",
      };

  const handleSubmit = (values) => {
    if (photoID) {
      // Update photo
      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch(updatePhoto(values));
          navigate("/photos");

          resolve(true);
        }, 2000);
      });
    }

    // Add new photo
    const newPhoto = { ...values, id: uuidv4() };

    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(addPhoto(newPhoto));
        navigate("/photos");

        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-add">
      <Banner title="Pick your amazing photo" />

      <div className="photo-add__form">
        <PhotoForm
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          editMode={photoID ? true : false}
        />
      </div>
    </div>
  );
}

export default Add;
