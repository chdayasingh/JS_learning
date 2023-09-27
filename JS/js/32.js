console.log("THIS IS EXERCISE");

class Library{
    constructor(bookList){
        this.bookList=bookList;
        this.issuedBooks={};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookName,user){
        if(this.issuedBooks[bookName]==undefined){
            this.issuedBooks[bookName]=user;
            return 'Book issued successfully'
        }
        else{
            console.log("This book is already issued")
        }
    }
    returnBook(bookName){
        delete this.issuedBooks[bookname];
    }
}

dayaLib = new Library(['Book1','Book2','Book3'])
console.log(dayaLib)