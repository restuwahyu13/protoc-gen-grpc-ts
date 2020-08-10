/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.com.book.Book', null, global);
goog.exportSymbol('proto.com.book.BookStore', null, global);
goog.exportSymbol('proto.com.book.EnumSample', null, global);
goog.exportSymbol('proto.com.book.GetBookRequest', null, global);
goog.exportSymbol('proto.com.book.GetBookViaAuthorRequest', null, global);
goog.exportSymbol('proto.com.book.OneOfSample', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.book.Book = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.book.Book, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.book.Book.displayName = 'proto.com.book.Book';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.book.Book.prototype.toObject = function(opt_includeInstance) {
  return proto.com.book.Book.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.book.Book} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.Book.toObject = function(includeInstance, msg) {
  var f, obj = {
    isbn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    author: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.book.Book}
 */
proto.com.book.Book.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.book.Book;
  return proto.com.book.Book.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.book.Book} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.book.Book}
 */
proto.com.book.Book.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIsbn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.book.Book.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.book.Book.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.book.Book} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.Book.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsbn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 isbn = 1;
 * @return {number}
 */
proto.com.book.Book.prototype.getIsbn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.com.book.Book.prototype.setIsbn = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.com.book.Book.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.com.book.Book.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string author = 3;
 * @return {string}
 */
proto.com.book.Book.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.com.book.Book.prototype.setAuthor = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.book.GetBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.book.GetBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.book.GetBookRequest.displayName = 'proto.com.book.GetBookRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.book.GetBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.book.GetBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.book.GetBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.GetBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    isbn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.book.GetBookRequest}
 */
proto.com.book.GetBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.book.GetBookRequest;
  return proto.com.book.GetBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.book.GetBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.book.GetBookRequest}
 */
proto.com.book.GetBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIsbn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.book.GetBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.book.GetBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.book.GetBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.GetBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsbn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 isbn = 1;
 * @return {number}
 */
proto.com.book.GetBookRequest.prototype.getIsbn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.com.book.GetBookRequest.prototype.setIsbn = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.book.GetBookViaAuthorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.book.GetBookViaAuthorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.book.GetBookViaAuthorRequest.displayName = 'proto.com.book.GetBookViaAuthorRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.book.GetBookViaAuthorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.book.GetBookViaAuthorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.book.GetBookViaAuthorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.GetBookViaAuthorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    author: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.book.GetBookViaAuthorRequest}
 */
proto.com.book.GetBookViaAuthorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.book.GetBookViaAuthorRequest;
  return proto.com.book.GetBookViaAuthorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.book.GetBookViaAuthorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.book.GetBookViaAuthorRequest}
 */
proto.com.book.GetBookViaAuthorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.book.GetBookViaAuthorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.book.GetBookViaAuthorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.book.GetBookViaAuthorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.GetBookViaAuthorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string author = 1;
 * @return {string}
 */
proto.com.book.GetBookViaAuthorRequest.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.book.GetBookViaAuthorRequest.prototype.setAuthor = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.book.BookStore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.book.BookStore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.book.BookStore.displayName = 'proto.com.book.BookStore';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.book.BookStore.prototype.toObject = function(opt_includeInstance) {
  return proto.com.book.BookStore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.book.BookStore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.BookStore.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    booksMap: (f = msg.getBooksMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.book.BookStore}
 */
proto.com.book.BookStore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.book.BookStore;
  return proto.com.book.BookStore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.book.BookStore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.book.BookStore}
 */
