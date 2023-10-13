
    var val = document.getElementById("rBox");
    var letters = /^([0-9]+(\.[0-9]+)?|[-+*/])+$/;
    function addInp(input){
        val.value += input;
    }

    function equ(){
        val.value = eval(val.value);
    }

    function cls(){
        val.value=""
    }

    document.addEventListener("keydown", (event) => {
        if(event.key == "Enter"){
            if(val.value.match(letters)){
                equ();
            }else{
                 alert("invalid input");
            }
            
        }else if(event.key == "Backspace"){
                val.value = val.value.slice(0,-1);}

        else if(event.key == "Shift"|| event.key =="Control" || event.key =="Delete"){
            val.value = val.value.replace(/[^0-9]+/,"");
        }
        else{
                val.value += event.key;
            }
        
    })