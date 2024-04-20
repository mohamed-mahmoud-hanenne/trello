import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trello } from 'src/app/Models/trello';


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

  constructor(private fb:FormBuilder ){}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item : ["",Validators.required]
    });
  }

  addTodo(){}
  updateTodo(){}
}
