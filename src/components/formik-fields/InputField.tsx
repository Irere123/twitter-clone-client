import { Form, Input } from "semantic-ui-react";

const InputField = ({
  field,
  form: { touched, errors },
  label,
  ...props
}: any) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <Form.Field>
      <label>{label}</label>
      <Input error={hasError} {...props} {...field} />
    </Form.Field>
  );
};

export default InputField;
