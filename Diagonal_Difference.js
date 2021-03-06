function runProgram(input) {
  input = input.trim().split('\n');
  let n = +input[0]
  let mt = []
  for(let i = 1; i <= n; i++) {
      let row = input[i].trim().split(' ').map(Number)
      mt.push(row)
  }  
  let d1 = 0;
  let d2 = 0;
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        if(i == j){
            d1 += mt[i][j];
        }
        if(i + j == mt[i].length-1){
            d2 += mt[i][j];
        }
      }
  }
  console.log(Math.abs(d1 - d2));
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`3
   11 2 4
   4 5 6
   10 8 -12`);
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