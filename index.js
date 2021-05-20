

function User(first, last, age, email, isMail, isSubscribed =  false) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.email = email;
  this.isMail = isMail;
  this.isSubscribed = isSubscribed;

}

function getFullName(){
  this.getFullName =  function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
}

User.prototype = new getFullName();

function createRandomUsers(amount = 1) {
   const  db = [];
   for(let i = 0; i < amount; i++) {
     const user = new User(
       `Name${i}`,//fName
       `Surname${i}`,//lName
       Math.ceil(Math.random() * 100), //age
       `email${i}@gmail.com`,//email
       Math.random > 0.5 //isMale
     );
     db.push(user);
   }
   return db;
}
 const users = createRandomUsers(20);
 console.table(users);
 
 //Получить массив имен с помощью map
 const names =  users.map(function(user) {
    return user.getFullName();
 })
 console.log(names);
