import { FieldProps } from "formik";
import { Form, Input } from "semantic-ui-react";

const InputField = ({ field, form, ...props }: FieldProps) => {
  return (
    <Form.Field>
      <label>{field.name}</label>
      <Input {...props} {...field} />
    </Form.Field>
  );
};

export default InputField;
