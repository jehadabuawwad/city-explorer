import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React from 'react';
import DataForm from './components/DataForm';
import WeatherDAY from './components/WeatherDay';
import Movie from './components/Movie';
import ErrorModal from './components/ErrorModal';

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
      await axios.get(url1).then((locationResponse) => {
        this.setState({ latAndLonData: locationResponse.data[0] });

        const url2 = `${process.env.REACT_APP_SERVER_URL}/weather?city_name=${this.state.NameOfLocation}&lat=${this.state.latAndLonData.lat}&lon=${this.state.latAndLonData.lon}`;
        axios.get(url2).then((weatherResponse) => {
          this.setState({ WeatherData: weatherResponse.data[0] });

          const url3 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&zoom=15&center=[${this.state.latAndLonData.lat},${this.state.latAndLonData.lon}]&format=jpg`;
          axios.get(url3).then((mapResponse) => {
            this.setState({ MapOfLocation: mapResponse.request.responseURL });
          });
        });
      });

      const url4 = `${process.env.REACT_APP_SERVER_URL}/movies?city_name=${this.state.NameOfLocation}`;
      await axios.get(url4).then((moviesResopnse) => {
        this.setState({ MoviesData: moviesResopnse.data });
      });

      this.setState({ ShowDetails: !this.state.ShowDetails });
    } catch (error) {
      console.log(error);
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
        <Container>
          <Row style={{ marginTop: 5 }} xs={1} md={1} className='g-4'>
            <DataForm
              OnChangeOfLocationName={this.OnChangeOfLocationName}
              OnSubmitOfLocationName={this.OnSubmitOfLocationName}
            />
          </Row>
        </Container>

        {this.state.ShowDetails && (
          <div>
            <Container>
              <WeatherDAY
                NameOfLocation={this.state.NameOfLocation}
                MapOfLocation={this.state.MapOfLocation}
                atAndLonData={this.state.latAndLonData}
                WeatherData={this.state.WeatherData}
              />
              <Row xs='auto' md={2}>
                {this.state.MoviesData.map((element) => {
                  return (
                    <Movie
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
