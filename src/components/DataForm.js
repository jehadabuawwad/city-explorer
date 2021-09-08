import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const styles = {
  padding: 15,
  width: 330,
  marginTop: 10,
};

class DataForm extends React.Component {
  render() {
    return (
      <Form style={styles} onSubmit={this.props.OnSubmitOfLocationName}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            onChange={this.props.OnChangeOfLocationName}
            type='text'
            placeholder='Enter Name of a Location'
          />
        </Form.Group>

        <Button size='sm' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}
export default DataForm;
