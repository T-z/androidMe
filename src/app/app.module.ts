import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { ServicesComponent } from './components/services/services.component';
import {FooterService} from './services/footer.service';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { EmbedComponent } from './components/embed/embed.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    BlogComponent,
    ServicesComponent,
    ProjectsComponent,
    ToolbarComponent,
    EmbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [FooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
