import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;

  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        id={name}
        type={type ? type : "text"}
        disabled={disabled}
        {...field}
        invalid={showError}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;
