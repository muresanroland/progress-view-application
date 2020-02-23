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

interface PipelineProps {
  data: Pipeline;
}

const PipelineCard = (props: PipelineProps) => {
  const { data } = props;
  return (
    <Card className="pipeline-card" interactive={true} elevation={Elevation.TWO}>
      <h4>
        <a href={`/pipeline/${data.id}`}>{data.name}</a>
      </h4>
      <p>Created by: {data.created_by}</p>
    </Card>
  );
};

export default PipelineCard;
