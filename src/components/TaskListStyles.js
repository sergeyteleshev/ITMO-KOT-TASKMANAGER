import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    taskList: {
        display: 'flex',
        flexDirection: 'column',
        width: '700px',
        margin: '0px auto',
        marginBottom: '40px',
    },

    AddTaskForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '700px',
        margin: '40px auto',
    },

    AddTaskSubmitForm: {
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px'
    },

    editListItemForm: {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
    },

    listItem: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
    },

    selectFieldForm: {
        width: '100%',
    },

    editButtons: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },

    editTaskForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '670px',
        margin: '10px auto',
    },

    whatToDo: {
        width: '100%',
    },

    raisedButtons: {
        width: '100%',
    },

    submitForm: {
        width: '50%',
        marginTop: '20px',
        marginBottom: '20px'
    },

    menuItemForm: {
        width: "100%",
    }

});