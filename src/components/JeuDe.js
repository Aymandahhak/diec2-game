import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    // Generate a random value between 1 and 6
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === this.props.cache // Check if the value matches the hidden value
    }));
  }

  getImage() {
    // Returns the image path based on the dice face value
    return this.state.face ? `images/face${this.state.face}.png` : "images/Dé.PNG";
  }

  initialiser() {
    // Reset the game state
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const styleImage = { width: "60px", height: "60px" };

    return (
      <div>
        <h1>Jeu de Dé...</h1>
        <img src={this.getImage()} style={styleImage} alt="face" />
        <h2>Face: {this.state.face || "-"}</h2>
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Jouer</button>
        {this.state.fin && <p>Bravo vous avez trouvé la face cachée!</p>}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
