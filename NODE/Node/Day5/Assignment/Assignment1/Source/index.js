

function update(msg){
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(msg)
}

// Exam display timer
var sec = 0, min = 0, hour = 0;

function timer() {
    sec++;
    if (sec == 60) {
        min += 1;
        sec = 0;

    }
    if (min == 60) {
        hour += 1;
        min = 0;
        
    }
    update(hour+':'+min+':'+sec);
}
setInterval(timer, 1000);