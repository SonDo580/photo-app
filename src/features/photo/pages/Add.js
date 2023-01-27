import Banner from "components/Banner";
import PhotoForm from "../components/PhotoForm";
import "./Add.scss";

function Add() {
  const handleSubmit = (values) => {
    console.log(values);
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
