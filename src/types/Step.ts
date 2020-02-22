type Statistic = {
  columns: number;
  rows: number;
};

type Task = {
  id: number;
};

export default interface Step {
  id: number;
  name:
    | 'Normalization'
    | 'Categorization'
    | 'Deduplication'
    | 'Loading'
    | 'Delivery';
  status: 'Completed' | 'InProgress' | 'Pending';
  tasks: Task[];
  statistics?: Statistic;
  comment?: string;
}