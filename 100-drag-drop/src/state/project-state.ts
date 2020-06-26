import { Project, ProjectStatus } from '../models/project';

// Project State Management
type Listener<T> = (items: T[]) => void;

// State class
class State<T> {
  // accessible only from inherited class
  protected Listeners: Listener<T>[] = [];

  addListener(ListenerFn: Listener<T>) {
    this.Listeners.push(ListenerFn);
  }
}

// ProjectState class
// No need inheritance for this class since we only have one state
// However, in big application, we will have several states like
// user state, project state, shopping card state, ....
// so as practice created base class State
export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numberOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numberOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(prj => prj.id === projectId);
    if (project) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const ListenerFn of this.Listeners) {
      ListenerFn(this.projects.slice());
    }
  }

}

export const projectState = ProjectState.getInstance();
