import { Dispatch } from 'redux';
import isEqual from 'react-fast-compare';
/**
 * Actions
 */
import { startLoading, stopLoading } from './loading';
import { error } from './error';
/**
 * Services
 */
import {
  getAllPipelinesService,
  getPipelineService,
  updatePipelineService,
  createPipelineService,
  deletePipelineService
} from '../services';
/**
 * Types
 */
import Pipeline from '../types/Pipeline';
import { AppState } from '../store';
import { AppActionTypes, GetPipelineAction, GET_PIPELINE } from '../types/actions';
import { checkPipelineType } from '../types/Pipeline';
import {
  GET_PIPELINES,
  GetPipelinesAction,
  UpdatePipelineAction,
  UPDATE_PIPELINE,
  CreatePipelineAction,
  CREATE_PIPELINE,
  DeletePipeLine,
  DELETE_PIPELINE
} from '../types/actions';

/**
 * Pipeline action creators
 */
const getPipelines = (pipelines: Pipeline[]): GetPipelinesAction => ({
  type: GET_PIPELINES,
  payload: pipelines
});

const getPipeline = (pipeline: Pipeline): GetPipelineAction => ({
  type: GET_PIPELINE,
  payload: pipeline
});

const updatePipeline = (pipeline: Pipeline): UpdatePipelineAction => ({
  type: UPDATE_PIPELINE,
  payload: pipeline
});

const createPipeline = (pipeline: Pipeline): CreatePipelineAction => ({
  type: CREATE_PIPELINE,
  payload: pipeline
});

const deletePipeline = (): DeletePipeLine => ({
  type: DELETE_PIPELINE
});

/**
 * Actions
 */
export const doGetPipelines = () => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    dispatch(error(''));
    const username = getState().login.currentUser.username;
    getAllPipelinesService(username)
      .then(pipelines => {
        if (pipelines.length) {
          dispatch(getPipelines(pipelines));
          dispatch(stopLoading());
        } else {
          dispatch(error('No pipelines found'));
          dispatch(stopLoading());
        }
      })
      .catch(err => {
        console.error(err);
        dispatch(error('Somethig went wrong'));
        dispatch(stopLoading());
      });
  };
};

export const doGetAllPipeline = (id: number) => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    dispatch(error(''));
    getPipelineService(id)
      .then(pipeline => {
        if (checkPipelineType(pipeline)) {
          dispatch(getPipeline(pipeline));
          dispatch(stopLoading());
        } else {
          dispatch(error('Pipeline not found'));
          dispatch(stopLoading());
        }
      })
      .catch(err => {
        console.error(err);
        dispatch(error('Something went wrong'));
        dispatch(stopLoading());
      });
  };
};

export const doUpdatePipeline = (pipeline: Pipeline) => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    dispatch(error(''));
    updatePipelineService(pipeline)
      .then(responseData => {
        if (checkPipelineType(responseData) && isEqual(responseData, pipeline)) {
          dispatch(updatePipeline(responseData));
          dispatch(stopLoading());
        } else {
          dispatch(error('Pipeline not updated'));
          dispatch(stopLoading());
        }
      })
      .catch(err => {
        console.error(err);
        dispatch(error('Something went wrong'));
        dispatch(stopLoading());
      });
  };
};
