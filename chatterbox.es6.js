Chatterbox = class Chatterbox {
  constructor (name){
    check(name, String)

    if (name) {
      this.name = name

    } else {
      throw new Error('Chatterbox must be initialized with a name.')
    }
  }

  listen (collection, params, callback){
    check(params, {
      listenTo: String, listenFor: RegExp, chatAs: String
    })
    check(callback, Function)

    collection.after.insert((userId, doc) => {
        // make sure the bot does not reply to itself
      if (doc[params.chatAs] === this.name) { return }

      if (params.listenFor.test(doc[params.listenTo])) {
        callback(userId, doc)
      }
    })
  }

  chat (collection, params){
    check(params, {chatAs: String, message: Object})

    params.message[params.chatAs] = this.name
    return collection.insert(params.message)
  }
}
