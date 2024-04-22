/* Mohibullah Sarfiraz*/

var divModal = document.getElementById("back2");
var table = document.getElementById("tble");

//funkcia pre tlacenie tlacidlo generovat.

document.getElementById("btnP").addEventListener("click", ()=> {
    let xinp =document.getElementById("valuePx");
    let yinp =document.getElementById("valuePy");
    let x = document.getElementById("xValues").value;
    let y = document.getElementById("yValues").value;
    if (x<1 || x>9){
        xinp.innerHTML = "Nesprávny vstup!!!, hodnota X je mimo rozsahu";
        return;
    }
    if(!x) {
        xinp.innerHTML = "hodnota pre (X) chýba!!!";
        return;
    }
    xinp.innerHTML="";
    if ( y<1 || y>9){
        yinp.innerHTML = "Nesprávny vstup!!!, hodnota Y je mimo rozsahu";
        return;
    }
    if(!y){
        yinp.innerHTML = "Hodnota pre (Y) chýba!!!";
        return;
    }
    yinp.innerHTML="";

    divModal.style.display="block";

    for (let i = 0; i <= y; ++i) {
        let tableRow = document.createElement("tr");
        for (let j = 0; j <= x; ++j) {
            let tableData = document.createElement("td");
            let tableHead = document.createElement("th");
            if (j===0 && i===0 ) {
                tableData.innerHTML="";
                tableRow.appendChild(tableData);
            }
            else if (j===0 && i>0){
                tableHead.innerHTML=("Y="+i);
                tableRow.appendChild(tableHead);
            }
            else if (i===0 && j>0){
                tableHead.innerHTML=("X="+j);
                tableRow.appendChild(tableHead);
            }
            else {
                tableData.innerHTML=(j*i);
                tableRow.appendChild(tableData);
            }


        }
        table.appendChild(tableRow);
    }
});

//funkcia pre ikonka close vymaze obsah tabuly.
document.getElementById("cls").addEventListener("click",()=>{
    document.getElementById("back2").style.display="none";
    divModal.style.display="none";
    table.innerHTML="";
})

//funkcaia pre zatvorenie vrstva nad pri kliknutie obrazovku

window.addEventListener("click",function(event) {
    if (event.target === divModal) {
        divModal.style.display = "none";
        table.innerHTML="";

    }
});


