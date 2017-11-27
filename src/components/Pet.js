import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  whatIsTheGender(props) {
    return (this.props.pet.gender === "male" ? "♂" : "♀");
  }

  isPetAdopted() {
    return (this.props.isAdopted ?
      <button className="ui disabled button">Already adopted</button> :
      <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    )
  }

  adoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">

        <div className="content">
          <a className="header">
            <p>Pet name: {this.props.pet.name}</p>
            <p>Pet Gender: {this.whatIsTheGender()}</p>
          </a>

          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>

          <div className="description">
            <p>Age: {this.props.pet.age}< /p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>

        <div className="extra content">
          {this.isPetAdopted()}
        </div>
      </div>
    );
  }
}

export default Pet;
