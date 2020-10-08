import {Injectable} from '@angular/core';
import projectDetails from 'src/app/models/project.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  name = 'STIBS2';

  constructor() {
  }

  get currentProject(): any {
    return projectDetails[this.name];
  }
}
