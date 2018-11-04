var images = [
    {
        name: "cat1",
        likes: 65,
        dateUploaded: "2/7/2015",
        src: "cat1.jpg",
    }
    ,
    {
        name: "cat2",
        likes: 32,
        dateUploaded: "6/12/2014",
        src: "cat2.jpg"
    },
    {
        name: "cat3",
        likes: 125,
        dateUploaded: "11/20/2017",
        src: "cat3.jpg"
    }
    ,
    {
        name: "cat4",
        likes: 90,
        dateUploaded: "4/7/2011",
        src: "cat4.jpg"
    }
    ,
    {
        name: "cat5",
        likes: 133,
        dateUploaded: "8/2/2018",
        src: "cat5.jpg"
    }
    ,
    {
        name: "cat6",
        likes: 800,
        dateUploaded: "9/6/2012",
        src: "cat6.jpg"
    }

]



var b =document.createElement("button");
b.id="b";
var t = document.createTextNode("SortByLikes");
b.appendChild(t);

var b1 =document.createElement("button");
b1.id="b1";
var t2 = document.createTextNode("SortByDate");
b1.appendChild(t2);


document.body.appendChild(b);
var likes = document.getElementById("b");
likes.addEventListener("click", sortbylikes);

document.body.appendChild(b1);
var date = document.getElementById("b1");
date.addEventListener("click", sortbydate);



document.body.appendChild(b);
document.body.appendChild(b1);



//-----------------------------------------------



//-----------------------------------------------------------------------------------------------------


var ulElem = document.createElement("ul");

ulElem.id = "ulelments";

var liElem1 = document.createElement("li");
var imgElem1 = document.createElement("img");
imgElem1.src = images[0].src;
liElem1.appendChild(imgElem1);
ulElem.appendChild(liElem1);

imgElem1.style.height = "300px";
imgElem1.style.width = "300px";
//-----------------------------------------------
var liElem2 = document.createElement("li");
var imgElem2 = document.createElement("img");
imgElem2.src = images[1].src;

liElem2.appendChild(imgElem2);
ulElem.appendChild(liElem2);

imgElem2.style.height = "300px";
imgElem2.style.width = "300px";


//-----------------------------------------------

var liElem3 = document.createElement("li");
var imgElem3 = document.createElement("img");
imgElem3.src = images[2].src;
liElem3.appendChild(imgElem3);
ulElem.appendChild(liElem3);

imgElem3.style.height = "300px";
imgElem3.style.width = "300px";
//-----------------------------------------------
var liElem4 = document.createElement("li");
var imgElem4 = document.createElement("img");
imgElem4.src = images[3].src;
liElem4.appendChild(imgElem4);
ulElem.appendChild(liElem4);

imgElem4.style.height = "300px";
imgElem4.style.width = "300px";
//-----------------------------------------------
var liElem5 = document.createElement("li");
var imgElem5 = document.createElement("img");
imgElem5.src = images[4].src;
liElem5.appendChild(imgElem5);
ulElem.appendChild(liElem5);

imgElem5.style.height = "300px";
imgElem5.style.width = "300px";
//-----------------------------------------------
var liElem6 = document.createElement("li");
var imgElem6 = document.createElement("img");
imgElem6.src = images[5].src;
liElem6.appendChild(imgElem6);
ulElem.appendChild(liElem6);
imgElem6.style.height = "300px";
imgElem6.style.width = "300px";
//-----------------------------------------------



document.body.appendChild(ulElem);





//-----------------------------------------------------------------------------------------------






//-----------------------------------------------

function display() {
    var ul = document.getElementById("ulelments");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
   
    var i = 0;
    do {
        var l = document.createElement("li");
        var g = document.createElement("img");
        g.style.height = "300px";
        g.style.width = "300px";
        l.appendChild(g);
        g.src = images[i].src;
        var ulm = document.getElementById("ulelments");
        ulm.appendChild(l);

        i++;
    } while (i < images.length);

    document.body.appendChild(ulm);

}


//-----------------------------------------------




   
//-----------------------------------------------
   

function sortbydate() {
    
    images.sort(function (a, b) {
    var d = new Date (a.dateUploaded);
    var d2 =  new Date (b.dateUploaded);
    if (d < d2) {
        return 1;
    }
     if (d > d2) {
        return -1;
    }
});

    display();
sortbydate();
};



//-----------------------------------------------

function sortbylikes() {

    images.sort(function (a, b) {
        var x = a.likes;
        var y = b.likes;
        if (x < y) { return 1; }
        if (x > y) { return -1; }
        
    });
       
display();
sortbylikes();
   
}



    