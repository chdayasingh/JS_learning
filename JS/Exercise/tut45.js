console.log("This is tut45.js")

const myJson = `{
    "word": "healthy",
    "results": [
      {
        "definition": "promoting health; healthful",
        "partOfSpeech": "adjective",
        "synonyms": [
          "good for you",
          "salubrious"
        ],
        "similarTo": [
          "wholesome"
        ],
        "examples": [
          "a healthy diet",
          "clean healthy air",
          "plenty of healthy sleep",
          "healthy and normal outlets for youthful energy"
        ]
      },
      {
        "definition": "large in amount or extent or degree",
        "partOfSpeech": "adjective",
        "synonyms": [
          "goodish",
          "goodly",
          "hefty",
          "respectable",
          "sizable",
          "sizeable",
          "tidy"
        ],
        "similarTo": [
          "considerable"
        ]
      },
      {
        "definition": "exercising or showing good judgment",
        "partOfSpeech": "adjective",
        "synonyms": [
          "intelligent",
          "level-headed",
          "levelheaded",
          "sound"
        ],
        "similarTo": [
          "reasonable",
          "sensible"
        ],
        "examples": [
          "healthy scepticism",
          "a healthy fear of rattlesnakes",
          "the healthy attitude of French laws",
          "healthy relations between labor and management"
        ]
      },
      {
        "definition": "financially secure and functioning well",
        "partOfSpeech": "adjective",
        "similarTo": [
          "sound"
        ],
        "examples": [
          "a healthy economy"
        ]
      },
      {
        "definition": "having or indicating good health in body or mind; free from infirmity or disease",
        "partOfSpeech": "adjective",
        "also": [
          "well",
          "wholesome",
          "fit",
          "robust"
        ],
        "attribute": [
          "wellness",
          "health"
        ],
        "similarTo": [
          "hearty",
          "lusty",
          "red-blooded",
          "rock-loving",
          "rose-cheeked",
          "rosy",
          "rosy-cheeked",
          "rubicund",
          "ruddy",
          "sanguine",
          "sound",
          "sun-loving",
          "water-loving",
          "well-preserved",
          "whole",
          "wholesome",
          "anicteric",
          "bouncing",
          "firm",
          "florid",
          "flushed",
          "full-blooded",
          "good",
          "hale"
        ],
        "antonyms": [
          "unhealthy"
        ],
        "derivation": [
          "health",
          "healthiness"
        ],
        "examples": [
          "a rosy healthy baby",
          "staying fit and healthy"
        ]
      }
    ],
    "syllables": {
      "count": 2,
      "list": [
        "health",
        "y"
      ]
    },
    "pronunciation": {
      "all": "'hɛlθi"
    },
    "frequency": 4.45
  }`

const myObj = JSON.parse(myJson);
console.log('The object is  :', myObj);

let meanings = document.getElementById('meanings')
meanings.addEventListener('click', ()=>{
    // console.log('someone clicked meanings');
    populate();
})

function populate() {
    let results = myObj['results'];
    let html ="<h3>Definations : </h3>";
    results.forEach(element => {
        html += `<li class="list-group-item">${element.definition}</li>`
    });
    let defs = document.getElementById('defs');
    defs.innerHTML = html;
}