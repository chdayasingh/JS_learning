console.log("TUT:37")

const students = [
    { name:'Harry',subject:'Javascript'},
    { name:'Rohan',subject:'Python'}
]
console.log(students)

function enrollStudent(student,callback){
    setTimeout(() => {
        students.push(student);
        console.log("Student has been enrolled successfully")
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(() => {
        let str=" ";
        students.forEach(function(element) {
            str +=`<li>${element.name}</li>`
        });
        document.getElementById("students").innerHTML=str
        console.log("Students have been fetched");
    }, 3000); 
}
let newStudent = {name:"Sunny",subject:"Java"};
enrollStudent(newStudent,getStudents);