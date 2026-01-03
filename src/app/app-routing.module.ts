import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  // 1. Map the empty path to HomeComponent
  { path: '', component: HomeComponent },

  // 2. Define specific paths for other components
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },

  // 3. Wildcard route: If a user types a wrong URL, send them back to Home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
