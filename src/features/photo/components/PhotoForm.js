import { Button, FormGroup } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";

import { PHOTO_CATEGORIES } from "constants/global";
import InputField from "customFields/InputField";
import SelectField from "customFields/SelectField";
import PhotoField from "customFields/PhotoField";

function PhotoForm() {
  const initialValues = {
    title: "",
    category: null,
    photo: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    category: Yup.object().required(),
    photo: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField name="title" component={InputField} label="Title" />

            <FastField
              name="category"
              component={SelectField}
              label="Category"
              options={PHOTO_CATEGORIES}
            />

            <FastField name="photo" component={PhotoField} label="Photo" />

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
