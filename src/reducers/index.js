import {combineReducers} from 'redux';
import {
    GET_CURRENT_ADD_TASK_INPUT_DATA, CHANGE_ADD_TASK_SUBJECT, ADD_TASK, CHANGE_TASK_DONE_STATE,
    DELETE_TASK, SHOW_EDIT_FORM, CHANGE_EDIT_TASK_SUBJECT, GET_CURRENT_EDIT_TASK_INPUT_DATA, EDIT_TASK
} from "../actions";
import TASKS from '../components/consts/TASKS';
import SUBJECTS from '../components/consts/SUBJECTS';

function TaskManager(state = {
    currentAddTaskInputValue: '',
    currentAddTaskSubjectId: 1,
    displayedTasks: TASKS,
    displayedSubjects: SUBJECTS,
    displayedEditTaskFormId: null,
    currentEditTaskSubjectId: 1,
    currentEditTaskInputValue: '',
    }, action)
        {
            switch (action.type) {
                case GET_CURRENT_ADD_TASK_INPUT_DATA:
                    return Object.assign({}, state, {currentAddTaskInputValue: action.payload});

                case CHANGE_ADD_TASK_SUBJECT:
                    return Object.assign({}, state, {currentAddTaskSubjectId: action.payload});

                case ADD_TASK:
                    let displayedTasks_add = state.displayedTasks.slice();
                    displayedTasks_add.push(action.payload);
                    return Object.assign({}, state, {displayedTasks: displayedTasks_add});

                case CHANGE_TASK_DONE_STATE:
                    return Object.assign({}, state, {displayedTasks: action.payload.slice()});

                case DELETE_TASK:
                    return Object.assign({}, state, {displayedTasks: action.payload.slice()});

                case SHOW_EDIT_FORM:
                    let edit_task_result = '';
                    if(action.payload !== state.displayedEditTaskFormId)
                    {
                        edit_task_result = action.payload;
                        state.currentEditTaskSubjectId = action.subjectId;
                    }
                    else
                    {
                        edit_task_result = -1;
                        state.currentEditTaskInputValue = '';
                    }
                    return Object.assign({}, state, {displayedEditTaskFormId: edit_task_result});

                case CHANGE_EDIT_TASK_SUBJECT:
                    return Object.assign({}, state, {currentEditTaskSubjectId: action.payload});

                case GET_CURRENT_EDIT_TASK_INPUT_DATA:
                    return Object.assign({}, state, {currentEditTaskInputValue: action.payload});

                case EDIT_TASK:
                    return Object.assign({}, state, {
                        displayedTasks: action.payload.slice(),
                        displayedEditTaskFormId: ''
                    });

                default:
                    return state;
        }
}


const storeApp = combineReducers({
    TaskManager: TaskManager
});

export default storeApp;