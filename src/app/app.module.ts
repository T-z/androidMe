import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidenavComponent} from './site/components/sidenav/sidenav.component';
import {AboutComponent} from './site/pages/about/about.component';
import {ResumeComponent} from './site/pages/resume/resume.component';
import {PortfolioComponent} from './site/pages/portfolio/portfolio.component';
import {ContactComponent} from './site/pages/contact/contact.component';
import {BlogComponent} from './site/pages/blog/blog.component';
import {ServicesComponent} from './site/pages/services/services.component';
import {FooterService} from './services/footer.service';
import {ProjectsComponent} from './site/components/projects/projects.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {ToolbarComponent} from './site/components/toolbar/toolbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {EmbedComponent} from './site/pages/embed/embed.component';
import {HttpClientModule} from '@angular/common/http';

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
    FormsModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [FooterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
