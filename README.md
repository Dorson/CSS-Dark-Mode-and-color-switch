# CSS Dark Mode and Color Theme Switch
Simple DarkMode AND multi color theme switch for Websites and apps.

# Try it here : https://dorson.github.io/CSS-Dark-Mode-and-color-switch/


# Why ?
 We need this for the night time and our eyesight health.
 

# How to use  / How it works ?
 
 1. Define color variables in CSS. As groups of html.className rules.
    Use those named color variables, instead of direct color values inside
    of following CSS rules later on.
    
    
 2. Activate the html.class color theme by setting and saving the
    CSS class of the HTML Tag with the JavaScript function call from
    the button or link, or click, etc..
    
    We can lazzy-load this JavaScript function from an external js-file,
    in the part of the page or app where user settings are set.
 
 
 3. On-page-Load we set the last-saved HTML Tag's CSS color class
    to remember the last saved ColorMode setting from the
    LocalMemory of the browser.
 
    We need to do that on every page load with an event call of the JS functon.
    Can use the js-file with that CSS class settings memory recall function on top
    of page, before the page DOM frame is painted.
    
    CSS is missing style rules with read-access of the localMemory,
    so we need to use JavaSript for that :-(
    
    In the best case future of the CSS standard: we could just have read-only acess to
    the LocalMeory list values of the browser, so that we could use the following
    CSS rule, instead of the JavaScript to remember the last color setting of the user:
    
    html[localMemory( ColorTheme == dark )] { backgrund: black ; }
    
    OR similar as we do in the media rules :

     @localMemory( ColorTheme == dark ) {
        html , body { background: black ;  }
      }
    
    One could wish for the better CSS flexibility in the future :-)
    

# Remember to keep the code open source as the original !

 Have fun ! 
 
 

# Related, useful links :

Color and style principles for the dark mode colors on websites and in apps:

https://material.io/design/color/dark-theme.html



