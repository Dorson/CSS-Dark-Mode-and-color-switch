# CSS Dark Mode and Color Theme Switch
Simple DarkMode AND multi color theme switch for Websites and apps.

# Try it here : https://dorson.github.io/CSS-Dark-Mode-and-color-switch/


# Why ?
 We need this for the night time and our eyesight health.
 

# How to use  / How it works ?
 
 ## 1. Define color variables in CSS.
    Name, define and group together CSS color variables in groups for the
    :root.dark , html.dark {--color-background : gray ; } element rules.
    
    Use those named color variables, instead of direct color values inside
    of following CSS rules later on.
    
    
 ## 2. Activate and set the html.dark CSS color variables
    by setting and saving the CSS color class of the HTML Tag with
    the JavaScript function call from the button or link, or click, etc..
    
    We can lazzy-load this JavaScript function from an external js-file,
    in the part of the page or app where user settings are set.
 
 
 ## 3. Remeber and use the last-saved CSS color class during load.
    Do remember the last saved ColorMode memory setting from the
    localStorage of the browser.
 
    We need to do that on every page load with an event call of the JS
    RememberClasses() functon. We can use the js-file with that
    memory recall function on top of page, before the page
    DOM frame is painted.
    
    CSS is missing style rules with read-access to the localMemory,
    so we need to use JavaSript for that :-(
    
    In the best case future of the CSS standard: we could just have read-only acess to
    the localStorage values of the browser, so that we could use the following
    CSS rule, instead of the JavaScript to remember the last color setting of the user:
    
    html[localStorage( ColorTheme == dark )] { backgrund: black ; }
    
    OR similar as we do in the media rules :

     @localStorage( ColorTheme == "dark" ) {
        html , body { background: black ;  }
      }
    
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
