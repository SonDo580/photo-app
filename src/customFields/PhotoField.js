import RandomPhoto from "components/RandomPhoto";
import { FormGroup, Label } from "reactstrap";

function PhotoField() {
  return (
    <FormGroup>
      <Label for="photo">Photo</Label>
      <RandomPhoto />
    </FormGroup>
  );
}

export default PhotoField;
