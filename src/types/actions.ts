import Pipeline from './Pipeline';
import Step from './Step';
import Task from './Task';
import User from './User';

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_PIPELINES = 'GET_PIPELINES';
export const CREATE_PIPELINE = 'CREATE_PIPELINE';
export const UPDATE_PIPELINE = 'UPDATE_PIPELINE';
export const DELETE_PIPELINE = 'DELETE_PIPELINE';

export interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface StartLoadingAction {
  type: typeof START_LOADING;
}

export interface StopLoadingAction {
  type: typeof STOP_LOADING;
}

export interface GetPipelinesAction {
  type: typeof GET_PIPELINES;
  payload: Pipeline[];
}

export interface CreatePipelineAction {
  type: typeof CREATE_PIPELINE;
  payload: Pipeline;
}

export interface UpdatePipelineAction {
  type: typeof UPDATE_PIPELINE;
  payload: Pipeline;
}

export interface DeletePipeLine {
  type: typeof DELETE_PIPELINE;
  payload: Pipeline;
}

export type LoginActionTypes = LoginAction | LogoutAction;

export type LoadingActionType = StartLoadingAction | StopLoadingAction;

export type PipelineActionType =
  | GetPipelinesAction
  | CreatePipelineAction
  | UpdatePipelineAction
  | DeletePipeLine;

export type AppActionTypes =
  | LoginActionTypes
  | LoadingActionType
  | PipelineActionType;
