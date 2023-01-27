import Banner from "components/Banner";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhotoForm from "../components/PhotoForm";
import { addPhoto } from "../photoSlice";
import "./Add.scss";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(addPhoto(values));
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
