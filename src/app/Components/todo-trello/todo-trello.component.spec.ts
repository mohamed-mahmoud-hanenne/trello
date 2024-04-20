import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTrelloComponent } from './todo-trello.component';

describe('TodoTrelloComponent', () => {
  let component: TodoTrelloComponent;
  let fixture: ComponentFixture<TodoTrelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTrelloComponent]
    });
    fixture = TestBed.createComponent(TodoTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
