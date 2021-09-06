import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LocationCard from './components/LocationCard';
import DataForm from './components/DataForm';
import axios from 'axios';
import ErrorModal from './components/ErrorModal';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NameOfLocation: '',
      DataOfLocation: {},
      MapOfLocation: '',
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
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.NameOfLocation}&format=json`;
      const response = await axios.get(url);
      this.setState({DataOfLocation: response.data[0]});
      const url2 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&zoom=15&center=${[this.state.DataOfLocation.lat,this.state.DataOfLocation.lon,]}&format=jpg`;
      const response2 = await axios.get(url2);
      this.setState({ MapOfLocation: response2.request.responseURL });
      this.setState({ ShowDetails: !this.state.ShowDetails });
    } catch (error) {
      this.setState({
        errorMessage: error.message,
        ModalShow: true,
        ShowDetails: false,
      });
    }

    console.log(this.state.errorMessage);
  };
  render() {
    return (
      <div>
        {this.state.ShowDetails && (
          <LocationCard
            DataOfLocation={this.state.DataOfLocation}
            MapOfLocation={this.state.MapOfLocation}
          />
        )}

        <DataForm
          OnChangeOfLocationName={this.OnChangeOfLocationName}
          OnSubmitOfLocationName={this.OnSubmitOfLocationName}
        />
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
