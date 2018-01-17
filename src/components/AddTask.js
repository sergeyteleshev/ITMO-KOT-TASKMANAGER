import React from 'react';
import {css} from "aphrodite";
import styles from "./TaskListStyles";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddTask extends React.Component
{
    render()
    {
        return (
            <form className={css(styles.AddTaskForm)}>
                <SelectField
                    floatingLabelText="Выберите предмет"
                    className={css(styles.selectFieldForm)}
                    onChange={(event, index, value) => this.props.onAddTaskSubjectChange(event, index, value)}
                    value={this.props.currentAddTaskSubjectId}
                >
                    {
                        this.props.displayedSubjects.map((element) => {
                            return (<MenuItem className={css(styles.menuItemForm)} key={element.id} value={element.id} primaryText={element.name}/>);
                        })
                    }
                </SelectField>

                <TextField
                    hintText="Что нужно сделать?"
                    className={css(styles.whatToDo)}
                    onChange={(event) => this.props.onAddTaskInputChange(event)}
                />

                <RaisedButton className={css(styles.AddTaskSubmitForm)}
                              label={"Создать задачу"}
                              onClick={ () => this.props.addTask(
                                  this.props.currentAddTaskInputValue,
                                  this.props.currentAddTaskSubjectId,
                                  this.props.displayedSubjects,
                                  this.props.displayedTasks
                                )
                              }
                />
            </form>
        );
    }
}