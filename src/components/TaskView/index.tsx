import React from 'react';
/**
 * Blueprintjs components
 */
import { Card, Elevation, Button, Intent } from '@blueprintjs/core';
/**
 * Types
 */
import Task from '../../types/Task';
/**
 * Styles
 */
import './styles.scss';

interface TaskCardProps {
  data: Task;
  updateTask: (task: Task) => void;
}

export default function TaskView(props: TaskCardProps) {
  const { data, updateTask } = props;
  return (
    <Card className="task-card" interactive={false} elevation={Elevation.TWO}>
      <h4>{data.name}</h4>
      <p>Assigned to: {data.assigned_to}</p>
      <p>Status: {data.status}</p>
      {data.status !== 'Completed' && (
        <Button
          text="Mark as completed"
          onClick={() => updateTask({ ...data, status: 'Completed' })}
          intent={Intent.SUCCESS}
        />
      )}
    </Card>
  );
}
