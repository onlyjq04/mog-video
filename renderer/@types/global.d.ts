declare type TAction<T extends enum, P = void> = P extends void
    ? { type: T }
    : {
          type: T
          payload: P
      }
