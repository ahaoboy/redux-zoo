import { createProxy, getUntracked, isChanged } from "proxy-compare";

const original = { a: "1", c: "2", d: { e: "3" } };
const affected = new WeakMap();

const proxy = createProxy(original, affected);
const originalFromProxy = getUntracked(proxy);

Object.is(original, originalFromProxy); // true
isChanged(original, originalFromProxy, affected); // false
