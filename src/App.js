import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LocationCard from './components/LocationCard';
import DataForm from './components/DataForm';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NameOfLocation: '',
      DataOfLocation: {},
      MapOfLocation: '',
    };
  }

  OnChangeOfLocationName = (event) => {
    this.setState({ NameOfLocation: event.target.value });
  };

  OnSubmitOfLocationName = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.NameOfLocation}&format=json`;
    const response = await axios.get(url);
    this.setState({
      DataOfLocation: response.data[0],
    });
    const url2 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&zoom=15&center=${[this.state.DataOfLocation.lat, this.state.DataOfLocation.lon]}&format=jpg`;
    const response2 = await axios.get(url2);
    console.log(response2.request.responseURL);
    this.setState({
      MapOfLocation: response2.request.responseURL,
    });
  };


  render() {
    return (
      <div>
        <LocationCard
          DataOfLocation={this.state.DataOfLocation}
          MapOfLocation={this.state.MapOfLocation}
        />
        <DataForm
          OnChangeOfLocationName={this.OnChangeOfLocationName}
          OnSubmitOfLocationName={this.OnSubmitOfLocationName}
        />
      </div>
    );
  }
}

export default App;
