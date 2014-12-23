Zack's Amazingly Compact and Komplete Server (ZACKS)
===========

This repo holds the code that runs [my homepage](http://zacksheppard.com).

I wanted to be able to host a simple server for free on [Heroku](http://heroku.com),
so I wrote an itty-bitty Node.js server.

I got the basics of the server from [this Stack Overflow question](http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server).
I then added a startup loop that will compile all the LESS files in `static/less` so I didn't
have to worry about moving CSS files around.

The site's design is modified from [@mdo](https://twitter.com/mdo)'s Cover template
for [Bootstrap](http://getbootstrap.com).

This is mostly here so you can see my code, not so you can clone it. If you are going to clone it,
change the data so you're not me anymore and aren't sending me your Google Analytics data.
