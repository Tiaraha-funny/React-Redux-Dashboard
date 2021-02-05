import combineReducers from "redux";

function newComments() {
  return {
    type: "NEW_COMMENT",
  };
}
function newTasks() {
  return {
    type: "NEW_TASKS",
  };
}
function newOrders() {
  return {
    type: "NEW_ORDERS",
  };
}
function tickets() {
  return {
    type: "TICKETS",
  };
}

function orders() {
  return {
    type: "ORDERS",
  };
}
function tasks() {
  return {
    type: "TASKS",
  };
}
function messages() {
  return {
    type: "MESSAGES",
  };
}

function reducers(state, action) {
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

export const rootReducer = combineReducers({
    newComments: newCommentsReducer,
    newTasks: newTasksReducer,
    newOrders: newTasksReducer,
    tickets: ticketsReducer,
    orders: ordersReducer,
    tasks: tasksReducer,
    messages: messagesReducer,
})

