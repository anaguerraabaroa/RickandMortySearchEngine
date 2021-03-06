import React from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  //render icons on character detail card
  const renderIconSpecies = () => {
    if (props.foundCharacter.species === "Human") {
      return <i className="card__details--icon fas fa-male"></i>;
    } else if (props.foundCharacter.species === "Alien") {
      return <i className="card__details--icon fab fa-reddit-alien"></i>;
    } else if (props.foundCharacter.species === "unknown") {
      return <i className="card__details--icon fas fa-question"></i>;
    }
  };

  const renderIconStatus = () => {
    if (props.foundCharacter.status === "Alive") {
      return <i className="card__details--icon fas fa-heartbeat"></i>;
    } else if (props.foundCharacter.status === "Dead") {
      return <i className="card__details--icon fas fa-skull-crossbones"></i>;
    } else if (props.foundCharacter.status === "unknown") {
      return <i className="card__details--icon fas fa-question"></i>;
    }
  };

  return (
    <section className="card">
      <article className="card__details">
        <img
          src={props.foundCharacter.image}
          title={props.foundCharacter.name}
          alt={props.foundCharacter.name}
          className="card__details--img"
        />
        <div className="card__details--wrapper">
          <h2 className="card__details--name">{props.foundCharacter.name}</h2>
          <ul className="card__details--list">
            <li className="details__list--item">
              <span className="details__title">Planet:</span>
              {props.foundCharacter.origin.name}
            </li>
            <li className="details__list--item">
              <span className="details__title">Species:</span>
              {renderIconSpecies()}
            </li>
            <li className="details__list--item">
              <span className="details__title">Status:</span>
              {renderIconStatus()}
            </li>
            <li className="details__list--item">
              <span className="details__title">Episodes:</span>
              {props.foundCharacter.episode.length}
            </li>
          </ul>
          <Link
            to="/"
            className="card__details--link"
            title="Back to character list"
          >
            Return
          </Link>
        </div>
      </article>
    </section>
  );
};

// control data
CharacterDetail.propTypes = {
  foundCharacter: PropTypes.object.isRequired,
};

export default CharacterDetail;
