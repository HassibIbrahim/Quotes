export class Quote {
    public showInfo:boolean;
    constructor(public id:number,public name:string,public author:string,public uploader:string,public likes:number,public dislikes:number,public submitDate:Date){
        this.showInfo=false
    }
}
