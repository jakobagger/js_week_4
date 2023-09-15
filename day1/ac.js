//Asynchronous Callbacks

  //1. Expect it to go: aa, dd, ff, ee, bb. First the non delayed calls, 
  //then the two delayed calls of msgPrinter, least delay first.

  //2. 
  const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); 
  };
  console.log("aaaaaaaaaa");
  msgPrinter ("bbbbbbbbbb",2000);
  console.log("dddddddddd");
  msgPrinter ("eeeeeeeeee",1000);
  console.log("ffffffffff");

  console.log("hooray I guessed it");