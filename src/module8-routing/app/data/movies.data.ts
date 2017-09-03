import {InMemoryDbService} from "angular-in-memory-web-api";
import {MOVIES} from "../mocks/movies.mock";

export class MoviesDb implements InMemoryDbService{

   createDb() {
     return {
       movies: [...MOVIES]
     };
   }
}
