// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class metaverse extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save metaverse entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type metaverse must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("metaverse", id.toString(), this);
    }
  }

  static load(id: string): metaverse | null {
    return changetype<metaverse | null>(store.get("metaverse", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metaverseID(): BigInt {
    let value = this.get("metaverseID");
    return value!.toBigInt();
  }

  set metaverseID(value: BigInt) {
    this.set("metaverseID", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get w(): BigInt {
    let value = this.get("w");
    return value!.toBigInt();
  }

  set w(value: BigInt) {
    this.set("w", Value.fromBigInt(value));
  }

  get h(): BigInt {
    let value = this.get("h");
    return value!.toBigInt();
  }

  set h(value: BigInt) {
    this.set("h", Value.fromBigInt(value));
  }

  get d(): BigInt {
    let value = this.get("d");
    return value!.toBigInt();
  }

  set d(value: BigInt) {
    this.set("d", Value.fromBigInt(value));
  }

  get x(): BigInt {
    let value = this.get("x");
    return value!.toBigInt();
  }

  set x(value: BigInt) {
    this.set("x", Value.fromBigInt(value));
  }

  get y(): BigInt {
    let value = this.get("y");
    return value!.toBigInt();
  }

  set y(value: BigInt) {
    this.set("y", Value.fromBigInt(value));
  }

  get z(): BigInt {
    let value = this.get("z");
    return value!.toBigInt();
  }

  set z(value: BigInt) {
    this.set("z", Value.fromBigInt(value));
  }

  get updatedAtTimestamp(): BigInt {
    let value = this.get("updatedAtTimestamp");
    return value!.toBigInt();
  }

  set updatedAtTimestamp(value: BigInt) {
    this.set("updatedAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metaverses(): Array<string> {
    let value = this.get("metaverses");
    return value!.toStringArray();
  }

  set metaverses(value: Array<string>) {
    this.set("metaverses", Value.fromStringArray(value));
  }
}
