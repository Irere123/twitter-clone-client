import { Form, Input } from "semantic-ui-react";

interface Props {
  label: string;
  placeholder: string;
  type: string;
}

function InputField({ label, placeholder, type }: Props) {
  return (
    <Form.Field>
      <label>{label}</label>
      <Input fluid type={type} placeholder={placeholder} />
    </Form.Field>
  );
}

export default InputField;
