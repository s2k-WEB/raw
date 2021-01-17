    /*  Mivel a menű pontok külön oldalakat töltenek be ajax segítségével és az oldalaknak van egy saját scriptje
         ezért az oldalak betöltődését késleltetni kell amíg az adott oldal saját scriptje be nem töltődik a 
         szinkronizáció miatt. Máskülönben az XMLHttpRequest kérés a fő szálban asyncronous lesz. Ez csak 
         figyelmeztetést eredményez egyellőre, de jövőben a nem szinkronizált XMLHttp kérések nem lesznek támogatottak
         a legtöbb böngészőben.A jQuery támogatja ezt az eljárást a holdReady() funkcióval.
        További információ: https://api.jquery.com/jquery.holdready/
    */
    function loadPageScript(pageurl) {
        $.holdReady(true);
        function releaseHold() { $.holdReady(false); }
        $.getScript(pageurl, releaseHold);
    }

$(document).ready(function(){
    $(".logo").click(function(){
        $("#grid-area-1222").load("pages/page0.html");
        loadPageScript("/scripts/page0.js")
    });
    $("#page1").click(function(){
        $("#grid-area-1222").load("pages/page1.html");
        loadPageScript("/scripts/page1.js")
    });
    $("#page2").click(function(){
        $("#grid-area-1222").load("pages/page2.html");
        loadPageScript("/scripts/page2.js")
    });
    $("#page3").click(function(){
        $("#grid-area-1222").load("pages/page3.html");
        loadPageScript("/scripts/page3.js")
    });
    $("#page4").click(function(){
        $("#grid-area-1222").load("pages/page4.html");
        loadPageScript("/scripts/page4.js")
    });
    $("#page5").click(function(){
        $("#grid-area-1222").load("pages/page5.html");
        loadPageScript("/scripts/page5.js")
    });
    $("#page6").click(function(){
        $("#grid-area-1222").load("pages/page6.html");
        loadPageScript("/scripts/page6.js")
    });
    $("#page7").click(function(){
        $("#grid-area-1222").load("pages/page7.html");
        loadPageScript("/scripts/page7.js")
    });
});


