export class Movie {
  constructor(public id: number = 0,
              public title: string ='',
              public year: number =0,
              public poster: string ='',
              public releaseDate: Date = null,
              public genres :string[]=[]){}
}
