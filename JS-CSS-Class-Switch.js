/*
-+++++ JavaScript CSS Class Switch function for websites and HTML apps.  +++-
--- Original author :: Nik K. linkedin.com/in/nik--k---/   (  4.Feb 2020). 
--- Code adoption   :: YourName  (date).
--- License         :: GNU General Public License v 3.0.
--- Latest version	 :: github.com/Dorson/CSS-Dark-Mode-and-color-switch
*/

window.onerror = null ;

/*  Toggle Switch ON,OFF CSS class + remember it in localStorage. */

function ClassSwitch( TagName, ClassName, MemoryName ) {

 const MemoryContent = localStorage.getItem( MemoryName ) ;

 /* If class was already set, then switch it OFF and clean memory */
  
    if ( MemoryContent === ClassName ) {
        localStorage.removeItem( MemoryName ) ;
        document.querySelector( TagName ).classList.remove( ClassName ) ;
    }

 /* Else we remove old class + clean memory + save, set OR toggle new CSS class  */
  
     else {        
        document.querySelector( TagName ).classList.remove( MemoryContent ) ;
        window.localStorage.removeItem( MemoryName ) ;

        localStorage.setItem( MemoryName, ClassName ) ;
        document.querySelector( TagName ).classList.toggle( ClassName ) ;
     }

 return false;
}

