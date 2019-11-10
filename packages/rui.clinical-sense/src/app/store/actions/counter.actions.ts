export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export type CounterActionTypes = Increment | Decrement;

export interface Increment {
  type: typeof INCREMENT;
}

export const increment = (): Increment => ({
  type: INCREMENT,
});

export interface Decrement {
  type: typeof DECREMENT;
}

export const decrement = (): Decrement => ({
  type: DECREMENT,
});
