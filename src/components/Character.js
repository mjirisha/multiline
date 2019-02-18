import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacter } from "../store/actions";

class Character extends Component {
  componentDidMount() {
    let id = window.location.pathname.split("/");
    id = id[id.length - 1] ? id[id.length - 1] : id[id.length - 2];

    this.props.dispatch(fetchCharacter(id));
  }

  render() {
    const { character, characterLoading, characterLoadingError } = this.props;

    return (
      <div className="container container-single">
        {characterLoading ? (
          <div className="center">Loading...</div>
        ) : character ? (
          <div className="character character-single">
            <div>Character's Name: {character.name}</div>
            <div>Character's Gender: {character.gender}</div>
          </div>
        ) : (
          <div className="center">Not Found</div>
        )}
        {characterLoadingError && <div className="center">Error</div>}
      </div>
    );
  }
}

export default connect(state => {
  const { character, characterLoading, characterLoadingError } = state;
console.log(state)
  return {
    character,
    characterLoading,
    characterLoadingError
  };
})(Character);
