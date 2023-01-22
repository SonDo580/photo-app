import { Button, FormGroup, Label } from "reactstrap";
import { FastField, Form, Formik } from "formik";

import { PHOTO_CATEGORIES } from "constants/global";
import Images from "constants/images";
import InputField from "customFields/InputField";
import SelectField from "customFields/SelectField";

function PhotoForm() {
  return (
    <Formik initialValues={{ title: "" }}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;

        return (
          <Form>
            <FastField name="title" component={InputField} label="Title" />

            <FastField
              name="category"
              component={SelectField}
              label="Category"
              options={PHOTO_CATEGORIES}
            />

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
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
