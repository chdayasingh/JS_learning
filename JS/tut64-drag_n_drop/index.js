console.log("This is index.js of TUT:64")

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listener for draggable element imgBox
imgBox.addEventListener('dragstart',(e)=>{
    console.log("dragstart is triggered")
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
})
imgBox.addEventListener('dragend',(e)=>{
    console.log("dragend is triggered")
    e.target.className = 'imgBox';
})

for(const whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        console.log("dragover is triggered");
        e.preventDefault(); //allow to dragover 
    })
    whiteBox.addEventListener('dragenter', (e)=>{
        console.log("dragenter is triggered");
        e.target.className += ' dashed';
    })
    whiteBox.addEventListener('dragleave', (e)=>{
        console.log("dragleave is triggered");
        e.target.className = 'whiteBox';
    })
    whiteBox.addEventListener('drop', (e)=>{
        console.log("drop is triggered");
        e.target.append(imgBox);
        e.target.className = 'whiteBox';
    })
}

