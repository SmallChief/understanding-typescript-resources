import { DragTarget } from "../models/drag-drop.js";
import { Project, ProjectStatus } from "../models/project.js";
import { Component } from "./base-component.js";
import { ProjectItem } from "./project-item.js";
import { autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);

    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @autobind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault(); // Prevent default to allow drop
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @autobind
  dropHandler(event: DragEvent): void {
    const prjId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  @autobind
  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)!;
    listEl.innerHTML = ""; // Clear existing list items
    for (const projItem of this.assignedProjects) {
      const hostElement = this.element.querySelector("ul")!;
      new ProjectItem(hostElement.id, projItem); // Create a new ProjectItem for each project
    }
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(
        (prj) =>
          prj.status ===
          (this.type === "active"
            ? ProjectStatus.Active
            : ProjectStatus.Finished)
      );
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      `${this.type} projects`.toUpperCase();
  }
}
