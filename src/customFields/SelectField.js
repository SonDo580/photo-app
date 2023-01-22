import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

function SelectField(props) {
  const { field, form, label, disabled, options } = props;

  const handleSelect = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption.value);
  };

  return (
    <FormGroup>
      <Label for={field.name}>{label}</Label>
      <Select
        id={field.name}
        name={field.name}
        options={options}
        disabled={disabled}
        value={options.find((option) => option.value === field.value)}
        onChange={handleSelect}
        onBlur={field.onBlur}
      />
    </FormGroup>
  );
}

export default SelectField;
