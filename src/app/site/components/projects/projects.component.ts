import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {FooterService} from '../../../services/footer.service';

interface IProjectResult {
  efficiency: string;
  satisfaction: string;
  sales: string;
  cost: string;
}

interface IProjectCfg {
  project: string;
  intro: string;
  client: string;
  industry: string;
  size: string;
  website: string;
  description: string;
  requirement: string;
  overview: string;
  challenge: string;
  solution: string;
  result: IProjectResult;
  summarize: string;

}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project: IProjectCfg;

  constructor(private projectService: ProjectService, public footerService: FooterService) {
    this.project = this.projectService.currentProject;
  }

  ngOnInit(): void {
  }

}
