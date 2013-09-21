# Prismatic for Mobile

A very simple mobile (web app) version of
[Prismatic application](http://getprismatic.com/).

This version is increadibly simplistic and is just meant for commuters like me
that don't own an iPhone. It retrieves articles through the Prismatic API
and presents to you with the help of jQuery Mobile and Angular.JS.

# Limitations
Due to browser security policies and the way the Prismatic API works, I could
not implement certain features that Prismatic web app provides. Among others,
the Prismatic web app sents HTTP POST-requests every time you click a link.
I assume that they do this to collect more data about your interests and
thus to improve their article recommendations. As this mobile app doesn't know
a thing about your login credentials (which I don't want to change), I cannot
forge these requests. This means that Prismatic recommendations will not
improve when using this app!

Another feature of their web app is the ability to *remove articles*,
i.e. to click the X-Button in their application. Again, I would assume that
they use this information to build a negative training set. When doing this in
the web interface, they send an HTTP POST-request. Like before, this is not
possible due to the SOP.

# License (MIT)

Copyright (c) 2013 Ben Ripkens

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
