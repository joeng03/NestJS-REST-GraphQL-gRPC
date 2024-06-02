// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.20.3
// source: payment.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "paymentproto";

export enum Currency {
  SGD = 0,
  USD = 1,
  EUR = 2,
  JPY = 3,
  GBP = 4,
  CNY = 5,
  MYR = 6,
  UNRECOGNIZED = -1,
}

export function currencyFromJSON(object: any): Currency {
  switch (object) {
    case 0:
    case "SGD":
      return Currency.SGD;
    case 1:
    case "USD":
      return Currency.USD;
    case 2:
    case "EUR":
      return Currency.EUR;
    case 3:
    case "JPY":
      return Currency.JPY;
    case 4:
    case "GBP":
      return Currency.GBP;
    case 5:
    case "CNY":
      return Currency.CNY;
    case 6:
    case "MYR":
      return Currency.MYR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Currency.UNRECOGNIZED;
  }
}

export function currencyToJSON(object: Currency): string {
  switch (object) {
    case Currency.SGD:
      return "SGD";
    case Currency.USD:
      return "USD";
    case Currency.EUR:
      return "EUR";
    case Currency.JPY:
      return "JPY";
    case Currency.GBP:
      return "GBP";
    case Currency.CNY:
      return "CNY";
    case Currency.MYR:
      return "MYR";
    case Currency.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Cat {
  id: number;
  name: string;
  age: number;
  breedId: number;
  imageLink: string;
}

export interface Breed {
  id: number;
  name: string;
  cats: Cat[];
}

export interface Customer {
  id: number;
  name: string;
}

export interface Payment {
  id: number;
  customerId: number;
  catId: number;
  amount: number;
  currency: Currency;
}

export interface PaymentRequest {
  customerId: number;
  catId: number;
  amount: number;
  currency: Currency;
}

export interface PaymentResponse {
  id: number;
  customer: Customer | undefined;
  cat: Cat | undefined;
  amount: number;
  currency: Currency;
}

function createBaseCat(): Cat {
  return { id: 0, name: "", age: 0, breedId: 0, imageLink: "" };
}

export const Cat = {
  encode(message: Cat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(24).int32(message.age);
    }
    if (message.breedId !== 0) {
      writer.uint32(32).int32(message.breedId);
    }
    if (message.imageLink !== "") {
      writer.uint32(42).string(message.imageLink);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.age = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.breedId = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.imageLink = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Cat {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      age: isSet(object.age) ? globalThis.Number(object.age) : 0,
      breedId: isSet(object.breedId) ? globalThis.Number(object.breedId) : 0,
      imageLink: isSet(object.imageLink) ? globalThis.String(object.imageLink) : "",
    };
  },

  toJSON(message: Cat): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.breedId !== 0) {
      obj.breedId = Math.round(message.breedId);
    }
    if (message.imageLink !== "") {
      obj.imageLink = message.imageLink;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Cat>, I>>(base?: I): Cat {
    return Cat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Cat>, I>>(object: I): Cat {
    const message = createBaseCat();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    message.breedId = object.breedId ?? 0;
    message.imageLink = object.imageLink ?? "";
    return message;
  },
};

function createBaseBreed(): Breed {
  return { id: 0, name: "", cats: [] };
}

export const Breed = {
  encode(message: Breed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.cats) {
      Cat.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Breed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBreed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cats.push(Cat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Breed {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      cats: globalThis.Array.isArray(object?.cats) ? object.cats.map((e: any) => Cat.fromJSON(e)) : [],
    };
  },

  toJSON(message: Breed): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.cats?.length) {
      obj.cats = message.cats.map((e) => Cat.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Breed>, I>>(base?: I): Breed {
    return Breed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Breed>, I>>(object: I): Breed {
    const message = createBaseBreed();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.cats = object.cats?.map((e) => Cat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCustomer(): Customer {
  return { id: 0, name: "" };
}

export const Customer = {
  encode(message: Customer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Customer {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Customer): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Customer>, I>>(base?: I): Customer {
    return Customer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Customer>, I>>(object: I): Customer {
    const message = createBaseCustomer();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBasePayment(): Payment {
  return { id: 0, customerId: 0, catId: 0, amount: 0, currency: 0 };
}

export const Payment = {
  encode(message: Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.customerId !== 0) {
      writer.uint32(16).int32(message.customerId);
    }
    if (message.catId !== 0) {
      writer.uint32(24).int32(message.catId);
    }
    if (message.amount !== 0) {
      writer.uint32(37).float(message.amount);
    }
    if (message.currency !== 0) {
      writer.uint32(40).int32(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.customerId = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.catId = reader.int32();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.amount = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.currency = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Payment {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      customerId: isSet(object.customerId) ? globalThis.Number(object.customerId) : 0,
      catId: isSet(object.catId) ? globalThis.Number(object.catId) : 0,
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      currency: isSet(object.currency) ? currencyFromJSON(object.currency) : 0,
    };
  },

  toJSON(message: Payment): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.customerId !== 0) {
      obj.customerId = Math.round(message.customerId);
    }
    if (message.catId !== 0) {
      obj.catId = Math.round(message.catId);
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    if (message.currency !== 0) {
      obj.currency = currencyToJSON(message.currency);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Payment>, I>>(base?: I): Payment {
    return Payment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Payment>, I>>(object: I): Payment {
    const message = createBasePayment();
    message.id = object.id ?? 0;
    message.customerId = object.customerId ?? 0;
    message.catId = object.catId ?? 0;
    message.amount = object.amount ?? 0;
    message.currency = object.currency ?? 0;
    return message;
  },
};

function createBasePaymentRequest(): PaymentRequest {
  return { customerId: 0, catId: 0, amount: 0, currency: 0 };
}

export const PaymentRequest = {
  encode(message: PaymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerId !== 0) {
      writer.uint32(8).int32(message.customerId);
    }
    if (message.catId !== 0) {
      writer.uint32(16).int32(message.catId);
    }
    if (message.amount !== 0) {
      writer.uint32(29).float(message.amount);
    }
    if (message.currency !== 0) {
      writer.uint32(32).int32(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.customerId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.catId = reader.int32();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.amount = reader.float();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.currency = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.Number(object.customerId) : 0,
      catId: isSet(object.catId) ? globalThis.Number(object.catId) : 0,
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      currency: isSet(object.currency) ? currencyFromJSON(object.currency) : 0,
    };
  },

  toJSON(message: PaymentRequest): unknown {
    const obj: any = {};
    if (message.customerId !== 0) {
      obj.customerId = Math.round(message.customerId);
    }
    if (message.catId !== 0) {
      obj.catId = Math.round(message.catId);
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    if (message.currency !== 0) {
      obj.currency = currencyToJSON(message.currency);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentRequest>, I>>(base?: I): PaymentRequest {
    return PaymentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaymentRequest>, I>>(object: I): PaymentRequest {
    const message = createBasePaymentRequest();
    message.customerId = object.customerId ?? 0;
    message.catId = object.catId ?? 0;
    message.amount = object.amount ?? 0;
    message.currency = object.currency ?? 0;
    return message;
  },
};

function createBasePaymentResponse(): PaymentResponse {
  return { id: 0, customer: undefined, cat: undefined, amount: 0, currency: 0 };
}

export const PaymentResponse = {
  encode(message: PaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.customer !== undefined) {
      Customer.encode(message.customer, writer.uint32(18).fork()).ldelim();
    }
    if (message.cat !== undefined) {
      Cat.encode(message.cat, writer.uint32(26).fork()).ldelim();
    }
    if (message.amount !== 0) {
      writer.uint32(37).float(message.amount);
    }
    if (message.currency !== 0) {
      writer.uint32(40).int32(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customer = Customer.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cat = Cat.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.amount = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.currency = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      customer: isSet(object.customer) ? Customer.fromJSON(object.customer) : undefined,
      cat: isSet(object.cat) ? Cat.fromJSON(object.cat) : undefined,
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      currency: isSet(object.currency) ? currencyFromJSON(object.currency) : 0,
    };
  },

  toJSON(message: PaymentResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.customer !== undefined) {
      obj.customer = Customer.toJSON(message.customer);
    }
    if (message.cat !== undefined) {
      obj.cat = Cat.toJSON(message.cat);
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    if (message.currency !== 0) {
      obj.currency = currencyToJSON(message.currency);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentResponse>, I>>(base?: I): PaymentResponse {
    return PaymentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaymentResponse>, I>>(object: I): PaymentResponse {
    const message = createBasePaymentResponse();
    message.id = object.id ?? 0;
    message.customer = (object.customer !== undefined && object.customer !== null)
      ? Customer.fromPartial(object.customer)
      : undefined;
    message.cat = (object.cat !== undefined && object.cat !== null) ? Cat.fromPartial(object.cat) : undefined;
    message.amount = object.amount ?? 0;
    message.currency = object.currency ?? 0;
    return message;
  },
};

export interface PaymentService {
  makePayment(request: PaymentRequest): Promise<PaymentResponse>;
}

export const PaymentServiceServiceName = "paymentproto.PaymentService";
export class PaymentServiceClientImpl implements PaymentService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PaymentServiceServiceName;
    this.rpc = rpc;
    this.makePayment = this.makePayment.bind(this);
  }
  makePayment(request: PaymentRequest): Promise<PaymentResponse> {
    const data = PaymentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "makePayment", data);
    return promise.then((data) => PaymentResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
