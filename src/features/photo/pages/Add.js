import Banner from "components/Banner";
import { useDispatch } from "react-redux";
import PhotoForm from "../components/PhotoForm";
import { addPhoto } from "../photoSlice";
import "./Add.scss";

function Add() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addPhoto(values));
  };

  return (
    <div className="photo-add">
      <Banner title="Pick your amazing photo" />

      <div className="photo-add__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Add;
