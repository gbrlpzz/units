function calcola(){
    input = document.getElementById("input-num").value
    var inputRender = document.getElementsByClassName("input");

    for (var i = 0; i < inputRender.length; i++) {
    inputRender[i].innerHTML = input;
    }
    
    feet = input * 3.280
    feet = feet.toFixed(3)
    document.getElementById("feet").innerHTML = feet
    
    meters  = input / 3.280
    meters = meters.toFixed(3)
    document.getElementById("meters").innerHTML = meters
    
    gallons  = input * 0.264172
    gallons = gallons.toFixed(3)
    document.getElementById("gallons").innerHTML = gallons

    liters  = input / 0.264172
    liters = liters.toFixed(3)
    document.getElementById("liters").innerHTML = liters
    
    pounds  = input * 2.20462
    pounds = pounds.toFixed(3)
    document.getElementById("pounds").innerHTML = pounds

    kilograms  = input / 2.20462
    kilograms = kilograms.toFixed(3)
    document.getElementById("kilograms").innerHTML = kilograms
}

calcola()