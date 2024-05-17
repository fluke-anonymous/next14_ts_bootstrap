import { Form } from 'react-bootstrap';

const PageSizeSelect = ({ onChange }) => {
  return (
    <Form.Select onChange={onChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </Form.Select>
  );
};
