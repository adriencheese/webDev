var pics = [
    "imgs/kids.jpg",
    "imgs/bestdayever.jpg",
    "imgs/blueslidepark.jpg",
    "imgs/macadelic.jpg",
    "imgs/watchingmovies.jpg",
    "imgs/faces.jpg",
    "imgs/goodam.jpg",
    "imgs/thedivinefeminine.jpg",
    "imgs/swimming.jpg",
    "imgs/circles.jpg",
];

var names = [
    "K.I.D.S.(2011)",
    "Best Day Ever (2011)",
    "Blue Slide Park (2011)",
    "Macadelic (2012)",
    "Watching Movies with the Sound Off (2013)",
    "Faces (2014)",
    "GOOD A.M. (2015)",
    "The Divine Feminine (2016)",
    "Swimming (2018)",
    "Circles (2020)"
]

// looks in index.html and selects button
var button1 = document.getElementById("backbutton");
var button2 = document.getElementById("nextbutton")
var img = document.querySelector("img");
var caption = document.querySelector("p");
var counter=-1;

nextbutton.addEventListener("click", function(){
    if (counter === 9) {
        counter = 0;
    }
        counter += 1;
        img.src = pics[counter];
        caption.innerText = names[counter];
});

backbutton.addEventListener("click", function(){
    if (counter === 0) {
        counter = 9;
    }
        counter -= 1;
        img.src = pics[counter];
        caption.innerText = names[counter];
});
