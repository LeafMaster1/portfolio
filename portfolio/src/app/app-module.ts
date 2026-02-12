import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { ProjectCard } from './components/project-card/project-card';
import { ReactComponent, TypeScriptComponent, CSharpComponent, JavaScriptComponent, 
  MicrosoftDotNETComponent, AspNetComponent,SvelteComponent,
  AngularComponent,VueComponent,CSSComponent,
  NodeJsComponent,SQLiteComponent,VisualStudioCodeComponent,
  VisualStudioComponent,GitHubActionsComponent
} from './assets/icon';
import { ProjectModal } from './components/project-modal/project-modal';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    About,
    Projects,
    Contact,
    ProjectCard,
    ProjectModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactComponent,
    TypeScriptComponent,
    CSharpComponent,
    JavaScriptComponent,
    MicrosoftDotNETComponent,
    AspNetComponent,
    SvelteComponent,
    AngularComponent,
    VueComponent,
    CSSComponent,
    NodeJsComponent,
    SQLiteComponent,
    VisualStudioCodeComponent,
    VisualStudioComponent,
    GitHubActionsComponent
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
