var d = new Date();
var month = d.getMonth();
let goggleLogo = document.getElementById("goggle");

if(month == 1) {
    let goggleLogo = document.getElementById("goggle");

    goggleLogo.src = "./@Extras/goggle5months.png";
    console.log("%cHappy Birthday Goggle!", "color: blue; font-family:Comic Sans MS; font-size: 23px");
}
else {
    let goggleLogo = document.getElementById("goggle");

    goggleLogo.src = "./@Extras/goggle.png";
}

/* 
    I'm just casually gonna steal my tank api code for the popup lmao

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    P O P U P S

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/



function popup() {
    var popUpMessage = document.getElementById("popup");

    setTimeout(() => { popUpMessage.style.top = "1%"; }, 0);
    setTimeout(() => { popUpMessage.style.top = "-50%"; }, 3000);

    let num = Math.floor(Math.random() * 4);

    if (num == 1) {
        popUpMessage.textContent = "Did you know?: The website https://www.goggle-net.tk is not affiliated with or owned by Google, despite its similarity in appearance and functionality.";
    }
    else if (num == 2) {
        popUpMessage.textContent =  "Did you know?: The search results on https://www.goggle-net.tk are powered by Google Custom Search, which allows website owners to create a custom search engine that prioritizes certain websites and content.";
    }
    else if (num == 3) {
        popUpMessage.textContent =  "Did you know?: The '.tk' domain extension used by https://www.goggle-net.tk is the country code top-level domain (ccTLD) for the Tokelau, a territory of New Zealand.";
    }
    else if (num == 4) {
        popUpMessage.textContent =  "Did you know?: The website https://www.goggle-net.tk offers users the ability to search for images, videos, news articles, and other types of content in addition to web pages.";
    }
}

const debug = { ForcePopup() { popup(); }, };

setInterval(() => {popup();}, 120000);