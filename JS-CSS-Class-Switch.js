/*
-+++++ JavaScript CSS Class Switch function for websites and HTML apps.  +++-
--- Original author :: Nik K. linkedin.com/in/nik--k---/   (  4.Feb 2020). 
--- Code adoption   :: YourName  (date).
--- License         :: GNU General Public License v 3.0.
--- Latest version	:: github.com/Dorson/CSS-Dark-Mode-and-color-switch
*/

window.onerror = null ;

/*  Switch ON,OFF CSS class + Save it in local memory. */

function ClassSwitch(TagName, ClassName, MemoryName) {

 /* If class was already set, then switch it OFF and clean memory */
  
    if (localStorage.getItem( MemoryName ) === ClassName ) {
        localStorage.removeItem( MemoryName );
        document.querySelector( TagName ).classList.remove( ClassName );
    }

 /* Else we clean old memory, save and set new setting  */
  
     else {
        var MemoryContent = localStorage.getItem( MemoryName );

        document.querySelector( TagName ).classList.remove( MemoryContent );
        localStorage.removeItem( MemoryName );

        localStorage.setItem( MemoryName, ClassName );
        document.querySelector( TagName ).classList.add( ClassName );
     }

    return false;
}

