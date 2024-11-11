const livres = [
    { titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", pages: 1178, prix: 25.99 },
    { titre: "Harry Potter à l'école des sorciers", auteur: "J.K. Rowling", pages: 320, prix: 12.5 },
    { titre: "1984", auteur: "George Orwell", pages: 328, prix: 9.99 }, 
    { titre: "L'Alchimiste", auteur: "Paulo Coelho", pages: 224, prix: 15.0 }, 
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", pages: 96, prix: 7.0 }
];

const livreLePlusCher = livres.reduce((acc, livre) => {
  
    return (livre.prix * livre.pages > acc.prix * acc.pages) ? livre : acc;
});

console.log("Titre du livre le plus cher:", livreLePlusCher.titre);
