import Pipeline from '../types/Pipeline';
import {
  PipelineActionType,
  GET_PIPELINES,
  UPDATE_PIPELINE,
  CREATE_PIPELINE,
  DELETE_PIPELINE
} from '../types/actions';

const initialState = {
  pipelines: []
};

interface returnValue {
  pipelines: Pipeline[];
}

const pipelineReducer = (
  state = initialState,
  action: PipelineActionType
): returnValue => {
  switch (action.type) {
    case GET_PIPELINES: {
      return {
        ...state,
        pipelines: action.payload
      };
    }
    case UPDATE_PIPELINE: {
      return {
        ...state,
        pipelines: [action.payload]
      };
    }
    case CREATE_PIPELINE: {
      return {
        ...state,
        pipelines: [...state.pipelines, action.payload]
      };
    }
    case DELETE_PIPELINE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default pipelineReducer;
