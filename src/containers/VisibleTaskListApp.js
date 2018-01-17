import {connect} from "react-redux";
import TaskListApp from "../components/TaskListApp";
import {onAddTaskInputChange, onAddTaskSubjectChange, addTask, onChangeTaskDoneState, onDeleteTask, onEditTaskClick,
    onEditTaskSubjectChange, onEditTaskInputChange, onTaskEdit} from '../actions/index';

const mapStateToProps = (state) => {
    return {
        currentAddTaskInputValue: state.TaskManager.currentAddTaskInputValue,
        currentAddTaskSubjectId: state.TaskManager.currentAddTaskSubjectId,
        displayedTasks: state.TaskManager.displayedTasks,
        displayedSubjects: state.TaskManager.displayedSubjects,
        displayedEditTaskFormId: state.TaskManager.displayedEditTaskFormId,
        currentEditTaskSubjectId: state.TaskManager.currentEditTaskSubjectId,
        currentEditTaskInputValue: state.TaskManager.currentEditTaskInputValue,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTaskInputChange: (event) => dispatch(onAddTaskInputChange(event)),
        onAddTaskSubjectChange: (event, index, value) => dispatch(onAddTaskSubjectChange(event, index, value)),
        addTask: (goal, subjectId, subjects, taskList) => dispatch(addTask(goal, subjectId, subjects, taskList)),
        onChangeTaskDoneState: (tasks, taskId) => dispatch(onChangeTaskDoneState(tasks, taskId)),
        onDeleteTask: (tasks, taskId) => dispatch(onDeleteTask(tasks, taskId)),
        onEditTaskClick: (taskId, subjectValue, subjects) => dispatch(onEditTaskClick(taskId, subjectValue, subjects)),
        onEditTaskSubjectChange: (event, index, value) => dispatch(onEditTaskSubjectChange(event, index, value)),
        onEditTaskInputChange: (event) => dispatch(onEditTaskInputChange(event)),
        onTaskEdit: (tasks, subjects, taskId, goal, subject) => dispatch(onTaskEdit(tasks, subjects, taskId, goal, subject)),
    }
};

const  VisibleTaskListApp =  connect(mapStateToProps, mapDispatchToProps)(TaskListApp);

export default VisibleTaskListApp;