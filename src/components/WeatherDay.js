import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
const styles = {
  height: 'auto',
  marginTop: 25,
  marginBottom: 50,
};
const imagStyle = {
  width: 325,
  height: 325,
  marginLeft: 0,
  marginTop: 10,
};



class WeatherDay extends React.Component {
  render() {
    return (
      <Container>
        <Row style={styles} md={3}>
          <Col sm></Col>
          <Col sm>
            <Card border='primary' bg={'Light'} text={'dark'}>
              <Col sm={{ offset: 0 }} md={{ offset: 0 }}>
                <Card.Body>
                  <Row>
                    <Card.Title style={{ marginLeft: 5 }}>
                      Weather Information in <b> {this.props.NameOfLocation}</b>
                    </Card.Title>
                  </Row>
                  <Row>
                    <Card.Text style={{ marginLeft: 32 }}>
                      Date of the Day :<b> {this.props.WeatherData.data}</b>
                    </Card.Text>
                  </Row>
                  <Row>
                    <Card.Text style={{ marginLeft: 7 }}>
                      Weather Description :
                      <b>{this.props.WeatherData.description}</b>
                    </Card.Text>
                  </Row>

                  <Row>
                    <Image
                      style={imagStyle}
                      src={this.props.MapOfLocation}
                      rounded
                    />
                  </Row>

                  <br />
                  <Row>
                    <Card.Title  style={{ marginLeft: 15 }}>
                      Scroll Down To See Popular Movies Realted to the City Name
                      you have Entered 🎥{' '}
                    </Card.Title>
                  </Row>
                </Card.Body>
              </Col>
            </Card>
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    );
  }
}
export default WeatherDay;
