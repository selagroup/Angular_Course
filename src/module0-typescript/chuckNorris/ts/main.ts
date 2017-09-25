const apiUrl: string = 'https://api.icndb.com';

type JokeAPIResponseType = "sucess" | "error";

interface IjokesResponse {
    type: JokeAPIResponseType,
    value: JokeModel[]
}

class JokeModel{
  constructor(public id: number, public joke: string){}
}

class JokesService{

  constructor(private apiUrl: string){  }

  async getJokes(count: number = 3): Promise<JokeModel[]>{
     let response = await fetch(`${this.apiUrl}/jokes/random/${count}`)
      let data = await response.json();
      return  parseResponse(data);
  }

}

document.addEventListener('DOMContentLoaded',() => {


      const btn:Element = document.querySelector('.btnFetch');
      const input = document.querySelector('input');

      const service = new JokesService(apiUrl);

      bindEvent(btn,'click',()=>{

      const count = parseInt(input.value);
        renderJokes( service.getJokes(count));
      });
  }());


});
type myEvent = "click" | "mousemove";

function bindEvent(elem:Element, event:myEvent, cb ){
    elem.addEventListener(event,cb);
}

function parseResponse(data: IjokesResponse):JokeModel[] {
  return  data.value.map(item => new JokeModel(item.id,item.joke));
}

function renderJokes(jokes:JokeModel[]):void{
  const jokeContainer = document.querySelector('.jokesList');

  let jokeElements = jokes.map((item) => {
    const jokeItem = document.createElement('li');
    jokeItem.innerHTML = item.joke;
    return jokeItem;
  });

  jokeElements.forEach(elm => jokeContainer.appendChild(elm));

}
