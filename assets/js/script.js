$( document ).ready(function() {
  WebFontConfig = {
    google: { families: [ 'Roboto+Slab:400,100,300,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});

/*this is setting up the web font Roboto Slab that I'm using through Google fonts
 and some stuff inbetween that I cannot figure out

 createElement() is a method that makes something, for example
 var btn = document.createElement ("BUTTON");   -   this would create a small button on the screen
 that could be clicked on  -  so
 var wf = document.createElement('script');  -  makes omething! 

 I've read a bunch of stuff and searched some chats that come up in Pro Webmasters and stackOverflow
 and to be honest I can't understand what they are even talking about!
 it seems to have something to do with the browser and omittinf the scheme (for example, src="//example
 .com/test.js"), and a concern that this isn't fully cross browser compatible.
 w

 At the bottom there is the $.(this)append that we use to add the cartoon character/saying that Thanks the user
 for sending the email
*/