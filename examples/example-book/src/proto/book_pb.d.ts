// package: com.book
// file: book.proto

import * as jspb from 'google-protobuf';

export class Book extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    isbn: number,
    title: string,
    author: string,
  }
}

export class GetBookRequest extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookRequest;
  static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
  export type AsObject = {
    isbn: number,
  }
}

export class GetBookViaAuthorRequest extends jspb.Message {
  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookViaAuthorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookViaAuthorRequest): GetBookViaAuthorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookViaAuthorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookViaAuthorRequest;
  static deserializeBinaryFromReader(message: GetBookViaAuthorRequest, reader: jspb.BinaryReader): GetBookViaAuthorRequest;
}

export namespace GetBookViaAuthorRequest {
  export type AsObject = {
    author: string,
  }
}

export class BookStore extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBooksMap(): jspb.Map<number, string>;
  clearBooksMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookStore.AsObject;
  static toObject(includeInstance: boolean, msg: BookStore): BookStore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookStore;
  static deserializeBinaryFromReader(message: BookStore, reader: jspb.BinaryReader): BookStore;
}

export namespace BookStore {
  export type AsObject = {
    name: string,
    booksMap: Array<[number, string]>,
  }
}

export class OneOfSample extends jspb.Message {
  hasA1(): boolean;
  clearA1(): void;
  getA1(): boolean;
  setA1(value: boolean): void;

  hasB1(): boolean;
  clearB1(): void;
  getB1(): boolean;
  setB1(value: boolean): void;

  hasA2(): boolean;
  clearA2(): void;
  getA2(): boolean;
  setA2(value: boolean): void;

  hasB2(): boolean;
  clearB2(): void;
  getB2(): boolean;
  setB2(value: boolean): void;

  getSingleWordsCase(): OneOfSample.SingleWordsCase;
  getTwoWordsCase(): OneOfSample.TwoWordsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneOfSample.AsObject;
  static toObject(includeInstance: boolean, msg: OneOfSample): OneOfSample.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneOfSample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneOfSample;
  static deserializeBinaryFromReader(message: OneOfSample, reader: jspb.BinaryReader): OneOfSample;
}

export namespace OneOfSample {
  export type AsObject = {
    a1: boolean,
    b1: boolean,
    a2: boolean,
    b2: boolean,
  }

  export enum SingleWordsCase {
    SINGLE_WORDS_NOT_SET = 0,
    A1 = 1,
    B1 = 2,
  }

  export enum TwoWordsCase {
    TWO_WORDS_NOT_SET = 0,
    A_2 = 3,
    B_2 = 4,
  }
}

export enum EnumSample {
  UNKNOWN = 0,
  STARTED = 1,
  RUNNING = 1,
}

