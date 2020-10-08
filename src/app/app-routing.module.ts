import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ResumeComponent} from './components/resume/resume.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';
import {ServicesComponent} from './components/services/services.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {EmbedComponent} from './components/embed/embed.component';


const AppRoutes: Routes = [{
  path: 'about',
  component: AboutComponent
}, {
  path: 'portfolio',
  component: PortfolioComponent
}, {
  path: 'resume',
  component: ResumeComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'blog',
  component: BlogComponent
}, {
  path: 'embed/blog',
  component: EmbedComponent
}, {
  path: 'embed/linkedin',
  component: EmbedComponent
}, {
  path: 'services',
  component: ServicesComponent
}, {
  path: 'project',
  component: ProjectsComponent
}, {
  path: '',
  component: AboutComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
