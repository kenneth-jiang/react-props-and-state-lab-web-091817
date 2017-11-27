import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  handleOnChangeType = (type) => {
    this.setState((prevState) => {
      return {
        filters: (prevState.filters, {
          type: type,
        })
      }
    });
  }

  handleOnFindPetsClick = () => {
    let url = "/api/pets";

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch (url)
      .then(resp => resp.json())
      .then(json => this.setState({pets: Object.assign({}, json)}))
  }

  handleOnAdoptPet = (petId) => {
    this.setState((prevState) => {
      return {
        adoptedPets: [...prevState.adoptedPets, petId]
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                filters={this.state.filters}
                onChangeType={this.handleOnChangeType}
                onFindPetsClick={this.handleOnFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleOnAdoptPet}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
