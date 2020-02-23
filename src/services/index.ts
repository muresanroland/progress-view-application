import axios from 'axios';
/**
 * Constants
 */
import { API_BASE_URL, API_PATHS } from '../constants';
/**
 * Types
 */
import Pipeline from '../types/Pipeline';

const userLoginService = async (username: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}${API_PATHS.USER}?username=${username}`);
    if (response.status === 200) {
      if (response.data.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(response.data[0]));
        return response.data[0];
      } else {
        return false;
      }
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

const getAllPipelinesService = async (username: string): Promise<Pipeline[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}${API_PATHS.PIPELINE}?created_by=${username}`);
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updatePipelineService = async (pipeline: Pipeline): Promise<Pipeline> => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}${API_PATHS.PIPELINE}${pipeline.id}`,
      pipeline
    );
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
    const response = await axios.delete(`${API_BASE_URL}${API_PATHS.PIPELINE}${pipelineId}`);
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

export {
  userLoginService,
  getAllPipelinesService,
  updatePipelineService,
  createPipelineService,
  deletePipelineService
};
