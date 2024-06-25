import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"skills", component:SkillsComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
