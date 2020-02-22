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

export const GET_STEPS = 'GET_STEPS';
export const UPDATE_STEPS = 'UPDATE_STEP';

export const GET_TASKS = 'GET_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';

export const VALIDATION_ERROR = 'VALIDATION_ERROR';

export interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface ValidationError {
  type: typeof VALIDATION_ERROR;
  errorMessage: string;
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

export interface GetStepsAction {
  type: typeof GET_STEPS;
  payload: Step[];
}

export interface UpdateStepAction {
  type: typeof GET_STEPS;
  payload: Step;
}

export interface GetTasksAction {
  type: typeof GET_TASKS;
  payload: Task[];
}

export interface UpdateTask {
  type: typeof UPDATE_TASK;
  payload: Task;
}

export type LoginActionTypes = LoginAction | LogoutAction;

export type LoadingActionType = StartLoadingAction | StopLoadingAction;

export type PipelineActionType =
  | GetPipelinesAction
  | CreatePipelineAction
  | UpdatePipelineAction
  | DeletePipeLine;

export type StepActionType = GetStepsAction | UpdateStepAction;

export type TaskActionType = GetTasksAction | UpdateTask;

export type ValidationErrorType = ValidationError;

export type AppActionTypes =
  | LoginActionTypes
  | LoadingActionType
  | PipelineActionType
  | StepActionType
  | TaskActionType
  | ValidationErrorType;
