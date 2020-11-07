
function onClick(e) {
    e.preventDefault();

//Allows cors
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";
// call API
fetch(proxyUrl+url)
    .then(function (response) {
        // make sure the request was successful
        if (response.status != 200) {
            return {
                text: "Error calling the Numbers API service: " + response.statusText
            }
        }
        return response.json();
    }).then(function (json) {
        // update DOM with response
        updateResult(json.quoteText + "~ " + json.quoteAuthor);
    });
}


function updateResult(info) {
    document.getElementById("divStuff").classList.add("bg-dark","my-2");
    document.getElementById('quotes').textContent = info;
}   
document.getElementById('goQuotes').addEventListener('click', onClick);


function whenClick(e) {
    e.preventDefault();
    window.confirm("This was when I went on a build with Habitat of Humanity once.");
}
document.getElementById('build').addEventListener('click', whenClick);

function whenClick1(e) {
    e.preventDefault();
    window.confirm("This was taken on my mission in the Mountain View chapel for our WeChat profile.");
}
document.getElementById('mission').addEventListener('click', whenClick1);

function whenClick2(e) {
    e.preventDefault();
    window.confirm("This was taken in TongLi,SuZhou. I travelled solo for three weeks in China in 2018.");
}
document.getElementById('suzhou').addEventListener('click', whenClick2);

function whenClick3(e) {
    e.preventDefault();
    window.confirm("I LOVE BEIJING YOGURT!! Everyday in China I would get a small glass bottle of yogurt");
}
document.getElementById('yogurt').addEventListener('click', whenClick3);

function whenClick4(e) {
    e.preventDefault();
    window.confirm("this was taken with Tata, my missiona companion a day after she got married in Thailand.");
}
document.getElementById('tata').addEventListener('click', whenClick4);

function whenClick5(e) {
    e.preventDefault();
    window.confirm("Honestly do not remember this... So much time has passed since then... I seem to look happy tho?");
    
}

document.getElementById('small').addEventListener('click', whenClick5);

function whenClick6(e) {
    e.preventDefault();
    window.confirm("I love my Shaggy boy. He passed away in 2018, before I was able to see him after my mission. RIP Shaggy!!");
}
document.getElementById('shaggy').addEventListener('click', whenClick6);

function whenClick7(e) {
    e.preventDefault();
    window.confirm("Two weeks after my mission, a group of my friends from my mission visited Utah. We went to do TRC on Saturday.");
}
document.getElementById('hear').addEventListener('click', whenClick7);

function whenClick8(e) {
    e.preventDefault();
    window.confirm("I grew up doing Wushu, which is chinese martial arts... someday I would like to transition into TaiChi");
}
document.getElementById('sword').addEventListener('click', whenClick8);

function whenClick9(e) {
    e.preventDefault();
    window.confirm("This was when Koko and I went to Penang");
}
document.getElementById('koko').addEventListener('click', whenClick9);

function whenClick10(e) {
    e.preventDefault();
    window.confirm("Before I moved to the States, papa and I went scuba diving in Thailand.");
}
document.getElementById('scuba').addEventListener('click', whenClick10);


function whenClick11(e) {
    e.preventDefault();
    window.confirm("This was my last year in Malaysia. Wesley Methodist school brings back good memories!");
}
document.getElementById('middle').addEventListener('click', whenClick11);

function whenClick12(e) {
    e.preventDefault();
    window.confirm("This was thaken in XiHu, Hangzhou. Really pretty there. Stay in a hostel, met two German girls. We chilled :) ");
}
document.getElementById('hangzhou').addEventListener('click', whenClick12);

function whenClick13(e) {
    e.preventDefault();
    window.confirm("This was taken when I was 7. Papa was wondering what I was doing with my face. I think he got a little impatient. Hee hee");
}
document.getElementById('baju').addEventListener('click', whenClick13);

function whenClick14(e) {
    e.preventDefault();
    window.confirm("I took this picture on 31st August 2020 in commemoration of Malaysia's 63rd year of Independence");
}
document.getElementById('flag').addEventListener('click', whenClick14);


