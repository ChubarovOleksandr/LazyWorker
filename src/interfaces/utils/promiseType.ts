export type ResolveType<R = unknown> = (value: R) => void;
export type RejectType = (reason?: unknown) => void;

export interface PromiseInterface<R> {
  resolve: ResolveType<R>;
  reject: RejectType;
}
