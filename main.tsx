// Extract the resolved type from a Promise
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Make all properties readonly except a few keys
type PartiallyMutable<T, K extends keyof T> =
  { readonly [P in Exclude<keyof T, K>]: T[P] } &
  { -readonly [P in Extract<keyof T, K>]: T[P] };
