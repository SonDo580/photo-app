import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";

import { PHOTO_CATEGORIES } from "../../../constants/global";
import Images from "../../../constants/images";

function PhotoForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input name="title" id="title" />
      </FormGroup>

      <FormGroup>
        <Label for="category">Category</Label>
        <Select id="category" name="category" options={PHOTO_CATEGORIES} />
      </FormGroup>

      <FormGroup>
        <Label for="photo">Photo</Label>
        <div>
          <Button outline color="primary">
            Random a Photo
          </Button>
        </div>
        <div>
          <img
            width="200px"
            height="200px"
            src={Images.ORANGE_BG}
            alt="default"
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;
