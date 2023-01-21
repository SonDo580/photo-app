import Banner from "../../../components/Banner";
import PhotoForm from "../components/PhotoForm";
import "./Add.scss";

function Add() {
  return (
    <div className="photo-add">
      <Banner title="Pick your amazing photo" />

      <div className="photo-add__form">
        <PhotoForm />
      </div>
    </div>
  );
}

export default Add;
