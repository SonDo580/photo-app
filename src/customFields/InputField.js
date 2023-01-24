import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        id={name}
        type={type ? type : "text"}
        disabled={disabled}
        {...field}
      />

      {errors[name] && touched[name] ? <p>{errors[name]}</p> : null}
    </FormGroup>
  );
}

export default InputField;
