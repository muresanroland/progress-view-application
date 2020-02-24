export default interface Task {
  id: number;
  name: string;
  assigned_to: string;
  status: 'Pending' | 'Completed';
}

export const checkTaskType = (object: any): object is Task => {
  return (
    'id' in object && 'id' in object && 'assigned_to' in object && 'status' in object
  );
};
