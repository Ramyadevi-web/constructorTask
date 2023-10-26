class Movie{
    constructor(title,studio,rating="PG"){
      this.title = title;
      this.studio = studio;
      this.rating = rating;
      console.log(`${this.title},${this.studio},${this.rating}`);
    }
  }
 function getPG(arr){
    let pgrate = [];
 for(let ele of arr){
       if(ele.rating == "PG"){
        pgrate.push(ele);
       }
 }
 console.log(pgrate);
}
const m1 = new Movie("Leo","Seven Screen Studio","PG1");
const m2 = new Movie("Thuppaki","V Creations","R23");
const m3 = new Movie("Mersal","Thenandal Studio Limited");
const m4 = new Movie("Casino Royale","Eon Productions","PG13");

let arrInstance = [m1,m2,m3,m4];

getPG(arrInstance);
    