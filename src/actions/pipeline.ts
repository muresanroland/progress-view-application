import { Dispatch } from 'redux';
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
  updatePipelineService,
  createPipelineService,
  deletePipelineService
} from '../services';
/**
 * Types
 */
import Pipeline from '../types/Pipeline';
import { AppState } from '../store/index';
import { AppActionTypes } from '../types/actions';
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

const updatePipelineAction = (pipeline: Pipeline): UpdatePipelineAction => ({
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
    const username = getState().login.currentUser?.name;
    console.log(username);
    getAllPipelinesService(username)
      .then((pipelines: Pipeline[]) => {
        if (pipelines.length) {
          dispatch(getPipelines(pipelines));
          dispatch(stopLoading());
        } else {
          dispatch(error('No pipelines found'));
          dispatch(stopLoading());
        }
      })
      .catch(error => {
        console.error(error);
        dispatch(error('Somethig went wrong'));
        dispatch(stopLoading());
      });
  };
};
