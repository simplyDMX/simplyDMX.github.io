
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
    let colums = 2;
    let rows = fixtureamount;

    let currentFixtureAddress = startAddress;
    let currentFixtureEndAddress = startAddress - 1;
    let nextFixtureAddress = startAddress;
    let currentFixtureNumber = 0;
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
        //Calculate the current fixture address
        currentFixtureAddress = nextFixtureAddress;
        nextFixtureAddress = currentFixtureAddress + fixturefootprint;
        currentFixtureEndAddress = currentFixtureAddress + fixturefootprint - 1;
        
        if (currentFixtureEndAddress > 512) {
                currentFixtureAddress  = 1
                nextFixtureAddress = currentFixtureAddress + fixturefootprint;
        }

        currentFixtureNumber++;
        cellContent = currentFixtureNumber;
        cell2Content = currentFixtureAddress + " - " + parseInt(parseInt(currentFixtureAddress) + parseInt(fixturefootprint) - 1);
        //cell2Content = currentFixtureAddress

        let tr = tbl.insertRow();
        
        let td = tr.insertCell();
            td.appendChild(document.createTextNode(cellContent));           //Write Cell Content
            td.style.width = "50%";

            
        let td2 = tr.insertCell();
            td2.appendChild(document.createTextNode(cell2Content));           //Write Cell Content
            td2.style.width = "50%";
    }
    
    div.appendChild(tbl);
}


