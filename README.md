# CSS Dark Mode and Color Theme Switch
Simple DarkMode AND multi color theme switch for Websites and apps.

# Try it here : https://dorson.github.io/CSS-Dark-Mode-and-color-switch/


# Why ?
 We need this for the night time and our eyesight health.
 

# How to use  / How it works ?
 
 1. Define color variables in CSS as groups of html.class rules.
    Use those color variables instead of direct color values inside of other CSS rules.
    
    
 2. Activate the html.class color themes by setting and saving the
    CSS class of the HTML Tag with the Javascrip function call from
    the button or link, or click, etc..
    
    We can lazzy-load this JavaScript function from an external js-file,
    in the part of the page or app where user settings are set.
 
 
 3. On-page-Load we set the last-saved HTML Tag's CSS color class
    to remember the last saved ColorMode setting from the
    Local Memory of the browser.
 
    We need to do that on every page load with an event call of the JS functon.
    Can use the js-file with that CSS class settings memory recall function on top
    of page, before the page DOM frame is painted.
    
    CSS is missing style rules with read-acess of the localMemory,
    so we need to use JavaSript for that :-(
    

# Remeber to keep the code open source as the original !

 Have fun ! 
 
 

# Related, useful links :

Color and style principles for the dark mode colors on websites and in apps:
https://material.io/design/color/dark-theme.html



