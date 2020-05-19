class Person {
    constructor
   (name, health, nameArray){
    this
   .name = name;
    this
   .health = health;
    }
    increaseHealth(){
    this
   .health++;
    }

    decreaseHealth(){
        this
       .health--;
     }  
}


   const ann = new Person
   ("Ann", 100);
   module.exports = {
    Person,
    ann,
 }

//  let testNames = ["Raeesa", "khadeejah"];
