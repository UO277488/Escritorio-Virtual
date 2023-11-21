class Memoria {
    INIT = "init";
    FLIP = "flip";
    REVEALED = "revealed";
    INITTEXT = "Tarjeta de memoria";

    constructor(){
        this.elements = [
            {
                "element": "html5",
                "source": "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            },
            {
                "element": "html5",
                "source": "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            },
            {
                "element": "css3",
                "source": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            },
            {
                "element": "css3",
                "source": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            },
            {
                "element": "js",
                "source": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
            },
            {
                "element": "js",
                "source": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
            },
            {
                "element": "php",
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
            },
            {
                "element": "php",
                "source": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
            },
            {
                "element": "svg",
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg"
            },
            {
                "element": "svg",
                "source": "https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg"
            },
            {
                "element": "w3c",
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/5e/W3C_icon.svg"
            },
            {
                "element": "w3c",
                "source": "https://upload.wikimedia.org/wikipedia/commons/5/5e/W3C_icon.svg"
            }
        ];
        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = null;
        this.secondCard = null;
        this.shuffleElements();
        this.createElements();
        this.addEventListeners();
    }

    shuffleElements(){
        for (let i = this.elements.length-1; i>0; i--){
          let j = Math.floor(Math.random() * (i + 1));
          let temp = this.elements[i];
          this.elements[i] = this.elements[j];
          this.elements[j] = temp;
        }
    }

    createElements(){
        let parent = document.getElementsByTagName("section")[1];
        for (let i = 0; i < this.elements.length; i++){
            let element = this.elements[i];
            let child = document.createElement("article");
            child.setAttribute("data-element", element.element);
            child.setAttribute("data-state", this.INIT);
            let h3 = document.createElement("h3");
            h3.textContent = this.INITTEXT;
            child.appendChild(h3);
            let img = document.createElement("img");
            img.setAttribute("src", element.source);
            img.setAttribute("alt", element.element);
            child.appendChild(img);
            parent.appendChild(child);
        }
    }

    unflipCards(){
        this.lockBoard = true;
        setTimeout(() => {
            this.firstCard.dataset.state = this.INIT;
            this.secondCard.dataset.state = this.INIT;
            this.resetBoard();
        }, 1500);
        
        console.log("try again!");
    }

    resetBoard(){
        this.firstCard = null;
        this.secondCard = null;
        this.hasFlippedCard = false;
        this.lockBoard = false;
    }

    checkForMatch(){
        this.firstCard.isEqualNode(this.secondCard) ? this.disableCards() : this.unflipCards();
    }

    disableCards(){
        this.firstCard.dataset.state = this.REVEALED;
        this.secondCard.dataset.state = this.REVEALED;
        this.resetBoard();
        console.log("revealed!");
    }

    addEventListeners(){
        let cards = document.getElementsByTagName("article");
        for (let i = 0; i < cards.length; i++){
            let card = cards[i];
            card.addEventListener("click", this.flipCard.bind(card, this));
        }
    }

    flipCard(game){
        console.log("flipCard: " + this.dataset.state);
        if (this.dataset.state === game.REVEALED) return;        
        if (game.lockBoard) return;
        if (this === game.firstCard) return;

        this.dataset.state = game.FLIP;
        if (game.hasFlippedCard){
            game.secondCard = this;
            game.checkForMatch();
        } else {
            game.hasFlippedCard = true;
            game.firstCard = this;
        }
    }

}
var m = new Memoria();