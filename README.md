# Chatterbox

# Installation

`meteor add poetic:chatterbox`

# Usage

First initialize your chatbot with the `Chatterbox` constructor, passing a name as the only parameter.

```
Chatbot = new Chatterbox('Bot');
```

Then call `listen` on your new Chatbot.

```
Chatbot.listen(Posts, {listenTo: 'body', listenFor: /testing/, chatAs: 'author'}, (userId, post) => {
  // userId and post are the same objects passed from the collection hooks package
})
```

Your Chatbot will now listen to the `body` property on every new post that is created. When the post's body passes a regex test against your `listenFor` argument the callback will be run.

If you'd like your Chatbot to get in on the conversation simply call `chat`.

```
Chatbot.chat(Posts, {chatAs: 'author',
  message: {
    // properties of your Posts collection go here
  }
})
```

Make sure that, whether you `chat` or `listen`, always `chatAs` the same property, or your bot will start talking to itself. The above example will yield a post by the Chatbot that has the name `Bot` attached to the `author` property.
