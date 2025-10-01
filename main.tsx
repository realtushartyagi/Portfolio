// Extract the resolved type from a Promise
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Make all properties readonly except a few keys
type PartiallyMutable<T, K extends keyof T> =
  { readonly [P in Exclude<keyof T, K>]: T[P] } &
  { -readonly [P in Extract<keyof T, K>]: T[P] };


// Build route strings like "/users/123/posts/456"
type ID = string | number;
type Route<Path extends string, IdName extends string = 'id'> =
  `/${Path}/${IdName}` | `/${Path}`;

// Deep readonly using recursive mapped types (simple)
type DeepReadonly<T> = T extends Function ? T : {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};
