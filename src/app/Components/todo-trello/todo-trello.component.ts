import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trello } from 'src/app/Models/trello';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-todo-trello',
  templateUrl: './todo-trello.component.html',
  styleUrls: ['./todo-trello.component.scss']
})
export class TodoTrelloComponent implements OnInit{
  todoForm! : FormGroup;
  tasks : Trello[] = [];
  inprogress : Trello[] = [];
  done: Trello[] = [];
  isEditEnable : boolean = false;
  indexupadte!: any;

  constructor(private fb:FormBuilder ){}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item : ["",[Validators.required,Validators.minLength(3)]]
    });
  }

  addTodo(){
    this.tasks.push({
      title : this.todoForm.value.item,
      completed:false
    });
    this.todoForm.reset();
  }
  updateTodo(){
    this.tasks[this.indexupadte].title = this.todoForm.value.item;
    this.tasks[this.indexupadte].completed = false;
    this.todoForm.reset();
    this.indexupadte = undefined;
    this.isEditEnable = false;
  }

  deleteTask(Idtask:number){
    this.tasks.splice(Idtask,1);
  }
  deleteProgressTask(Idprog:number){
    this.inprogress.splice(Idprog,1);
  }
  deleteDoneTask(idDone:number){
    this.done.splice(idDone,1)
  }

  onEditTask(taskId:number,task:Trello){
    this.todoForm.controls['item'].setValue(task.title);
    this.indexupadte = taskId;
    this.isEditEnable = true; 
  }

  drop(event: CdkDragDrop<Trello[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
