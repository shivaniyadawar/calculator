
    var val = document.getElementById("rBox");

    function addInp(input){
        val.value += input;
    }

    function equ(){
        val.value = eval(val.value);
    }

    function cls(){
        val.value=""
    }