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
    };
  }

  OnChangeOfLocationName = (event) => {
    this.setState({ NameOfLocation: event.target.value });
  };

  OnSubmitOfLocationName = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.NameOfLocation}&format=json`;

    const response = await axios.get(url);
    console.log(response.data[0]);
    this.setState({
      DataOfLocation: response.data[0],
    });
  };

  render() {
    return (
      <div>
        <LocationCard DataOfLocation={this.state.DataOfLocation} />
        <DataForm
          OnChangeOfLocationName={this.OnChangeOfLocationName}
          OnSubmitOfLocationName={this.OnSubmitOfLocationName}
        />
      </div>
    );
  }
}

export default App;
