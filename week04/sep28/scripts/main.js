
function makeDivWithClasses(classes, text) {

    var div = document.createElement("div");
    div.setAttribute('class', classes);
    if (text) {
        div.textContent = text;
    }
    return div;
}

function makeAnchor(classes, ariaCurrent, href, text) {

    var a = document.createElement("a");
    a.setAttribute('class', classes);
    if (ariaCurrent) {
        a.setAttribute('aria-current', ariaCurrent);
    }
    a.setAttribute('href', href);
    a.textContent = text;

    return a;
}

function makeLi(classes) {

    var li = document.createElement("li");
    li.setAttribute('class', classes);

    return li;
}

function makeButton(classes, type, dataToggle, dataTarget, ariaControls, ariaExpanded, ariaLabel) {

    var button = document.createElement("button");
    button.setAttribute('class', classes);
    button.setAttribute('type', type);
    button.setAttribute('data-bs-toggle', dataToggle);
    button.setAttribute('data-bs-target', dataTarget);
    button.setAttribute('aria-controls', ariaControls);
    button.setAttribute('aria-expanded', ariaExpanded);
    button.setAttribute('aria-label', ariaLabel);

    return button;
}

// container object
var main_container = document.querySelector(".container");


// making navbar
var nav = document.createElement("nav");
nav.setAttribute('class', "navbar navbar-expand-lg navbar-dark bg-info");

var navDiv = makeDivWithClasses("container-fluid", undefined);

// a1, button1 children of navDiv
var a1 = makeAnchor("navbar-brand display-1", undefined, "#", "HighOnCoding");

var button1 = makeButton("navbar-toggler", "button", "collapse", "#navbarNav", "navbarNav", "false", "Toggle navigation");

// span is child of button
var span = document.createElement("span");
span.setAttribute("class", "navbar-toggler-icon");
button1.appendChild(span);

// child of navDiv
var divCollapse = makeDivWithClasses("collapse navbar-collapse", undefined);
divCollapse.setAttribute('id', 'navbarNav');
// need to append divCollapse to navDiv!!!!!!!!

// ul is child of divCollapse
var ul = document.createElement("ul");
ul.setAttribute('class', "navbar-nav ms-auto");

//lis are children of ul
var li1 = makeLi("nav-item");
var a2 = makeAnchor("nav-link active", "page", "#", "Home")
li1.appendChild(a2);

var li2 = makeLi("nav-item");
var a3 = makeAnchor("nav-link active", "page", "#", "Home");
li2.appendChild(a3);
ul.appendChild(li1);
ul.appendChild(li2);

divCollapse.appendChild(ul);
navDiv.appendChild(a1);
navDiv.appendChild(button1);
navDiv.appendChild(divCollapse);

nav.appendChild(navDiv);
main_container.appendChild(nav);

// now that the nav bar is out of the way, time to make the next div!

var divFirst = makeDivWithClasses("row m-5", undefined);
//child of divFirst
var divFirstFirstChild = makeDivWithClasses("col-12 row bg-light", undefined);
// children of divFirstFirstChild
var divFirstFirstChildTitle = makeDivWithClasses("col-12 h1 mb-5 text-secondary", "Curse of the Current Reviews");
var divFirstFirstChildContent = makeDivWithClasses("col-12", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero vel incidunt, laudantium temporibus perspiciatis delectus hic nemo similique molestias! Iure veritatis rem sapiente maiores accusamus laudantium ex illo ea vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ipsa deleniti magnam reiciendis, maiores fugit accusantium debitis sequi nobis! Doloribus eligendi in quam architecto reprehenderit, delectus voluptas. Possimus, debitis officiis?");

divFirstFirstChild.appendChild(divFirstFirstChildTitle);
divFirstFirstChild.appendChild(divFirstFirstChildContent);
divFirst.appendChild(divFirstFirstChild);

main_container.appendChild(divFirst);

// woooo!! Next one!

var divSecond = makeDivWithClasses("row m-5", undefined);

var divSecondFirstChild = makeDivWithClasses("col-12 row", undefined);
var divSecondFirstChildTitle = makeDivWithClasses("col-12 display-6 text-primary mb-2", "Hello WatchKit");
var divSecondFirstChildContent = makeDivWithClasses("col-12", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus cum enim consequatur ad minima quam non aperiam dolore error eveniet quidem deleniti dolores perspiciatis explicabo dignissimos, quis, laudantium ducimus.");

//making orange bar in second div
var divSecondOrange = makeDivWithClasses("col-12 row bg-warning ms-2 me-2 text-light", undefined);
var comments1 = makeDivWithClasses("col-2", "12 comments");
var likes1 = makeDivWithClasses("col-10", "124 likes");

divSecondOrange.appendChild(comments1)
divSecondOrange.appendChild(likes1)
divSecondFirstChild.appendChild(divSecondFirstChildTitle);
divSecondFirstChild.appendChild(divSecondFirstChildContent);
divSecondFirstChild.appendChild(divSecondOrange);

divSecond.appendChild(divSecondFirstChild);

main_container.appendChild(divSecond);

// Last one!!!!!!!!!!!!!!!!!!!!!!!!
var divThird = makeDivWithClasses("row m-5", undefined);
var divThirdChild = makeDivWithClasses("col-12 row", undefined);
var divThirdChildTitle = makeDivWithClasses("col-12 display-6 text-primary mb-2", "Introduction to Swift");
var divThirdChildContent = makeDivWithClasses("col-12", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minus, accusamus laborum tempora ad aperiam nam in sunt, earum hic totam accusantium quasi illum ullam. Fugiat ipsam non obcaecati in?")
//making orange bar
var divThirdOrange = makeDivWithClasses("col-12 row bg-warning ms-2 me-2 text-light", undefined);
var comments2 = makeDivWithClasses("col-2", "15 comments");
var likes2 = makeDivWithClasses("col-10", "45 likes");

divThirdOrange.appendChild(comments2);
divThirdOrange.appendChild(likes2);

divThirdChild.appendChild(divThirdChildTitle);
divThirdChild.appendChild(divThirdChildContent);
divThirdChild.appendChild(divThirdOrange);
divThird.appendChild(divThirdChild);

main_container.appendChild(divThird);






