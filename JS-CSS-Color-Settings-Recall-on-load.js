/*
-::: JavaScript CSS Class Memory Recall function for websites and HTML apps.
--- Original author	:: Nik K. linkedin.com/in/nik--k---/   (  4.Feb 2020). 
--- Code adoption   :: YourName  (date).
--- License         :: GNU General Public License v 3.0.
--- Latest version  :: github.com/Dorson/CSS-Dark-Mode-and-color-switch
*/

window.onerror = null ;


/* During load time, we remember the saved CSS classes from local memory */

document.addEventListener("DOMContentLoaded", RememberClasses() , true ) ;

function RememberClasses() {

 var ClassMemory = [
      ["html" , "ColorMode"] ,
      ["html" , "TextSize"] 
   ] ;

 for ( let [ Tag, MemoryName ] of ClassMemory ) {
    /*  On Errors we skip one loop. */
    if (!localStorage.getItem( MemoryName ) || !document.querySelector( Tag ) ) {
       continue ;
     }
     else {
    /* Else we remember and set CSS classes. */
        var MemoryValue = localStorage.getItem( MemoryName );
        document.querySelector( Tag ).classList.add( MemoryValue );
      }
  }

}



/* In the dark, IF ColorMode was NOT set, and the hour is between 20:00 and 7:00 */

document.addEventListener("DOMContentLoaded", AfterDark() , true ) ;

function AfterDark() {

 var hour = new Date().getHours() ;

  if ( !localStorage.getItem( "ColorMode" ) && ( hour >= 20 || hour < 7 ) ) {

     document.querySelector("html").classList.add( "dark" ) ;
   }
}

