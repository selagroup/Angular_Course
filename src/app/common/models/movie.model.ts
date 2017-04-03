export default class Movie{
    constructor(public id: number = 0,
                public title: string ='',
                public poster: string ='',
                public year: number =0,
                public releaseDate: Date = null,
                public genres :string[]=[]){}
}
