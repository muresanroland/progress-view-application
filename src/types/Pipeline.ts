type stepId = {
  id: number;
};

export default interface Pipeline {
  id?: number;
  name: string;
  steps: stepId[];
  created_by: string;
}

export const checkPipelineType = (object: any): object is Pipeline => {
  return 'name' in object && 'steps' in object && 'created_by' in object;
};
