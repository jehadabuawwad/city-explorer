import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class ErrorModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.ModalShow} onHide={this.props.handleModalShow}>
        <Modal.Body>{this.props.errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={!this.props.handleModalShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ErrorModal;
