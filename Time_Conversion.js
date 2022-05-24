function runProgram(input) {
    var inp = input.trim().split(":")
    var last = inp[2]
    var sec = last[0]+last[1]
    var p = last[2]
    var hour = +inp[0]
    var min = inp[1]
    var time = ''
     if(p == "A" && hour == 12){
        hour = hour - 12
    } else if( p == "P" && hour != 12 ){
        hour = hour + 12
    }
    if(hour == 0 || hour == 1 ||hour == 2 ||hour == 3 ||hour == 4 ||hour == 5 ||hour == 6 ||hour == 7 ||hour == 8 ||hour == 9){
        hour = "0"+ hour
    }
    console.log(hour+":"+min+":"+sec)
   }
   if (process.env.USERNAME === "awdhesh") {
     runProgram(`12:01:00PM`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }