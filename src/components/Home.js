import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../store/actions";

class Home extends Component {
  state = {
    searchValue: ""
  };

  componentDidMount() {
    this.props.dispatch(fetchCharacters());
    this.setState({ results: this.props.characters });
  }

  inputHandler = ev => {
    if (ev.target.value > 30) return;
    this.setState({ searchValue: ev.target.value });
  };

  render() {
    const {
      characters,
      charactersLoading,
      charactersLoadingError
    } = this.props;

    let results;
    if (characters) {
      results = this.state.searchValue
        ? characters.filter(item =>
            item.name
              .toUpperCase()
              .includes(this.state.searchValue.toUpperCase())
          )
        : characters;
    }

    return (
      <>
        <header className="header">
          <div className="container">
            <input
              type="text"
              className="input"
              onChange={this.inputHandler}
              placeholder="Search"
              disabled={!results}
            />
          </div>
        </header>
        <div className="container container-main">
          {charactersLoading && <div className="flex-center">Loading...</div>}
          {charactersLoadingError && <div className="flex-center">Error</div>}

          {results && results.length
            ? results.map((item, index) => {
                let url = item.url.split("/");
                url = url[url.length - 2];

                return (
                  <Link
                    to={`/character/${url}`}
                    key={index}
                    className="character"
                  >
                    {item.name}
                  </Link>
                );
              })
            : !charactersLoading && (
                <div className="center">No characters found</div>
              )}
        </div>
      </>
    );
  }
}

export default connect(state => {
  const { characters, charactersLoading, charactersLoadingError } = state;

  return {
    characters,
    charactersLoading,
    charactersLoadingError
  };
})(Home);
