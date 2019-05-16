import React from "react";
import { connect } from "react-redux";
import { fetchCharacters } from '../actions';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading yo' space peeps...</div>
    } if (this.props.error) {
      return <div>{this.props.error}</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => ({
  characters: charsReducer.characters,
  fetching: charsReducer.fetching,
  error: charsReducer.error
});

export default connect(mapStateToProps, { fetchCharacters })(CharacterListView);
