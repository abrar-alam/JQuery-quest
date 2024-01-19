$( document ).ready(() => console.log("Let's get ready to work with JQuery") );

$('article').find('img').attr("class", "image-center");

// Remove the last paragraph in the article.

$('article').find("p:last-child").remove();

// Set the font size of the title to be a random pixel size from 0 to 100.

$('h1#title').css('font-size', Math.round(Math.random()*100));

// Add an item to the list; it can say whatever you want.
$('ol').append("<li>I was added by Abrar</li>");

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// $('ol li:last-child').css('text-decoration', 'line-through').append("<p>Sorry for the aside :(</p>");
// $('ol').append("<p>Sorry for the aside :(</p>");
$('aside').empty().append("<p>Sorry for the aside :(</p>");

//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$( 'div[class="row mb-5"]' ).on('keyup', 'input.form-control', ()=>$( "body" ).css('background-color', `rgb(${$('input.form-control').get(0).value},${$('input.form-control').get(1).value},${$('input.form-control').get(2).value})`));

//Add an event listener so that when you click on the image, it is removed from the DOM.
$('article').on("click", 'img', function(){$(this).remove()});