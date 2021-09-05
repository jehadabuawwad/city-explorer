import React from 'react';
import Card from 'react-bootstrap/Card';
const styles = {
  paddingLeft: 15,
  width: 400,
  marginTop: 10,
  marginLeft: 10,
};

class LocationCard extends React.Component {
  render() {
    return (
      <Card style={styles}>
        <Card.Body>
          <Card.Title>Location Information</Card.Title>
          <br />
          <Card.Text>
            <b>Location Name is:</b> {this.props.DataOfLocation.display_name}
          </Card.Text>
          <Card.Text>
            <b>Latitude is:</b> {this.props.DataOfLocation.lat}
          </Card.Text>
          <Card.Text>
            <b>Longitud is:</b> {this.props.DataOfLocation.lon}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default LocationCard;
