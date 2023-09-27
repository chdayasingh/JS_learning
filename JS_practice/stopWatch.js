// constructor function

function StopWatch(){
    let startTime;
    let endTime;
    let running = false;
    let duration = 0;

    this.start = function() {
        if(running){
            throw new Error("Stop watch is already started");
        }
        let now = new Date();
        startTime = now.getTime() / 1000;
        running = true;
    };

    this.stop = function(){
        if(!running){
            throw new Error("Stop watch is not started yet");
        }
        
        running = false;

        let now = new Date();
        endTime = now.getTime() / 1000;
        duration += endTime-startTime;
    };
    this.reset = function(){
        duration = 0;
        running = false;
        startTime = undefined;
        endTime = undefined;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            if(running && endTime == undefined){
                let now = new Date();
                return (now.getTime()/1000) - startTime;
            }
            return duration;
        }
    })
}


console.log(StopWatch.prototype)

StopWatch.prototype.style = function(){
    // ...
}