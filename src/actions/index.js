export const GET_CURRENT_ADD_TASK_INPUT_DATA = "GET_CURRENT_ADD_TASK_INPUT_DATA";
export const CHANGE_ADD_TASK_SUBJECT = "CHANGE_ADD_TASK_SUBJECT";
export const ADD_TASK = "ADD_TASK";
export const CHANGE_TASK_DONE_STATE = "CHANGE_TASK_DONE_STATE";
export const DELETE_TASK = "DELETE_TASK";
export const SHOW_EDIT_FORM = "SHOW_EDIT_FORM";
export const CHANGE_EDIT_TASK_SUBJECT = "CHANGE_EDIT_TASK_SUBJECT";
export const GET_CURRENT_EDIT_TASK_INPUT_DATA = "GET_CURRENT_EDIT_TASK_INPUT_DATA";
export const EDIT_TASK = "EDIT_TASK";

export function onAddTaskInputChange(event)
{
    return {
        type: GET_CURRENT_ADD_TASK_INPUT_DATA,
        payload: event.target.value,
    }
}

function getSubjectById(subjects, subjectId)
{
    let subject = '';

    for(let i=0; i < subjects.length; i++) {
        if(subjects[i]['id']===subjectId) {
            subject = subjects[i]['name'];
            break;
        }
    }

    return subject;
}

function getTaskIdByTasksList(tasksList)
{
    return tasksList[tasksList.length - 1]['id'] + 1;
}

export function onAddTaskSubjectChange(event, index, subjectId)
{
    return {
        type: CHANGE_ADD_TASK_SUBJECT,
        payload: subjectId
    }
}

export function addTask(goal, subjectId, subjects, taskList)
{
    if(goal !== '' && subjectId > 0)
    {
        let id = '';
        taskList.length === 0 ? id = 1 : id = getTaskIdByTasksList(taskList);

        let task = {
            id: id,
            goal: goal,
            subject: getSubjectById(subjects, subjectId),
            isDone: false,
        };

        return {
            type: ADD_TASK,
            payload: task,
        }
    }

    return {
        type: null,
    };
}

export function onChangeTaskDoneState(tasks, taskId)
{
    for (let i = 0; i < tasks.length; i++)
    {
        if (tasks[i]['id'] === taskId)
        {
            tasks[i]['isDone'] = !tasks[i]['isDone'];
        }
    }

    return {
        type: CHANGE_TASK_DONE_STATE,
        payload: tasks,
    }
}

export function onDeleteTask(tasks, taskId)
{
    tasks.map((element) => {
        if (element.id === taskId)
        {
            if (element.id === tasks[0]['id'])
            {
                tasks.splice(0,1);
            }
            else
            {
                if(element.id === tasks[tasks.length - 1]['id'])
                {
                    tasks.splice(tasks.length - 1, 1);
                }
                else
                {
                    for(let i = 1; i < tasks.length - 1; i++)
                    {
                        if(element.id === tasks[i]['id'])
                        {
                            tasks.splice(i, 1);
                        }
                    }
                }
            }
        }
    });

    return {
        type: DELETE_TASK,
        payload: tasks
    }
}

function getSubjectIdByValue(subjects, subjectValue)
{
    let subjectId = '';

    for(let i = 0; i < subjects.length; i++) {
        if(subjects[i]['name'] === subjectValue) {
            subjectId = subjects[i]['id'];
            break;
        }
    }

    return subjectId;
}


export function onTaskEdit(tasks, subjects, taskId, goal, subjectId) {
    if (goal !== '' && subjectId > 0)
    {
        for(let i = 0; i < tasks.length; i++)
        {
            if (tasks[i]['id'] === taskId)
            {
                tasks[i]['goal'] = goal;
                tasks[i]['subject'] = getSubjectById(subjects, subjectId);
            }
        }

        return {
            type: EDIT_TASK,
            payload: tasks,
        }
    }
    else
    {
        return {
            type: null,
        }
    }
}

export function onEditTaskClick(taskId, subjectValue, subjects)
{
    return {
        type: SHOW_EDIT_FORM,
        payload: taskId,
        subjectId: getSubjectIdByValue(subjects, subjectValue),
    }
}

export function onEditTaskSubjectChange(event, index, subjectId) {
    return {
        type: CHANGE_EDIT_TASK_SUBJECT,
        payload: subjectId,
    }
}

export function onEditTaskInputChange(event)
{
    return {
        type: GET_CURRENT_EDIT_TASK_INPUT_DATA,
        payload: event.target.value,
    }
}
