import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
const styles = {
  paddingLeft: 5,
  width: 500,
  height: 650,
  marginTop: 5,
  marginLeft: 10,
};
const imagStyle = {
  width: 450,
  height: 450,
};

class WeatherCard extends React.Component {
  render() {
    return (
      <Card border='secondary' style={styles}>
        <Card.Body>
          <Card.Title>
            Weather Information in <b> {this.props.NameOfLocation}</b>
          </Card.Title>
          <Card.Text>
            Date of the Day : <b> {this.props.WeatherData.data}</b>
          </Card.Text>
          <Card.Text>
            {' '}
            Weather Description : <b>{this.props.WeatherData.description}</b>
          </Card.Text>
          <Image style={imagStyle} src={this.props.MapOfLocation} rounded />
          <br />
          <br />
          <Card.Title>Here is Some popular Movies in this Area </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default WeatherCard;
