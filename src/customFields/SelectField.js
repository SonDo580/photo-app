import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

function SelectField(props) {
  const { field, form, label, disabled, options } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;

  const showError = errors[name] && touched[name];

  const handleSelect = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption.value);
  };

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Select
        id={name}
        name={name}
        options={options}
        disabled={disabled}
        value={options.find((option) => option.value === value)}
        onChange={handleSelect}
        onBlur={onBlur}
        className={showError ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
