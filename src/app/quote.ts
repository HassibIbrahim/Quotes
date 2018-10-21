export class Quote {
    public showDetails:boolean;
    constructor(public id:number, public name:string, public author:string, public op:string, public upvotes:number, public downvotes:number, public submitDate:Date){
        this.showDetails=false
    }
}
