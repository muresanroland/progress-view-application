import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * Components
 */
import TaskView from '../../components/TaskView';
import LoadingSpinner from '../../components/LoadingSpinner/index';
/**
 * Actions
 */
import { doGetAllTasks, doUpdateTask } from '../../actions/task';
/**
 * Types
 */
import { AppActionTypes } from '../../types/actions';
import { AppState } from '../../store';
import Task from '../../types/Task';
/**
 * Styles
 */
import './styles.scss';

interface TaskProps {
  taskList: Task[];
  isLoading: boolean;
  doGetAllTasks: () => void;
  doUpdateTask: (task: Task) => void;
}

export class Tasks extends Component<TaskProps> {
  componentDidMount() {
    this.props.doGetAllTasks();
  }
  render() {
    const { taskList, isLoading, doUpdateTask } = this.props;
    return (
      <>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="container">
            <h1>Active Tasks</h1>
            <div className="tasks-container">
              {taskList.length &&
                taskList.map(task => (
                  <TaskView key={task.id} data={task} updateTask={doUpdateTask} />
                ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

interface LinkStateProps {
  taskList: Task[];
  isLoading: boolean;
}

interface LinkDispatchProps {
  doGetAllTasks: () => void;
  doUpdateTask: (task: Task) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    taskList: state.task.taskList,
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doGetAllTasks: bindActionCreators(doGetAllTasks, dispatch),
  doUpdateTask: bindActionCreators(doUpdateTask, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
