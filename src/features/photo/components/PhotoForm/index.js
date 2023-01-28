import { Button, FormGroup, Spinner } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";

import { PHOTO_CATEGORIES } from "constants/global";
import InputField from "customFields/InputField";
import SelectField from "customFields/SelectField";
import PhotoField from "customFields/PhotoField";

function PhotoForm(props) {
  const { handleSubmit, initialValues, editMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    category: Yup.number().nullable().required(),
    photo: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;

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
                {isSubmitting ? <Spinner /> : null}
                {editMode ? "Update photo" : "Add to album"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
