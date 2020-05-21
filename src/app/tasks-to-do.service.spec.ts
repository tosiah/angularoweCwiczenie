import { TestBed } from '@angular/core/testing';

import { TasksToDoService } from './tasks-to-do.service';

describe('TasksToDoService', () => {
  let service: TasksToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
