function runProgram(input) {
    console.log(input)
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`4
   aba
   baba
   aba
   xzxb
   3
   aba
   xzxb
   ab`);
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

