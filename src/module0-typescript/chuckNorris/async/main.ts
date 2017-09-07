
const apiBaseUrl = 'https://api.icndb.com';

type jokesResponseType = 'success' | 'error';


interface jokesResponse {

  type: jokesResponseType,
  value: JokeModel[] | JokeModel;
}

class JokeModel{

  constructor(public id, public joke){}

}

class JokesService {

  async getJokes(count: number = 3): Promise<JokeModel[]> {

    let response = await fetch(`${apiBaseUrl}/jokes/random/${count}`);
    let data = await response.json();
    return this.parseResponse(data);
  };


  private parseResponse(response): JokeModel[] {
    let jokes: JokeModel[];

    if (response.type === 'success'){
      jokes = response.value.map((item) => new JokeModel(item.id, item.joke));
    }

    return jokes;
  };


}

document.addEventListener('DOMContentLoaded', () => {

  const btnFetch = document.querySelector('.btnFetch');
  const input = document.querySelector('input');

  const service = new JokesService();

  btnFetch.addEventListener('click', () => {

    const jokeCount = parseInt(input.value);
    service.getJokes(jokeCount).then(renderJokes);

  });




});

function renderJokes(jokes: JokeModel[]){
  const jokeContainer = document.querySelector('.jokesList');

  const jokeElements = jokes.map((item) => {
    const jokeItem = document.createElement('li');
    jokeItem.innerHTML = item.joke;
    return jokeItem;
  });

  jokeElements.forEach(elm => jokeContainer.appendChild(elm));

}



