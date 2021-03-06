import * as Express from 'express';

export interface Project {
  id?: number,
  name?: string,
  description?: string,
  completed?: boolean,
  tasks?: [Task],
  resources?: [Resource],
}

export interface ValidatedProjectRequest extends Express.Request {
  project: Project,
}

export interface Resource {
  id?: number,
  name?: string,
  description?: string,
}

export interface ValidatedResourceRequest extends Express.Request {
  resource: Resource,
}

export interface Task {
  id?: number,
  projectId?: number,
  description?: string,
  notes?: string,
  completed?: boolean,
}

export interface ValidatedTaskRequest extends Express.Request {
  task: Task,
}
