const board = document.getElementById("book-board");
let flippedCards = [];
let matchedCards = 0;
let lockBoard = false;

const values = [
    {
        summary: "The Stand is a post-apocalyptic novel that explores the aftermath of a deadly pandemic. A weaponized strain of influenza, nicknamed \"Captain Trips,\" wipes out most of the world's population, leaving only a handful of survivors. These survivors gradually form two opposing factions. One led by the benevolent Mother Abagail, and the other by the sinister Randall Flagg, a recurring villain in King's works. As tensions rise, the two groups prepare for an inevitable clash between good and evil.",
        image: "thestand.png"
    },
    {
        summary: "Set in the medieval kingdom of Delain, the story follows the power struggle between Prince Peter, the rightful heir to the throne, and the sinister magician Flagg, who manipulates events to seize control.",
        image: "dragoneyes.png"

    },
    {
        summary: "This 1984 fantasy novel co-written by Stephen King and Peter Straub follows Jack Sawyer, a 12-year-old boy who embarks on a perilous journey across America—and through a parallel world called the Territories—to find a mystical artifact known as the Talisman, which can save his dying mother",
        image: "talisman.jpg"

    },
    {
        summary: "This horror story follows Ben Mears, a writer who returns to his childhood town of Jerusalem’s Lot in Maine, hoping to confront his past and write a book about the eerie Marsten House. However, he soon discovers that the town’s residents are mysteriously disappearing—and turning into vampires. The novel explores themes of small-town isolation, fear, and the spread of evil, drawing inspiration from Dracula.",
        image: "salemslot.png"

    },
    {
        summary: "The Mist is a psychological horror novella that follows David Drayton, a commercial artist living in Bridgton, Maine, who, along with his young son Billy, becomes trapped in a supermarket when a mysterious, dense mist rolls into town. The mist conceals terrifying, otherworldly creatures, leading to panic and chaos among the survivors. The novella explores themes of human nature, paranoia, and survival, showing how people react under extreme pressure.",
        image: "themist.png"

    },
    {
        summary: "IT is a horror novel that follows seven childhood friends, known as The Losers' Club, who face off against a malevolent entity that lurks beneath their hometown of Derry, Maine. This entity, often appearing as Pennywise the Dancing Clown, feeds on fear and terrorizes the town’s children.",
        image: "it.png"

    },
    {
        summary: "Insomnia is a horror-fantasy novel that follows Ralph Roberts, a retired widower in Derry, Maine, who begins suffering from severe insomnia. As his sleeplessness worsens, he starts seeing auras around people and strange, diminutive beings known as \"little bald doctors\".",
        image: "insomnia.png"

    },
    {
        summary: "Rose Madder is a psychological thriller that follows Rosie Daniels, a woman trapped in an abusive marriage to Norman Daniels, a violent and obsessive police officer. After enduring years of torment, Rosie finally escapes, fleeing to a new city where she begins rebuilding her life. As she starts over, she discovers a mysterious painting of a woman in a rose madder gown that seems to possess supernatural qualities, allowing Rosie to step into another world.",
        image: "rosemdder.png"

    },
    {
        summary: "Desperation is a horror novel that follows a group of travelers who are abducted while driving through the desolate town of Desperation, Nevada, by the town’s sinister sheriff, Collie Entragian. However, they soon realize that Entragian is possessed by an ancient, malevolent entity known as Tak, which has the ability to control desert wildlife and jump between human hosts.",
        image: "desperation.png"

    },
    {
        summary: "The Regulators serves as a parallel story to Desperation, featuring many of the same characters but in an alternate reality.Set in the quiet suburban town of Wentworth, Ohio, the novel begins with a sudden, violent attack—mysterious vans appear on Poplar Street, unleashing gunfire and chaos.The residents soon realize that the force behind the terror is Tak, an ancient, malevolent entity that has possessed Seth Garin, an autistic boy with extraordinary mental strength.As Tak warps reality, transforming the neighborhood into a surreal, Western- themed battleground, the survivors must fight to reclaim their world.",
        image: "regulators.png"

    },
    {
        
        summary: "\"Everything's Eventual\" is a short story that follows Dinky Earnshaw, a 19-year-old high school dropout who discovers he has a unique ability—he can influence people’s thoughts and actions by drawing intricate designs. After using this power to drive a bully to suicide, Dinky is recruited by Trans Corporation, an organization that hires people with special talents. His job? Sending digital designs via email to specific targets, unknowingly causing their deaths.",
        image: "everythingseventual.png"

    },
    {
        
        summary: "The Little Sisters of Eluria is a fantasy-horror novella that follows Roland as he arrives in the deserted town of Eluria, where he encounters a strange group of nuns, known as the Little Sisters, who claim to heal the wounded using insect-like creatures called \"doctors.\" However, Roland soon realizes that the Sisters are actually vampires, feeding on those they nurse back to health. His only protection is a mysterious medallion he took from a corpse before being captured.",
        image: "littlesisters.png"

    },
    {
        
        summary: "\"Low Men in Yellow Coats\" is the first and longest story in Hearts in Atlantis. Set in 1960, it follows Bobby Garfield, an 11-year-old boy living in Harwich, Connecticut, with his widowed mother. Bobby befriends Ted Brautigan, a mysterious older man who rents a room in their house. Ted possesses psychic abilities and warns Bobby about the Low Men, sinister figures hunting him.",
        image: "yellowcoats.png"

    },
    {
        
        summary: "Black House is a horror-fantasy novel and sequel to <The Talisman. The story follows Jack Sawyer, now a retired Los Angeles homicide detective, who has repressed memories of his childhood journey through The Territories. Jack is drawn back into supernatural events when a serial killer known as \"The Fisherman\" begins targeting children in French Landing, Wisconsin.",
        image: "blackhouse.png"

    }

];
let cards = [];


function itterate(array) {
    for (let i = array.length - 1; i > 0; i--) {
    }
    return array;
}

function createBoard() {
    board.innerHTML = "";
    flippedCards = [];
    matchedCards = 0;
    lockBoard = false;

    cards = itterate(values.slice());

    cards.forEach(({ summary, image }) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.summary = summary;

        card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${image}" class="card-img" />
      </div>
      <div class="card-back">${summary}</div>
    </div>
  `;

        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        board.appendChild(card);
    });
    

}

createBoard(); // initialize on load
