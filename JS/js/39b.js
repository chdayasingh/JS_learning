
const students = [
    { name:'Harry',subject:'Javascript'},
    { name:'Rohan',subject:'Python'}
]
console.log(students)

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled successfully")
            const error=true;
            if(!error){
                resolve();
            }
            else{
                reject("Some error occured");
            }
        }, 3000);

    })
}

function getStudents(){
    setTimeout(() => {
        let str=" ";
        students.forEach(function(element) {
            str +=`<li>${element.name}</li>`
        });
        document.getElementById("students").innerHTML=str
        console.log("Students have been fetched");
    }, 1000); 
}

let newStudent = {name:"Sunny",subject:"Java"};
enrollStudent(newStudent).then(getStudents).catch(function(error){
    console.log(error)
})
