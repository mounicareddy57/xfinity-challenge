import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {DataProcessComponent} from "./components/data-process/data-process.component";
import {HomeComponent} from "./components/home/home.component";


const appRoutes: Routes=[
  {path: '', component: HomeComponent}, //default route
  {path: 'process', component: DataProcessComponent}, //data process page
  {path: '**', component: AppComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
