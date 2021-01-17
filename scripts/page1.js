$(document).ready(function(){
    const nyeroszamok = [30, 57, 58, 61, 86, 30, 57, 58, 61, 86];
    for (let i = 0; i < nyeroszamok.length; i++) {
        document.getElementById(`golyo${i}`).innerHTML = nyeroszamok[i];        
    }
});