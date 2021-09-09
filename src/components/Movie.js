import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const cardStyles = {
  top: -50,
  marginTop: 25,
  height: 1050,
  width: 600,
};
const imagStyle = {
  width: 325,
  height: 325,
};

const posterUrl = 'https://image.tmdb.org/t/p/w500/';
class Movie extends React.Component {
  render() {
    return (
      <Card border="primary" style={cardStyles}>
        <Card.Body>
          <Image
            style={imagStyle}
            src={`${posterUrl}${this.props.image_url}`}
            alt='No Photo Existed'
            rounded
          />
          <br />
          <br />
          <Card.Title>Title : {this.props.title}</Card.Title>
          <Card.Text>
            <b>Overview</b> : {this.props.overview}
          </Card.Text>
          <Card.Text>
            <b> Average Votes </b> {this.props.average_votes}
          </Card.Text>
          <Card.Text>
            <b>Total Votes </b> {this.props.total_votes}
          </Card.Text>
          <Card.Text>
            <b> Popularity </b> {this.props.popularity}
          </Card.Text>
          <Card.Text>
            <b>Released On </b> {this.props.released_on}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default Movie;
