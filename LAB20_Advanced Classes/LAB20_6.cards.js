function main() {
    return (function main() {
        const validFaces = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K",
            "A",
        ];
        const Suits = {
            SPADES: "♠",
            HEARTS: "♥",
            DIAMONDS: "♦",
            CLUBS: "♣",
        };
        // console.log("Suit object values: ", Object.values(Suits));
        class Card {
            constructor(face, suit) {
                // Check to see if face valid
                if (validFaces.includes(face)) {
                    this._face = face;
                } else {
                    console.log("Error");
                }
                // argument passed into does exist in our suits object
                if (Object.values(Suits).includes(suit)) {
                    this._suits = suit;
                } else {
                    console.log("Error");
                }
            }
            // getter for face
            get face() {
                return this._face;
            }
            // setter for face
            set face(newFace) {
                if (validFaces.includes(newFace)) {
                    this._face = newFace;
                } else {
                    console.log("Error");
                }
            }

            // getter for suits
            get suits() {
                return this._suits;
            }

            // setter for suits
            set suits(newSuit) {
                if (Object.values(Suits).includes(newSuit)) {
                    this._suits = newSuit;
                } else {
                    console.log("Error");
                }
            }
        }

        return {
            Suits: Suits,
            Card: Card,
        };

    })(); // Without the IIFE, I have no immediate access to Suits or Card
}

let result = main();
// console.log('Main is', result); gives Object and class
let Card = result.Card;
let Suits = result.Suits;
// console.log("Card is the object factory ", result.Card); // gives class
// console.log("The suits ", result.Suits); // Gives object
let card = new Card("Q", Suits.CLUBS);
console.log(card);
card.face = "A";
console.log(card);
card.suits = Suits.DIAMONDS; // Hello setter !
console.log(card);
let card2 = new Card("1", Suits.DIAMONDS);
// card._face = 'Bee'; Notice these two set the card
// console.log(card.face, card._face); // this will print what the card was set to
// let card3 = new Card('5', Suits.BEE); // But once you try to make a new card, this will throw an Error


// Card { _face: 'Q', _suits: '♣' } // Note the keys have underscores. without underscore, causes stack overflow
// Card { _face: 'A', _suits: '♣' }
// Card { _face: 'A', _suits: '♦' }
// Error