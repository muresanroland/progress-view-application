import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * Components
 */
import PipelineCard from '../../components/PipelineCard';
import LoadingSpinner from '../../components/LoadingSpinner/index';
/**
 * Actions
 */
import { doGetPipelines } from '../../actions/pipeline';
/**
 * Types
 */
import Pipeline from '../../types/Pipeline';
import { AppState } from '../../store/index';
import { AppActionTypes } from '../../types/actions';
/**
 * Styles
 */
import './style.scss';

interface DashboardProps {
  doGetPipelines: () => void;
  pipelineList: Pipeline[];
  isLoading: boolean;
}

interface DashboardState {}

export class Dashboard extends Component<DashboardProps, DashboardState> {
  componentDidMount() {
    this.props.doGetPipelines();
  }
  render() {
    const { pipelineList, isLoading } = this.props;
    return (
      <>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="container">
            <h1>Active pipelines</h1>
            <div className="pipelines-container">
              {pipelineList.length &&
                pipelineList.map(pipeline => (
                  <PipelineCard key={pipeline.id} data={pipeline} />
                ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

interface LinkStateProps {
  pipelineList: Pipeline[];
  isLoading: boolean;
}

interface LinkDispatchProps {
  doGetPipelines: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    pipelineList: state.pipeline.pipelineList,
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doGetPipelines: bindActionCreators(doGetPipelines, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
