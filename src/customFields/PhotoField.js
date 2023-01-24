import RandomPhoto from "components/RandomPhoto";

import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Label } from "reactstrap";

function PhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;

  const showError = errors[name] && touched[name];

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

      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default PhotoField;
