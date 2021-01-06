export type Dict<T> = {
  [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (args: T, idx?: number) => S
): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(dict).forEach((dKey, idx) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== "undefined") {
      out[dKey] = fn(thisItem, idx);
    }
  });
  return out;
}

// Array.prototype.reduce, but for Dict
export function reduceDict<T, S>(
  dict: Dict<T>,
  reducer: (acc: S, current: T, idx?: number) => S,
  initialVal: S
) {
  let val: S = initialVal;
  Object.keys(dict).forEach((dKey, idx) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== "undefined") {
      val = reducer(val, thisItem, idx);
    }
  });
  return val;
}

const extensions: Dict<string> = {
  typescript: ".ts",
  html: ".html",
  css: ".css",
};

const ages: Dict<number> = {
  nasim: 34,
  mehedi: 23,
  abir: 54,
};

// Examples
const result = mapDict(extensions, (val) => [val]);
const ageSum = reduceDict(
  ages,
  (acc, current) => {
    return acc + current;
  },
  0
);
const strConcat = reduceDict(
  extensions,
  (acc, current) => {
    return acc + current;
  },
  ""
);
