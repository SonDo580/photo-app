import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

function SelectField(props) {
  console.log(props);
  const { field, label, disabled } = props;

  return (
    <FormGroup>
      <Label for={field.name}>{label}</Label>
      <Select
        id={field.name}
        name={field.name}
        // options={PHOTO_CATEGORIES}
        disabled={disabled}
      />
    </FormGroup>
  );
}

export default SelectField;
