import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';
import ErrorModal from './components/ErrorModal';
import DataForm from './components/DataForm';
import MoviesCard from './components/MoviesCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
const styles = {
  width: 1500,
  height: 600,
  marginTop: -555,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NameOfLocation: '',
      MapOfLocation: '',
      latAndLonData: {},
      WeatherData: {},
      MoviesData: {},
      errorMessage: '',
      ModalShow: false,
      ShowDetails: false,
    };
  }
  OnChangeOfLocationName = (event) => {
    this.setState({ NameOfLocation: event.target.value });
  };

  handleModalShow = () => {
    this.setState({
      ModalShow: !this.state.ModalShow,
    });
  };
  OnSubmitOfLocationName = async (event) => {
    event.preventDefault();
    console.log(this.state.NameOfLocation);
    try {
      const url1 = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.NameOfLocation}&format=json`;
      const response1 = await axios.get(url1);
      this.setState({ latAndLonData: response1.data[0] });

      const url2 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&zoom=15&center=[${this.state.latAndLonData.lat},${this.state.latAndLonData.lon}]&format=jpg`;
      const response2 = await axios.get(url2);
      this.setState({ MapOfLocation: response2.request.responseURL });

      const url3 = `${process.env.REACT_APP_SERVER_URL}/weather?city_name=${this.state.NameOfLocation}&lat=${this.state.latAndLonData.lat}&lon=${this.state.latAndLonData.lon}`;
      const response3 = await axios.get(url3);
      this.setState({ WeatherData: response3.data[0] });

      const url4 = `${process.env.REACT_APP_SERVER_URL}/movies?city_name=${this.state.NameOfLocation}`;
      const response4 = await axios.get(url4);
      console.log(response4);
      this.setState({ MoviesData: response4.data });
      this.setState({ ShowDetails: !this.state.ShowDetails });
    } catch (error) {
      this.setState({
        errorMessage: error.message,
        ModalShow: true,
        ShowDetails: false,
      });
    }
  };
  render() {
    return (
      <div>
        <DataForm
          OnChangeOfLocationName={this.OnChangeOfLocationName}
          OnSubmitOfLocationName={this.OnSubmitOfLocationName}
        />

        {this.state.ShowDetails && (
          <div>
            <WeatherCard
              NameOfLocation={this.state.NameOfLocation}
              MapOfLocation={this.state.MapOfLocation}
              atAndLonData={this.state.latAndLonData}
              WeatherData={this.state.WeatherData}
            />
            <Container style={styles}>
              <Row xs={1} md={1} className='g-4'>
                {this.state.MoviesData.map((element) => {
                  return (
                    <MoviesCard
                      image_url={element.image_url}
                      title={element.title}
                      overview={element.overview}
                      average_votes={element.average_votes}
                      total_votes={element.total_votes}
                      popularity={element.popularity}
                      released_on={element.released_on}
                    />
                  );
                })}
              </Row>
            </Container>
          </div>
        )}
        <ErrorModal
          handleModalShow={this.handleModalShow}
          errorMessage={this.state.errorMessage}
          ModalShow={this.state.ModalShow}
        />
      </div>
    );
  }
}

export default App;
