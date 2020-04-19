/*
-++++ JavaScript CSS Class Toggle Switch with Memory, for websites and HTML apps. ++-
--- Original author :: Nik K. linkedin.com/in/nik--k---/   (  4.Feb 2020). 
--- Code adoption   :: YourName  (date).
--- License         :: GNU General Public License v 3.0.
--- Latest version  :: github.com/Dorson/CSS-Dark-Mode-and-color-switch
*/

window.onerror = null ;

/*  CSS class Toggle Switch. ON,OFF CSS class + remember in localStorage memory. */


function ClassSwitch( TagName, ClassName, MemoryName ) {


 /* We use const variables to avoid logic errors, if their values change during process. */

 const ClassWasActive = document.querySelector( TagName ).classList.contains( ClassName ) ;

 const OldMemory = window.localStorage.getItem( MemoryName ) ;


 /* If class is New and NOT-active. We remove possible OldMemory class.
   Deep Clean memory cell. Activate and remember new CSS class in clean memory. 
 */
  
    if ( !ClassWasActive && ( OldMemory !== ClassName ) ) {

       if ( OldMemory ) {
            document.querySelector( TagName ).classList.remove( OldMemory ) ;
            window.localStorage.removeItem( MemoryName ) ;
        }

        document.querySelector( TagName ).classList.add( ClassName ) ;
        window.localStorage.setItem( MemoryName , ClassName ) ;
     }

   /* Else CSS class was already active OR the switch memory was not clean.
      We toggle given class. Remove possible OldMemory class. Deep Clean memory cell. 
   */
  
     else {

        document.querySelector( TagName ).classList.toggle( ClassName ) ;

         if ( OldMemory ) {
            document.querySelector( TagName ).classList.remove( OldMemory ) ;
            window.localStorage.removeItem( MemoryName ) ;
         }

      }

 return false ;

}


/* 
   Dual Flip CSS class Toggle Switch. Set THis OR the OTher CSS class.
   Flips or changes CSS class between two given options.
   If Class1 was NOT active: We switch it ON. Else: we flip switch Class2 ON.
   Only one can exist at the same time ! Class1 will always be switched on first !
*/


function DualFlipClassSwitch( TagName , Class1 , Class2 , MemoryName ) {

 const ClassWasActive = document.querySelector( TagName ).classList.contains( Class1 ) ; 

 if ( !ClassWasActive ) { ClassSwitch( TagName , Class1 , MemoryName ) ; }

 else { ClassSwitch( TagName , Class2 , MemoryName ) ; }

 return false ;

}

