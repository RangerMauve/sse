
# sse

  Server Sent Events library for making EventSource nicer to work with

## Installation

  Install with [component(1)](http://component.io):

    $ component install rangermauve/sse

## Usage

Guide to using Server Sent Events on [mdn](https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events);

Uses API from [EventEmitter2](https://github.com/asyncly/EventEmitter2)

Exports constructor which takes a URL to listen to events on.

``` javascript
  var SSE = require("sse");
  var events = new SSE("/events");
  events.on("message",function(data){
  	console.log(data);
  });
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 RangerMauve

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.