import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './site/pages/about/about.component';
import {ResumeComponent} from './site/pages/resume/resume.component';
import {PortfolioComponent} from './site/pages/portfolio/portfolio.component';
import {ContactComponent} from './site/pages/contact/contact.component';
import {BlogComponent} from './site/pages/blog/blog.component';
import {ServicesComponent} from './site/pages/services/services.component';
import {ProjectsComponent} from './site/components/projects/projects.component';
import {EmbedComponent} from './site/pages/embed/embed.component';


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
