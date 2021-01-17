/*  Mivel a menű pontok külön oldalakat töltenek be egy div "konténerbe" ajax segítségével és minden oldalnak van 
    egy saját scriptje ezért az oldalak betöltődését késleltetni kell amíg az adott oldal saját scriptje be nem töltődik a 
    szinkronizáció miatt. Máskülönben az XMLHttpRequest kérés a fő szálban asyncronous lesz. Ez csak 
    figyelmeztetést eredményez egyellőre, de jövőben a nem szinkronizált XMLHttp kérések nem lesznek támogatottak
    a legtöbb böngészőben.A jQuery támogatja ezt az eljárást a holdReady() funkcióval.
    További információ: https://api.jquery.com/jquery.holdready/ */
function loadPageScript(pageurl) {
    $.holdReady(true);
    function releaseHold() { $.holdReady(false); }
    $.getScript(pageurl, releaseHold);
}

/* csv file betöltése javascript "objektumba" */
var CSVarray = new Object();
$.get( "data/otos-utf8.csv", function(csv) {
    var lines=csv.split("\n");
    for(var i=0; i < lines.length; i++) {
    CSVarray[i] = lines[i].split(";");
    }
});

/* Az oldal ready() esemény utáni szál. */
$(document).ready(function() {
    for (let i = 0; i < 8; i++) {
        $(`#page${i}`).click(function(){
            $("#grid-area-1222").load(`/pages/page${i}.html`);
            loadPageScript(`/scripts/page${i}.js`);
        });
    }
});
