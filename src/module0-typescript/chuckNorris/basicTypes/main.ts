
const apiBaseUrl = 'https://api.icndb.com';

class JokeModel{

  constructor(public id, public text){}

}


document.addEventListener('DOMContentLoaded', () => {

  const btnFetch = document.querySelector('.btnFetch');
  const input = document.querySelector('input');


  btnFetch.addEventListener('click',() => {

    let jokeCount = input.value;
    fetch(`${apiBaseUrl}/jokes/random/${jokeCount}`)
      .then((res: Response) => res.json())
      .then(data => parseResponse(data))
      .then(jokes => renderJokes(jokes));

  });




});

function renderJokes(jokes: JokeModel[]){
  const jokeContainer = document.querySelector('.jokesList');

  let jokeElements = jokes.map((item) => {
    const jokeItem = document.createElement('li');
    jokeItem.innerHTML = item.text;
    return jokeItem;
  });

  jokeElements.forEach(elm => jokeContainer.appendChild(elm));

}

function parseResponse(response): JokeModel[] {
  let jokes: JokeModel[];

  if(response.type === 'success'){
    jokes = response.value.map((item) => new JokeModel(item.id,item.joke));
  }


  return jokes;


}


