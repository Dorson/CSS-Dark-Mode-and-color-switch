# CSS Dark Mode and Color Theme Switch

Flexible Dark / Night Mode AND multi color theme switch for Websites and apps.
All basis CSS, clean Java Script and decentralized too !
It's nice to have sunset colors during the evening :-)

# See Live Demo here : https://dorson.github.io/CSS-Dark-Mode-and-color-switch/


# Why do we need it ?

We need this for the night time and our eyesight health. We need this for the pure HTML websites or HTML apps without user profiles. We need this pure CSS + JS color theme switch for the decentralized apps that work without servers. For all the cases, where we want to allow the user to switch theme colors without any login, or centralized profile.
 
Such server-less code snippets / tools will help us to build the next generation of the Internet apps. The web 4.0 should be more decentralized to the devices of the users, instead of the server farms of some evil corp. Also it helps the network engineers to have less workload on the server side :-)  😐😮 💡 🌗 🐙 😆😅😂


# How to use  / How it works ?
 
 ## 1. Define color variables in CSS.
 
    First: We name, define and group together the CSS color variables
    in CSS classes for the :root or the html tag. We basically create
    global CSS variables with color values and nice names.

```

<style>

 :root , :root.snow-white {

  --color-html: #0e0b0b ;
  --color-body: #241818 ;
  --color-text: #d1d1d1 ;
  --color-link: #4fbcff ;
  --color-selected-text: #000 ;
  --color-selected-bg: #CF7 ;

 }
 
 /*   Dark mode color variables, if "dark" is set as HTML tag's CSS class */

html.dark { 

--color-html: #0e0b0b ;
--color-body: #1a1010 ;
--color-text: #d1d1d1 ;
--color-link: #4fbcff ;
--color-selected-text: #000 ;
--color-selected-bg: #CF7 ;

}
 
</style>

```
    
    Then we use those named color variables, instead of direct color values inside
    of the other CSS rules later on.
    
    
```

<style>
 html { background: var(--color-html) ; }
 
 body {
  background: var(--color-body) ; color: var(--color-text) ;
  padding: 2rem 3% 3rem 3% ;
  min-height: 99% ; display: block ;
}
</style>

```
    
 ## 2. Activate and set the html.dark CSS color variables
    by setting and saving the CSS color class of the HTML Tag with
    the JavaScript function call from the button or link, or click, etc..
 
 
 ```
 
   <!-- This will switch beteen two defined color classes. -->
   
   < button    
     onclick="DualFlipClassSwitch('html' , 'dark' , 'snow-white' , 'ColorMode');"
    >
    🌓 ⇄ 💡
   </button>
    
   <!--
     This will switch ON, OFF one color. OFF means default color.
     Culd be an issue if the default browser color is similar to our color.
   -->
    
   < button 
     onclick="ClassSwitch('html' , 'purple' , 'ColorMode');"
    >
    🌓 ⇄ 💡
   </button>
    
```
    
    We can async / lazy-load the JavaScript switch function from
    an external JS-file, in the part of the HTML or app where user
    settings are set or re-set.
    
    No need to load it fast. Can be slow, because it's only active,
    when the user can already click something.
    
    
  ```
   < script
      async type="text/javascript"
      src="https://example.org/js/JS-CSS-Class-Switch-with-Memory.js"
    >
   </script>

  ```
    
 
 
 ## 3. Remember the last color class settings during load time.

  We need to remember our color settings on every new page load.
  To remember the color class settings we use the RememberClasses() function
  from the JS file of :


  ```

  JS-CSS-Class-Settings-Recall-on-load.js 

  ```


  We call the RememberClasses() function with an event call, when the page is
  loaded. Optimally in the <head>...</head> part of the HTML, where it's faster.


  ```
  
 <script>
 
  document.addEventListener("DOMContentLoaded", RememberClasses() , true ) ;
  
 </script>
 
  ```


  We can have this RememberClasses() function with an event call on top of every page,
  if we want to load the color class settings faster. 

  OR we can keep it in one simple file instead.
  And we can load it from the external Java Script file without the need to write
  in on every page. The RememberClasses() function must be loaded fast, to
  remember the color settings qickly. Keep settings files cached, simple and small !
  External JS files on over-loaded pages will react slower !


  Optimally we load the settings file in the <head>...</head> part of the HTML,
  where it loads faster. If the code logic permits us, then the settings file should
  be loaded before any other script. So load the other non-essential scripts with async !


```
  
  < script type="text/javascript"
    src="https://example.org/js/JS-CSS-Class-Settings-Recall-on-load.js"
    >
  </script>

```

   This is how we can have user settings without server profiles or accounts :-)
   The basic, non-safety settings can live in the localStorage of the borwser.



  ### In the Better Future : 
    In 2020 the CSS is missing style rules with read access to the localStorage memory,
    so we need to use dynamic JavaSript events for settings recall :-( 😟 😓 😢 😭 
    
    In the best case future of the CSS standard: we could just have read-only access to
    the localStorage values of the browser, so that we could use the following
    CSS rule, instead of the JavaScript to remember the last color setting of the user:
 
 
```
  Possible future realty example: 
  
    html[localStorage( ColorTheme == dark )] { background: black ; }
    
    OR similar as we do in the media rules :

     @localStorage( ColorTheme == "dark" ) {
        html , body { background: black ;  }
      }
 ```
 
    We could wish for the better CSS flexibility in the future :-)
    

# Give us a like and stars on Github ☆☆☆☆☆ !

Have fun using our code. Keep it fun for others too.
Keep the code open source as the original !

Have fun ! 
 
 

# Related, useful links :

Color and style principles for the dark mode colors on websites and in apps:

https://material.io/design/color/dark-theme.html


Good color picker tool for finding good theme colors:

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool


Alternative color picker tool :

https://www.w3schools.com/colors/colors_picker.asp
