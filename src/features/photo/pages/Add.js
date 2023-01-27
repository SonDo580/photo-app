import Banner from "components/Banner";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PhotoForm from "../components/PhotoForm";
import { addPhoto } from "../photoSlice";
import "./Add.scss";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
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
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Add;
