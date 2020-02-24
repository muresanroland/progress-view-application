import Task from '../types/Task';
import { TaskActionType, GET_TASKS, UPDATE_TASK } from '../types/actions';
interface initState {
  taskList: Task[];
}

interface returnValue {
  taskList: Task[];
}

const initialState: initState = {
  taskList: []
};

const taskReducer = (state = initialState, action: TaskActionType): returnValue => {
  switch (action.type) {
    case GET_TASKS:
    case UPDATE_TASK: {
      return {
        ...state,
        taskList: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default taskReducer;
