

function createAddressTable() {
    //Get input values
    let fixtureamount = document.getElementById("fixtureamount").value;
    let fixturefootprint = document.getElementById("fixturefootprint").value;
    let startAddress = document.getElementById("startAddress").value
    let startUniverse = document.getElementById("startUniverse").value
    
    if(fixtureamount == ""){
        fixtureamount = 12;
    }
    else if(fixtureamount > 200){
        fixtureamount = 200
    }

    if(fixturefootprint == ""){
        fixturefootprint = 1;
    }
    else if(fixturefootprint > 512){
        fixturefootprint = 512
    }

    if(startAddress == "") {
        startAddress = 1;
    }
    else if(startAddress > 512){
        startAddress = 1
    }
    
    if(startUniverse == "") {
        startUniverse = 1
    }
    else if (length.startUniverse > 4) {
        startUniverse = 1;
    }

    fixtureamount = parseInt(fixtureamount)
    fixturefootprint = parseInt(fixturefootprint)
    startAddress  = parseInt(startAddress)
    startUniverse = parseInt(startUniverse)


    //Define variables
    let rows = fixtureamount;

    let currentFixtureAddress = startAddress;
    let currentFixtureEndAddress;
    let currentFixtureNumber = 1;
    let currentUniverse = startUniverse;

    let cellContent;
    let cell2Content;
    let cell3Content;
    
    let div = document.getElementById("addressCalcTable");
    let tbl = document.getElementById("addressTable");

    //Delete old table if present
    try{
        while (tbl.firstChild) {
            tbl.removeChild(tbl.firstChild);
        }
    }
    catch {}
    
    //Generate new table
    for (let i = 0;i < rows; i++) {             //Generate new row
        
        cellContent = currentFixtureNumber;
        cell2Content = currentUniverse + "." + currentFixtureAddress + " - " + (parseInt(currentFixtureAddress) + (parseInt(fixturefootprint) - 1));
        //cell2Content = currentUniverse;
        //cell3Content = currentFixtureAddress + " - " + (currentFixtureAddress + fixturefootprint - 1);

        let tr = tbl.insertRow();
        
        let td = tr.insertCell();
            td.appendChild(document.createTextNode(cellContent));           //Write Cell Content(fixturenumber)
            td.style.width = "30%";

            
        let td2 = tr.insertCell();
            td2.appendChild(document.createTextNode(cell2Content));           //Write Cell Content(fixtureaddress)
            td2.style.width = "30%";
        /*
        let td3 = tr.insertCell();
            td3.appendChild(document.createTextNode(cell3Content));           //Write Cell Content(fixtureaddress)
            td3.style.width = "30%";
          */      
        
        currentFixtureNumber++;
        currentFixtureAddress = currentFixtureAddress + fixturefootprint //nextaddress
        currentFixtureEndAddress = currentFixtureAddress + fixturefootprint -1 //next endaddress
        if(currentFixtureEndAddress > 512) {    //check if footprint fits in universe
            currentFixtureAddress = 1;
            currentUniverse++;
       }
    }
    
    div.appendChild(tbl);
}


