import React from "react";
import { Form, Button } from "semantic-ui-react";

function UpdatePokemon() {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Number</label>
          <input placeholder="Number" />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" />
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <input placeholder="Type" />
        </Form.Field>
        <Form.Field>
          <label>Image url</label>
          <input placeholder="Image url" />
        </Form.Field>
        <Button type="submit">Edit</Button>
      </Form>
    </div>
  );
}

export default UpdatePokemon;
