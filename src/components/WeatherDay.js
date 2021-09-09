import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
const styles = {
  height: 550,
  marginTop: 25,
  marginBottom: 50,
};
const imagStyle = {
  width: 320,
  height: 325,
};

class WeatherDay extends React.Component {
  render() {
    return (
      <Container>
        <Row style={styles} md={3}>
          <Col sm></Col>
          <Col sm>
            <Card border="primary" bg={"Light"} text={"dark"}>
              <Card.Body>
                <Row md={1}>
                  <Col md={{ span: 10, offset: 1 }}>
                    <Card.Title>
                      Weather Information in <b> {this.props.NameOfLocation}</b>
                    </Card.Title>
                  </Col>
                  <Col md={{ span: 10, offset: 2 }}>
                    <Card.Text>
                      Date of the Day : <b> {this.props.WeatherData.data}</b>
                    </Card.Text>
                  </Col>
                  <Col md={{ span: 10, offset: 2 }}>
                    <Card.Text>
                      Weather Description :
                      <b>{this.props.WeatherData.description}</b>
                    </Card.Text>
                  </Col>
                  <Col md={{ span: 10, offset: 1 }}>
                    <Image
                      style={imagStyle}
                      src={this.props.MapOfLocation}
                      rounded
                    />
                  </Col>
                </Row>
                <br />
                <Col md={{ span: 10, offset: 1 }}>
                  <Card.Title>Some popular Movies in this Area </Card.Title>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    );
  }
}
export default WeatherDay;
