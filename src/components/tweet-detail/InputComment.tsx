import React from "react";
import { Form, Input } from "semantic-ui-react";

const InputComment: React.FC = () => {
  return (
    <Form>
      <Form.Field>
        <label>Comment</label>
        <Input placeholder="Comment on this post" />
      </Form.Field>
    </Form>
  );
};

export default InputComment;
