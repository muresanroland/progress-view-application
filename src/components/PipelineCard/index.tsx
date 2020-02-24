import React from 'react';
/**
 * Blueprintjs components
 */
import { Card, Elevation } from '@blueprintjs/core';
/**
 * Types
 */
import Pipeline from '../../types/Pipeline';
/**
 * Styles
 */
import './style.scss';

interface PipelineCardProps {
  data: Pipeline;
}

const PipelineCard = (props: PipelineCardProps) => {
  const { data } = props;
  return (
    <Card className="pipeline-card" interactive={false} elevation={Elevation.TWO}>
      <h4>{data.name}</h4>
      <p>Created by: {data.created_by}</p>
    </Card>
  );
};

export default PipelineCard;
