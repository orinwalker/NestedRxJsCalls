import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'about', component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
