console.log("This is my index.js file");
// 3d942bc684d342aeb65343186fe6c108
// https://newsapi.org/v2/top-headlines/sources?apiKey=3d942bc684d342aeb65343186fe6c108

// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '3d942bc684d342aeb65343186fe6c108';

// Grab the news container
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)

let newsList = document.getElementById("newsList");

//// What to do when response is ready
xhr.onload=function(){
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(json);
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let source;
            if (element['author'] == null){
                source = "Unknown"
            }
            else{
                source=element['author'];
            }
            // console.log(source);
            let news = `<div class="card my-2 mx-2" style="width: 18rem; box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);">
                            <a href="${element['url']}" target="_blank" >
                                <img src="${element['urlToImage']}" class="card-img-top" alt="image">
                            </a>
                            <div class="card-body">
                                <a href="${element['url']}" target="_blank" >
                                    <h5 class="card-title" style="color: black; text-decoration: none;">${element["title"]}</h5>                               
                                </a>
                                <p class="card-text">
                                    ${element["description"]}
                                </p>
                                <a href="${element['url']}" target="_blank" >Read more here</a>                                
                                <div>
                                    <b>${source}</b>
                                </div>
                            </div>
                        </div>`;    
            newsHtml += news;
        })
        newsList.innerHTML=newsHtml;
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send();