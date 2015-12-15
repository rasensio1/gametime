# gametime

Implementation of the classic "Snake" in ClojureScript
![Image of game](https://s3-us-west-2.amazonaws.com/rasensio-misc/Screen+Shot+2015-12-15+at+4.00.58+PM.png)


## Production: [Github Pages!](http://rasensio1.github.io/gametime/)


## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
