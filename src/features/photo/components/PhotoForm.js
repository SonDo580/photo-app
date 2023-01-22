import { Button, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";

import { PHOTO_CATEGORIES } from "constants/global";
import Images from "constants/images";
import { FastField, Form, Formik } from "formik";
import InputField from "./InputField";

function PhotoForm() {
  return (
    <Formik initialValues={{ title: "" }}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              type="text"
              label="Title"
            />

            <FormGroup>
              <Label for="title">Title</Label>
              <Input name="title" id="title" />
            </FormGroup>

            <FormGroup>
              <Label for="category">Category</Label>
              <Select
                id="category"
                name="category"
                options={PHOTO_CATEGORIES}
              />
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
      }}
    </Formik>
  );
}

export default PhotoForm;
