import Task from '../types/Task';
import {
  GetTasksAction,
  GET_TASKS,
  UpdateTaskAction,
  UPDATE_TASK,
  AppActionTypes
} from '../types/actions';
import { Dispatch } from 'react';
import { AppState } from '../store';
import isEqual from 'react-fast-compare';

/**
 * Services
 */
import { getAllTasksService, updateTaskService } from '../services';
/**
 * Actions
 */
import { startLoading, stopLoading } from './loading';
import { error } from './error';
/**
 * Types
 */
import { checkTaskType } from '../types/Task';

/**
 * Task action creators
 */
const getAllTasks = (taskList: Task[]): GetTasksAction => ({
  type: GET_TASKS,
  payload: taskList
});

const updateTask = (task: Task): UpdateTaskAction => ({
  type: UPDATE_TASK,
  payload: task
});

export const doGetAllTasks = () => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    dispatch(error(''));
    const username = getState().login.currentUser.username;
    getAllTasksService(username)
      .then(tasks => {
        if (tasks.length) {
          dispatch(getAllTasks(tasks));
          dispatch(stopLoading());
        } else {
          dispatch(error('No tasks found'));
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

export const doUpdateTask = (task: Task) => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    dispatch(error(''));
    updateTaskService(task)
      .then(responseData => {
        if (checkTaskType(responseData) && isEqual(responseData, task)) {
          dispatch(updateTask(responseData));
          dispatch(stopLoading());
        } else {
          dispatch(error('Task not updated'));
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
