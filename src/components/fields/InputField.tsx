import { FieldProps } from "formik";
import { Form, Input } from "semantic-ui-react";

const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <Form.Field>
      <label>{field.name}</label>
      <Input {...props} {...field} />
      {errorMessage && (
        <div style={{ color: "red", textTransform: "capitalize" }}>
          {errorMessage}
        </div>
      )}
    </Form.Field>
  );
};

export default InputField;
