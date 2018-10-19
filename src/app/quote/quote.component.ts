import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes'

  quotes=[
    new Quote(1,"You should be trading","CueBanks","Hassib Ibrahim",0,0,new Date(2018,10,7)),
    new Quote(2,"You gotta speculate to accumalate","Lamar Davis","Yang Gwala",0,0,new Date(2018,10,8)),
    new Quote(3,"No idea is original, there's nothing new under the sun, it's never what you do, but how it's done","Nasir Ole Dara","Shabbaman",0,0,new Date(2018,10,9)),
    new Quote(4,"You wanna hate me, then hate me; what can I do But keep getting money? Funny, I was just like you I had to hustle hard, never give up, until I made it Now you all saying Thats a clever nigga, nothing to play with.","Escobar","Shabbaman",0,0,new Date(2018,10,7))
  ]
  toogleDetails(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  deleteQuote(isDelete,index){
    if(isDelete){
      this.quotes.splice(index,1);
    }
  }
  likeQuote(index){
    this.quotes[index].like++;
  }
  dislikeQuotes(index){
    this.quotes[index].dislike++;
  }
  addNewQuote (quote){
    let quoteLength= this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
