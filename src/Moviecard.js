import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component.
    */
    const {usersWhoLikedMovie, movieInfo } = this.props;

    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>

        {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            { usersWhoLikedMovie.map(userList => {
                return (
                  <li key={userList}>
                    <p>{userList}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    );
  }
}

export default MovieCard;