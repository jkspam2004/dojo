# Testing your code

We're going to talk about two different ways you can test your project. You can
open your html file using the browser by right clicking your HTML file and 
selecting the option to open in the browser. This option is ok, but every time 
we make a change to any of our files we need to reload our browser window so that 
we can see the changes.

A better approach is to use the browser-sync package that we installed in the 
Welcome Chapter. From the root of your directory run the following command in 
your terminal.

`browser-sync start --server --files "*.html, css/*.css, js/*.js"`


Note: This will only work correctly if you used the same folder structure that 
we showed above. If you used a different name for your css folder or your js 
folder, update the command above accordingly.

It should have opened the browser window for you with the current state of your 
HTML project. If it didn't or you closed the browser window by accident you can 
visit http://localhost:3000 . Now with browser-sync every time that you make a 
change to any of your files your browser will reload automatically with your changes.

Another cool feature of browser-sync is that it makes it way easier to work with your cohort mates. If you take a look at your console, browser-sync outputs a couple of different URLs to the console.

Local: http://localhost:3000
External: http://192.168.1.54:3000
The local URL is the one you will be visiting to look at your code and the external 
URL is a URL you can send to anyone connected to the same wi-fi. They will be able to 
see the state of your project in real-time on their browser window as well.
