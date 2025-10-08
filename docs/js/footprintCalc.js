
function calcFootprint() {
    let fpStartAdress = document.getElementById("fpStartAdress").value;
    let fpEndAdress = document.getElementById("fpEndAdress").value;

    if(fpStartAdress == ""){
        fpStartAdress = 1;
    }
    else if(fpStartAdress > 512){
        fixtureamount = 1
    }

    if(fpEndAdress == ""){
        fpEndAdress = 12;
    }
    else if(fpEndAdress > 512){
        fpEndAdress = 512
    }


    let calculatedFootprint = fpEndAdress - fpStartAdress + 1;

    document.getElementById("calculatedFootprint").innerText = calculatedFootprint + " Channels";

}