
function createTable() {
    //Get input values
    let fixtureamount = document.getElementById("fixtureamount").value;
    let fixturefootprint = document.getElementById("fixturefootprint").value;
    let startAddress = document.getElementById("startAddress").value
    
    if(fixtureamount == ""){
        fixtureamount = 12;
    }
    if(fixturefootprint == ""){
        fixturefootprint = 1;
    }
    if(startAddress == "") {
        startAddress = 1;
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
        
        let tr = tbl.insertRow();
        
        for (let j = 0;j < colums; j++) {           //Generate new colum(cell)
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(cellContent));           //Write Cell Content
            td.style.width = "50%";
            
            cellContent = currentFixtureAddress + " - " + parseInt(parseInt(currentFixtureAddress) + parseInt(fixturefootprint) - 1);
            //cellContent = currentFixtureAddress
        }        
    }
    div.appendChild(tbl);
}


