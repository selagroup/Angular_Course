export class Task{

    id:number;
    title:string;
    completed:boolean;

    constructor(title:string,completed:boolean=false){
        this.title=title;
        this.completed=completed;
    }
}