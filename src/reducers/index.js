export function newComments() {
  return {
    type: "NEW_COMMENT",
  };
}

export function newTasks() {
  return {
    type: "NEW_TASKS",
  };
}

export function newOrders() {
  return {
    type: "NEW_ORDERS",
  };
}
export function tickets() {
  return {
    type: "TICKETS",
  };
}

export function orders() {
  return {
    type: "ORDERS",
  };
}
export function tasks() {
  return {
    type: "TASKS",
  };
}
export function messages() {
  return {
    type: "MESSAGES",
  };
}

export default function reducers(state, action) {
  switch (action.type) {
    case "NEW_COMMENT":
      return { ...state };
    case "NEW_TASKS":
      return { ...state };
    case "NEW_ORDERS":
      return { ...state };
    case "TICKETS":
      return { ...state };
    case "ORDERS":
      return { ...state };
    case "TASKS":
      return { ...state };
    case "MESSAGES":
      return { ...state };
    default: {
      return state;
    }
  }
}

