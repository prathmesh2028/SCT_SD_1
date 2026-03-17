function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    temp = parseFloat(temp);

    if(isNaN(temp)){
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }
    if(from === to){
        document.getElementById("result").innerText = "Result :" + temp;
        return;
    }

    let tempInCelsius;
    if( from === "C"){
        tempInCelsius = temp;
    }
    else if(form == "F"){
        tempInCelsius = (temp - 32) * 5/9;
    }
    else if(from === "K"){
        tempInCelsius = temp - 273.15;
    }

    let result;

    if(to === "C"){
        result = tempInCelsius;
    }
    else if(to == "F"){
        result = (tempInCelsius * 9/5) + 32;
    }
    else if(to === "K"){
        result = tempInCelsius + 273.15;
    }

    result = result.toFixed(2);

    document.getElementById("result").innerText = "Converted Temperature :" + result;
}
