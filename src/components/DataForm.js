import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class DataForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.OnSubmitOfLocationName}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            size='lg'
            onChange={this.props.OnChangeOfLocationName}
            type='text'
            placeholder='Enter Name of a Location'
          />
        </Form.Group>
        <Container>
          <Row style={{ height: 100 }} xs={1} md={1} className='g-4'>
            <Button size='lg' variant='primary' type='submit'>
              Submit
            </Button>
          </Row>
        </Container>
      </Form>
    );
  }
}
export default DataForm;
