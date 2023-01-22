import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

function SelectField(props) {
  const { field, label, disabled, options } = props;

  return (
    <FormGroup>
      <Label for={field.name}>{label}</Label>
      <Select
        id={field.name}
        name={field.name}
        options={options}
        disabled={disabled}
      />
    </FormGroup>
  );
}

export default SelectField;
