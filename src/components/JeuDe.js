import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with face (null), compteur (0 for attempts), and fin (false, to track if the game is over)
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    // Generate a random value between 1 and 6 for the dice face
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur, // Set the new face value
      compteur: prevState.compteur + 1, // Increment the attempt counter
      fin: valeur === this.props.cache // Check if the rolled value matches the hidden value
    }));
  }

  getImage() {
    // Returns the appropriate image path based on the current dice face
    return this.state.face ? `images/face${this.state.face}.PNG` : "images/Dé.PNG";
    // If a face is rolled, return the corresponding dice face image; otherwise, return a default image
  }

  initialiser() {
    // Reset the game state to its initial values
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const styleImage = { width: "60px", height: "60px" };

    return (
      <div>
        <h1>Jeu de Dé...</h1>
        {/* Display the dice image */}
        <img src={this.getImage()} style={styleImage} alt="face" />
        {/* Display the current face value or a placeholder "-" */}
        <h2>Face: {this.state.face || "-"}</h2>
        {/* Display the number of attempts made */}
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        {/* Button to roll the dice */}
        <button onClick={() => this.jouer()}>Jouer</button>
        {/* Display a success message if the game is won */}
        {this.state.fin && <p>Bravo vous avez trouvé la face cachée!</p>}
        {/* Button to reset the game */}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
