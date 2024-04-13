class Concentration
{
 constructor(){
    this.imagePath = 'Cards/';
    // an array that stores the images for each card
    this.images = Array(19).fill(null);
    // the index of the first card picked by the user
    this.firstPick = -1;
    // the index of the second card picked by the user
    this.secondPick = -1;
    // statistics about this "round"
    this.matches = 0;
    this.tries = 0;

    this.showMatches=this.showMatches.bind(this);
    this.enableAllRemainingCards=this.enableAllCards.bind(this);
    this.enableAllRemainingCards=this.enableAllRemainingCards.bind(this);
    this.checkCards=this.checkCards.bind(this);
    this.disableAllCards=this.disableAllCards.bind(this);
    this.isMatch=this.isMatch.bind(this);
    this.init();

 }
 init()
 {
   
     this.fillImages();
    // this.shuffleImages();
     this.showMatches();
     this.enableAllCards();
     this.showAllBacks();

 }

 
 
 // shows the number of matches and tries in the status element on the page
 showMatches() {
     // update the element on the page to display the variable matches and tries
 }
 
 
 fillImages() {
     const  values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
     const suits = ['h', 's'];
     let  index=0;
     for(let  value=0; value<values.length; value++){
         for(let  suit=0; suit<suits.length; suit++){
             this.images[index]="card" +values[value]+ suits[suit]+ ".jpg";
             index++;
         }
     }
  
 }
 

 shuffleImages() {
    
    for(var i=0; i<images.length; i++){
         var rnd=Math.floor(Math.random()* images.length);
         var temp=images[i];
         images[i]=images[rnd];
         images[rnd]=temp; 
 
     } 
 }
 

 enableAllCards() {
 
     const  cards=document.getElementsByName("card");
     for (var i=0; i<cards.length; i++){
         cards[i].onclick=this.handleClick.bind(this, i);
         cards[i].style.cursor='pointer';
     }
 
 
 }
 
 enableAllRemainingCards() {
    
     var cards=document.getElementsByName("card");
     for (var i=0; i<cards.length; i++){
         if(cards[i].backgroundImage!='none')
         cards[i].onclick=handleClick;
         cards[i].style.cursor='pointer';
     }
 
 }
 
 

 showBack(index) {
         var backImage=imagePath+ 'black_back.jpg';
         var card=document.getElementById(index);
         card.style.backgroundImage='url('+ backImage + ')';
 
 }
 
 // shows the back for all cards
 // calls showBack in the body of a for loop
 showAllBacks() {
     let cards=document.getElementsByName("card");
     for (let i=0; i<cards.length; i++){
         showBack(i);
     }
   
 }

 

  handleClick(index) {
  // var index=this.id;
   var cardImage=imagePath+ images[index];
  
   this.style.backgroundImage='url('+ cardImage + ')';
    disableCard(index);
 
   
     // end if
     if (firstPick==-1){ 
         firstPick=index;
      
     }
     else{
         secondPick=index;
         disableAllCards();
         setTimeout(checkCards, 2000);
     }
 }
 
 // disable one card based on it's index
 disableCard(index) {
     var card = document.getElementById(index);
     card.onclick = () => {}; 
     card.style.cursor = 'none';
 }
 
 // disable all of the cards
 disableAllCards() {
     var cards=document.getElementsByName("card");
     for (var i=0; i<cards.length; i++){
         cards[i].onclick=handleClick;
         cards[i].style.cursor='pointer';
     }
 
 }

  checkCards() {
     tries++;
     if(isMatch()==true){
         matches++;
         removeCard(firstPick);
         removeCard(secondPick);
         if(matches<10){
             enableAllRemainingCards();
 
         }
         else{
             showBack(firstPick);
             showBack(secondPick);
             enableAllRemainingCards();
         }
 
     }
    
     showMatches();
     firstPick=-1;
     secondPick=-1;
 
 }
 

 isMatch() {
     if(images[firstPick].substr(4,1)==images[secondPick].substr(4,1))
     return true;
 else
     return false;
     
 }
 
removeCard(index) {
     var card = document.getElementById(index);
     card.style.backgroundImage='none';
 
 }

}

let concentration;
window.onload=()=>{concentration=new Concentration();}