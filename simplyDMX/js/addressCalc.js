
function createTable() {
    //Get input values
    let fixtureamount = document.getElementById("fixtureamount").value;
    let fixturefootprint = document.getElementById("fixturefootprint").value;
    let startAddress = document.getElementById("startAddress").value
    
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

    fixtureamount = parseInt(fixtureamount)
    fixturefootprint = parseInt(fixturefootprint)
    startAddress  = parseInt(startAddress)


    //Define variables
    let rows = fixtureamount;

    let currentFixtureAddress = startAddress;
    let currentFixtureEndAddress;
    let currentFixtureNumber = 1;
    let currentUniverse = 1;

    let cellContent;
    let cell2Content;
    
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
        cell2Content = currentFixtureAddress + " - " + parseInt(parseInt(currentFixtureAddress) + parseInt(fixturefootprint) - 1);

        let tr = tbl.insertRow();
        
        let td = tr.insertCell();
            td.appendChild(document.createTextNode(cellContent));           //Write Cell Content(fixturenumber)
            td.style.width = "50%";

            
        let td2 = tr.insertCell();
            td2.appendChild(document.createTextNode(cell2Content));           //Write Cell Content(fixtureaddress)
            td2.style.width = "50%";
        
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


