/**
 * Types
 */
import Pipeline from '../types/Pipeline';
import { GET_PIPELINE } from '../types/actions';
import {
  PipelineActionType,
  GET_PIPELINES,
  UPDATE_PIPELINE,
  CREATE_PIPELINE,
  DELETE_PIPELINE
} from '../types/actions';
/**
 * Utils
 */
import { updateElementInArray } from '../utils';

interface initState {
  pipelineList: Pipeline[];
  currentPipeline?: Pipeline;
}

interface returnValue {
  pipelineList: Pipeline[];
  currentPipeline?: Pipeline;
}

const initialState: initState = {
  pipelineList: []
};

const pipelineReducer = (
  state = initialState,
  action: PipelineActionType
): returnValue => {
  switch (action.type) {
    case GET_PIPELINES: {
      return {
        ...state,
        pipelineList: action.payload
      };
    }
    case GET_PIPELINE: {
      return {
        ...state,
        currentPipeline: action.payload
      };
    }
    case UPDATE_PIPELINE: {
      return {
        ...state,
        currentPipeline: action.payload,
        pipelineList: updateElementInArray(action.payload, state.pipelineList)
      };
    }
    case CREATE_PIPELINE: {
      return {
        ...state,
        pipelineList: [...state.pipelineList, action.payload],
        currentPipeline: action.payload
      };
    }
    case DELETE_PIPELINE: {
      return {
        ...state
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default pipelineReducer;
