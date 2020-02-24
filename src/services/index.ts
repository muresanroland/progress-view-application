import axios from 'axios';
/**
 * Constants
 */
import { API_BASE_URL, API_PATHS } from '../constants';
/**
 * Types
 */
import Pipeline from '../types/Pipeline';
import User from '../types/User';
import Task from '../types/Task';

const userLoginService = async (username: string): Promise<User | boolean> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_PATHS.USER}?username=${username}`
    );
    if (response.status === 200) {
      if (response.data.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(response.data[0]));
        return response.data[0];
      }
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getAllPipelinesService = async (username: string): Promise<Pipeline[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_PATHS.PIPELINE}?created_by=${username}`
    );
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getPipelineService = async (id: number): Promise<Pipeline | boolean> => {
  try {
    const response = await axios.get(`${API_BASE_URL}${API_PATHS.PIPELINE}?id=${id}`);
    if (response.status === 200) {
      if (response.data.length > 0) {
        return response.data[0];
      }
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const updatePipelineService = async (pipeline: Pipeline): Promise<Pipeline | boolean> => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}${API_PATHS.PIPELINE}${pipeline.id}`,
      pipeline
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const createPipelineService = async (pipeline: Pipeline): Promise<Pipeline> => {
  try {
    const response = await axios.post(`${API_BASE_URL}${API_PATHS.PIPELINE}`, pipeline);
    if (response.status === 200) {
      return response.data;
    } else {
      return pipeline;
    }
  } catch (error) {
    console.error(error);
    return pipeline;
  }
};

const deletePipelineService = async (pipelineId: number): Promise<boolean> => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}${API_PATHS.PIPELINE}${pipelineId}`
    );
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getAllTasksService = async (username: string): Promise<Task[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_PATHS.TASK}?assigned_to=${username}`
    );
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateTaskService = async (task: Task): Promise<Task | boolean> => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}${API_PATHS.TASK}${task.id}`,
      task
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export {
  userLoginService,
  getAllPipelinesService,
  getPipelineService,
  updatePipelineService,
  createPipelineService,
  deletePipelineService,
  getAllTasksService,
  updateTaskService
};
