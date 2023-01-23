import RandomPhoto from "components/RandomPhoto";
import { FormGroup, Label } from "reactstrap";

function PhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <RandomPhoto
        name={name}
        imageUrl={value}
        onRandomButtonBlur={onBlur}
        onImageUrlChange={handleImageUrlChange}
      />
    </FormGroup>
  );
}

export default PhotoField;
