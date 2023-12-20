export function array_equals(a1: any[], a2: any[]) {
  // if the other array is a falsy value, return
  if (!a2) return false;

  // compare lengths - can save a lot of time
  if (a1.length != a2.length) return false;

  for (var i = 0, l = a1.length; i < l; i++) {
    // Check if we have nested arrays
    if (a1[i] instanceof Array && a2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!a1[i].equals(a2[i])) return false;
    } else if (a1[i] != a2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function array_random<T>(arr: T[]): T {
  if (arr.length == 0) return null as any;
  if (arr.length == 1) return arr[0];
  return arr[getRandomInt(arr.length)];
}

export const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export function markov(terms: string[], marray: any[][]) {
  return ([ix, term]: [number, string[]]): [number, string[]] => {
    let rix = marray.length;
    let roll = Math.random();
    while (rix > 0) {
      rix = rix - 1;
      if (marray[ix][rix] > roll) break;
      roll = roll - marray[ix][rix];
    }
    return [rix, terms];
  };
}
