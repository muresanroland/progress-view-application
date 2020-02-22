type stepId = {
  id: number;
};

export default interface Pipeline {
  id: number;
  name: string;
  steps: stepId[];
  created_by: string;
}
