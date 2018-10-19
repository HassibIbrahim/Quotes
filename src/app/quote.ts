export class Quote {
    public showInfo:boolean;
    constructor(public id:number,public name:string,public author:string,public uploader:string,public like:number,public dislike:number,public submitDate:Date){
        this.showInfo=false
    }
}
