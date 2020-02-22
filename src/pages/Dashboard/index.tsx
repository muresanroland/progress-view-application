import CheckLoginContainer from '../../containers/CheckLoginContainer';
import PipelineCard from '../../components/PipelineCard';
import React, { Component } from 'react';
import './style.scss';
import { getPipelines } from '../../actions/pipeline';

interface DashboardProps {
  getPipelines: () => void;
}

interface DashboardState {}

export class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);

    this.state = {
      picsa: 's'
    };
  }
  render() {
    return (
      //<CheckLoginContainer>
      <div className="container-dashboard">
        <h1>This is the dashboard component</h1>
        <PipelineCard />
      </div>
      // </CheckLoginContainer>
    );
  }
}

export default Dashboard;
