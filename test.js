
// type Middleware<T> = (f: (t: T) => T) => (t: T) => T;

// const aware: Middleware<number> = (f) => (t) => f(t) + 1;

// const bware: Middleware<number> = (f) => (t) => t + 1;

const aware = (f) => (n) => f(n) + 1;

const bware = (f) => (n) => n + 1;


console.log(bware(aware((n) => n))(9));

console.log(aware(bware((n) => n))(9));

console.log([aware, bware].reduce((res, next) => next(res), (n) => n)(9))
console.log([bware, aware].reduce((res, next) => next(res), (n) => n)(9))