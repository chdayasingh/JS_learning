console.log("This is index.js of Library Website")

//constructor
function Book(bookName, author, type){
    this.bookName=bookName;
    this.author=author;
    this.type=type;
}

function Display(){}
Display.prototype.add= function(book){
    console.log("Adding to UI");
    let tableBody = document.getElementById("tableBody")
    let uiString = `
    <tr>
        <td>${book.bookName}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`
    tableBody.innerHTML += uiString;
}
Display.prototype.clear= function(){
    libraryForm.reset();
}
Display.prototype.validate= function(book){
    if(book.bookName.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.showMsg= function(type, message){
     let msg= document.getElementById("msg")
     msg.innerHTML= `
                   <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message!!</strong> ${message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
    setTimeout(() => {
        msg.innerHTML= "";
    }, 2000);
}


let libraryForm= document.getElementById("libraryForm")
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    console.log("Add book clicked");
    let bookName= document.getElementById("bookName").value;
    let author= document.getElementById("author").value;
    let type;

    let programming= document.getElementById("programming");
    let novel= document.getElementById("novel");
    let poetry= document.getElementById("poetry");

    if(programming.checked){
        type= programming.value
    }
    else if(novel.checked){
        type= novel.value
    }
    else if(poetry.checked){
        type= poetry.value
    }

    let book= new Book(bookName, author, type)
    let display = new Display();
    console.log(book);

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.showMsg("success","Great:) Book added succesfully");
    }
    else{
        //show error
        display.showMsg("danger","Sorry:( You cannot add this book");
    }

}