trybtn = document.getElementById("tryAgainBtn");

function getInputValue() {
  const yourName = document.getElementById("FormControlInput1").value;
  const crushName = document.getElementById("FormControlInput2").value;
  const letters = /^[A-Za-z]+$/;
  if (yourName.match(letters) && crushName.match(letters)) {
    getLovePercent();
  } else {
    alert("Please valid name");
  }
}
function tryAgain(){
  const mainContainer = document.getElementById("container-1");
  const secContainer = document.getElementById("container-2");

  mainContainer.classList.remove("hidden");
  secContainer.classList.add("hidden");
  
}
function getLovePercent() {
  const yourName = document.getElementById("FormControlInput1").value;
  const crushName = document.getElementById("FormControlInput2").value;
  var total = yourName.length + crushName.length;
  if (
    crushName == "priyanshu" ||
    crushName == "Priyanshu" ||
    crushName == "PRIYANSHU"
  ) {
     showResult(100);
  } else {
    showResult(total);
  }
}

function showResult(total){
  var result = document.getElementById("result");
  const mainContainer = document.getElementById("container-1");
  const secContainer = document.getElementById("container-2");
    if(total >= 12 && total <=15){
      result.innerHTML = "98%";
      mainContainer.classList.add("hidden");
      secContainer.classList.remove("hidden");
        console.log("98%");
    }
    else if ( total >= 9 && total <=12 ){
      result.innerHTML = "86%";
      mainContainer.classList.add("hidden");
      secContainer.classList.remove("hidden");
      
    }
    else if(total == 100)
    {
      result.innerHTML = "100%";
      mainContainer.classList.add("hidden");
      secContainer.classList.remove("hidden");
      
    }
    else{
      result.innerHTML = "67%";
      mainContainer.classList.add("hidden");
      secContainer.classList.remove("hidden");
      
    }
}