proto.com.book.BookStore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = msg.getBooksMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt64, jspb.BinaryReader.prototype.readString, null, 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.book.BookStore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.book.BookStore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.book.BookStore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.BookStore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBooksMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeInt64, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.com.book.BookStore.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.book.BookStore.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<int64, string> books = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.com.book.BookStore.prototype.getBooksMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.com.book.BookStore.prototype.clearBooksMap = function() {
  this.getBooksMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.book.OneOfSample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.book.OneOfSample.oneofGroups_);
};
goog.inherits(proto.com.book.OneOfSample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.book.OneOfSample.displayName = 'proto.com.book.OneOfSample';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.book.OneOfSample.oneofGroups_ = [[1,2],[3,4]];

/**
 * @enum {number}
 */
proto.com.book.OneOfSample.SingleWordsCase = {
  SINGLE_WORDS_NOT_SET: 0,
  A1: 1,
  B1: 2
};

/**
 * @return {proto.com.book.OneOfSample.SingleWordsCase}
 */
proto.com.book.OneOfSample.prototype.getSingleWordsCase = function() {
  return /** @type {proto.com.book.OneOfSample.SingleWordsCase} */(jspb.Message.computeOneofCase(this, proto.com.book.OneOfSample.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.com.book.OneOfSample.TwoWordsCase = {
  TWO_WORDS_NOT_SET: 0,
  A_2: 3,
  B_2: 4
};

/**
 * @return {proto.com.book.OneOfSample.TwoWordsCase}
 */
proto.com.book.OneOfSample.prototype.getTwoWordsCase = function() {
  return /** @type {proto.com.book.OneOfSample.TwoWordsCase} */(jspb.Message.computeOneofCase(this, proto.com.book.OneOfSample.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.book.OneOfSample.prototype.toObject = function(opt_includeInstance) {
  return proto.com.book.OneOfSample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.book.OneOfSample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.OneOfSample.toObject = function(includeInstance, msg) {
  var f, obj = {
    a1: jspb.Message.getFieldWithDefault(msg, 1, false),
    b1: jspb.Message.getFieldWithDefault(msg, 2, false),
    a2: jspb.Message.getFieldWithDefault(msg, 3, false),
    b2: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.book.OneOfSample}
 */
proto.com.book.OneOfSample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.book.OneOfSample;
  return proto.com.book.OneOfSample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.book.OneOfSample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.book.OneOfSample}
 */
proto.com.book.OneOfSample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setA1(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setB1(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setA2(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setB2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.book.OneOfSample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.book.OneOfSample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.book.OneOfSample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.book.OneOfSample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool a1 = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.getA1 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.com.book.OneOfSample.prototype.setA1 = function(value) {
  jspb.Message.setOneofField(this, 1, proto.com.book.OneOfSample.oneofGroups_[0], value);
};


proto.com.book.OneOfSample.prototype.clearA1 = function() {
  jspb.Message.setOneofField(this, 1, proto.com.book.OneOfSample.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.hasA1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool b1 = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.getB1 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.com.book.OneOfSample.prototype.setB1 = function(value) {
  jspb.Message.setOneofField(this, 2, proto.com.book.OneOfSample.oneofGroups_[0], value);
};


proto.com.book.OneOfSample.prototype.clearB1 = function() {
  jspb.Message.setOneofField(this, 2, proto.com.book.OneOfSample.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.hasB1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool a_2 = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.getA2 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.com.book.OneOfSample.prototype.setA2 = function(value) {
  jspb.Message.setOneofField(this, 3, proto.com.book.OneOfSample.oneofGroups_[1], value);
};


proto.com.book.OneOfSample.prototype.clearA2 = function() {
  jspb.Message.setOneofField(this, 3, proto.com.book.OneOfSample.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.hasA2 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool b_2 = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.getB2 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.com.book.OneOfSample.prototype.setB2 = function(value) {
  jspb.Message.setOneofField(this, 4, proto.com.book.OneOfSample.oneofGroups_[1], value);
};


proto.com.book.OneOfSample.prototype.clearB2 = function() {
  jspb.Message.setOneofField(this, 4, proto.com.book.OneOfSample.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.book.OneOfSample.prototype.hasB2 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.com.book.EnumSample = {
  UNKNOWN: 0,
  STARTED: 1,
  RUNNING: 1
};

goog.object.extend(exports, proto.com.book);
