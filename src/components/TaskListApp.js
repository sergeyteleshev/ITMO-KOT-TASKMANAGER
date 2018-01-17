import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {css} from 'aphrodite';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import styles from './TaskListStyles';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

export default class TaskListApp extends React.Component
{
    render()
    {
        return (
            <div>
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

                <div className={css(styles.taskList)}>
                    <List>
                        <Subheader inset={true}>Задачи:</Subheader>

                        {
                            this.props.displayedTasks.map((element) => {
                                if(!element.isDone) {
                                    return (
                                        <div key={element.id} className={css(styles.listItem)}>
                                            <ListItem
                                                leftAvatar={<Avatar icon={<ModeEdit onClick={() => this.props.onEditTaskClick(element.id, element.subject, this.props.displayedSubjects)}/>}/>}
                                                primaryText={element.goal}
                                                secondaryText={element.subject}
                                                rightIcon={<Done onClick={ () => this.props.onChangeTaskDoneState(this.props.displayedTasks, element.id)}/>}
                                            />

                                            {
                                                (element.id === this.props.displayedEditTaskFormId) ?
                                                    <form className={css(styles.editTaskForm)}>
                                                        <SelectField
                                                            floatingLabelText="Выберите предмет"
                                                            className={css(styles.selectFieldForm)}
                                                            value={this.props.currentEditTaskSubjectId}
                                                            onChange={(event, index, value) => this.props.onEditTaskSubjectChange(event, index, value)}
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
                                                            onChange={(event) => this.props.onEditTaskInputChange(event)}
                                                            value={this.props.currentEditTaskInputValue}
                                                        />

                                                        <div className={css(styles.editButtons)}>
                                                            <RaisedButton className={css(styles.AddTaskSubmitForm)}
                                                                          onClick={() => this.props.onTaskEdit(this.props.displayedTasks, this.props.displayedSubjects, element.id, this.props.currentEditTaskInputValue, this.props.currentEditTaskSubjectId)}
                                                                          label={"Изменить"}
                                                            />

                                                            <RaisedButton className={css(styles.AddTaskSubmitForm)}
                                                                          onClick={() => this.props.onEditTaskClick(element.id, element.subject, this.props.displayedSubjects)}
                                                                          label={"Отмена"}
                                                            />
                                                        </div>

                                                    </form>
                                                    :
                                                    null
                                            }
                                        </div>
                                    );
                                }
                            })
                        }

                    </List>

                    <Divider inset={true} />

                    <List>
                        <Subheader inset={true}>Сделано:</Subheader>
                        {
                            this.props.displayedTasks.map((element) => {

                                if(element.isDone)
                                {
                                    return (
                                        <ListItem
                                            leftAvatar={<Avatar icon={<Done onClick={ () => this.props.onChangeTaskDoneState(this.props.displayedTasks, element.id)}/>} />}
                                            primaryText={element.goal}
                                            secondaryText={element.subject}
                                            key={element.id}
                                            rightIcon={<Delete onClick={() => this.props.onDeleteTask(this.props.displayedTasks, element.id)}/>}
                                        />
                                    );
                                }
                                else
                                {
                                    return null;
                                }
                            })
                        }
                    </List>
                </div>
            </div>
        );
    }
}