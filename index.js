// $('h1').css('color','red');
// // $('button').css('background-color','purple')


// // Adding styles
// $('h1').addClass("big-title margin-50");

// // manipulating txt
// $('button').text("HEY");
// $('button').html("<em>HEY</em>");


// setting and getting the values of an attribute
// $('a').attr('href','https://www.yahoo.com');
// console.log($('a').css('color'));

// Adding event listener using jQuery
    //Click event
    // $('button').click(function(){
    //     $('h1').css('color','purple');
    // });

    // //keypress event
    // $(document).keypress(function(event){
    //     $('h1').text(event.key);
    // });

    // $('h1').on("mouseover",(function(){
    //     $('h1').css('color','purple');
    // }));

//Animations

$('button').on('click', function(){
    // $('h1').hide();
    // $('h1').fadeToggle();
    // $('h1').slideToggle();
    // $('h1').animate({opacity: 0.5});
    $('h1').slideUp().slideDown().animate({opacity: 0.5});
});