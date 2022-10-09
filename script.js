
function getInputValue(){
    var name = document.getElementById("FormControlInput1").value;
    var crushName = document.getElementById("FormControlInput2").value;
    if( name == ""){
        var nameField = document.getElementById("FormControlInput1").focus()
        alert("Enter Your Name before submitting");
    }
    else if(crushName == ""){
        document.getElementById("FormControlInput2").focus()
        alert("Enter Your Crush Name before submitting");
    }
    else{
        if( name.length <=3){
            document.getElementById("FormControlInput1").focus()
            alert("Enter a valid Name");
        }
        else{
            console.log(name);
        }
        if( crushName.length <=3){
            document.getElementById("FormControlInput2").focus()
            alert("Enter a valid Name");
        }
        else{
            console.log(crushName);
        }
    
    }
}
