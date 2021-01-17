$(document).ready(function(){
    let x = 0;
    for (let i = (CSVarray[1].length - 5 ); i < CSVarray[1].length; i++) {
        document.getElementById(`golyo${x}`).innerHTML = CSVarray[1][i];
        document.getElementById(`golyo${x+5}`).innerHTML = CSVarray[1][i];
        x++;
    }
});