import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, type, label, disabled } = props;

  return (
    <FormGroup>
      <Label for={field.name}>{label}</Label>
      <Input
        id={field.name}
        type={type ? type : "text"}
        disabled={disabled}
        {...field}
      />
    </FormGroup>
  );
}

export default InputField;
