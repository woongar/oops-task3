class Book {
    bookName;
    writerName;
    borrowOption;
    constructor(bookName, writerName, borrowOption) {
        this.bookName = bookName;
        this.writerName = writerName;
        this.borrowOption = borrowOption;
        this.books =[];
    }
    addBook(bookName) {
        if(this.borrowOption == true) {
            console.log("you can borrow: " + " " + this.bookName)
        } else if(this.borrowOption == false) {
            console.log("you cant borrow that book: " + this.bookName);
        }
        this.books.push(bookName)
    }
}

class User {
    constructor(firstName, lastName, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
        console.log(user);
    }
}

class Borrow extends User {
    constructor(firstName, lastName, city) {
        super(firstName, lastName, city)
    }
    addUser();
}

let user1 = new User("Avi", "Cohen", "Gedera");
let user2 = new User("Tali", "Levi", "Hulon");

let book1 = new Book("The house", "Gobi", true);
let book2 = new Book("The man", "Ron", false);

book1.addBook();
book2.addBook()

user1.addBook();
// console.log(user1)