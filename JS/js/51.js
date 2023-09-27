console.log('TUT:51,Iterators')

const myArray= ["Apples","Bananas","Grapes","Oranges"]
console.log("My array is",myArray)

function fruitsIterator(array){
    nextIndex=0;
    return {
        next:function(){
            if(nextIndex<array.length){
                return {
                    value:array[nextIndex++],
                    done:false
                }
            }
            else{
                return {
                    done:true
                }
            }
        }
    }
}

const fruits = fruitsIterator(myArray);
console.log(fruits)
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())