# Nobody Talk

Nobody Talk is a simple web app for anonymous conversation. It's entirely made for NodeJS using [Express][express] and [Socket.IO][socket-io] frameworks.

The app was based on [Socket.IO example][chat-example]. Most of what I did was, actually, removing some functionality I didn't want. Every thing is basically the same, except for a few customizations of mine.

## Installation

You will need [NodeJS][nodejs] and [NPM][npm]. Provided that, simply clone the project and:

```bash
$ npm install
$ npm start
```

If you only want to see it working, you can try it out [here][demo].

## Contributing

Pull requests are welcome. Here is a list of what I would like to do if I had some more time:
 - Notify clients some info like: when someone leaves or joins; how many are connected. That stuff;
 - Improved styling on the input box;
 - Fix an annoying non expected behavior on some browsers. It seems that the alignment of messages goes crazy on some computers, on such a way that the messages go further to the right at each new message. The weird part is that I have, currently, Firefox, Chromium and Chrome installed on my computer and it works just fine on them. I wonder why it goes crazy like that on some other computers.
 - Create some tests using PhantomJS or ZombieJS. I don't know which one to pick.

[nodejs]: http://nodejs.org/
[npm]: https://www.npmjs.org/
[express]: http://expressjs.com/
[socket-io]: http://socket.io/
[demo]: http://nobody-talk.herokuapp.com/
[chat-example]: https://github.com/Automattic/socket.io/tree/master/examples/chat
