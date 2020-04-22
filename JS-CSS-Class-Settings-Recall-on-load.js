/*
-::: JavaScript CSS Class Memory Recall function for websites and HTML apps.
--- Original author :: Nik K. linkedin.com/in/nik--k---/   (  4.Feb 2020). 
--- Code adoption   :: YourName  (date).
--- License         :: GNU General Public License v 3.0.
--- Latest version  :: github.com/Dorson/CSS-Dark-Mode-and-color-switch
*/

window.onerror = null ;


/*
  During load time, we remember the saved CSS classes from localStorage
  Only works with HTML Tags that are already loaded before the script run !
  Optimally the HTML tag. Works for the first Tag of it's type only !
*/

document.addEventListener( 'DOMContentLoaded' , function() {

  RememberClasses() ;

});


function RememberClasses() {

 const ClassMemory = [
      ["html" , "ColorMode"] ,
      ["html" , "TextSize"] 
   ] ;


 for ( let [ Tag , MemoryName ] of ClassMemory ) {

    let TagNotAlive = !(document.querySelector( Tag )) ;

    let MemoryValue = window.localStorage.getItem( MemoryName ) ;

    /*  On logic Errors we skip one loop. */

    if ( !MemoryValue || TagNotAlive ) {
       continue ;
     }

    /* Else we remember and set CSS classes. */
     else {

        document.querySelector( Tag ).classList.add( MemoryValue );
      }
  }

}




/* In the dark, IF ColorMode was NOT set, and the hour is between 20:00 and 7:00 */

document.addEventListener("DOMContentLoaded", AfterDark() , true ) ;

function AfterDark() {

 let hour = new Date().getHours() ;

 let ColorWasSet = localStorage.getItem( "ColorMode" ) ;

 let DarkWasSet = document.querySelector("html").classList.contains("dark") ;

 if ( ( hour >= 20 || hour < 7 ) && !( ColorWasSet || DarkWasSet ) ) 
  {
      document.querySelector("html").classList.add( "dark" ) ;
   }
}

