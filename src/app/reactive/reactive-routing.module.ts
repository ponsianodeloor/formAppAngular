import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicPageComponent} from "./pages/basic-page/basic-page.component";
import {DynamicPageComponent} from "./pages/dynamic-page/dynamic-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {SwitchesPageComponent} from "./pages/switches-page/switches-page.component";
import {SyncDataPageComponent} from "./pages/sync-data-page/sync-data-page.component";

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'basic', component: BasicPageComponent },
      { path: 'dynamic', component: DynamicPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'switches', component: SwitchesPageComponent },
      { path: 'sync', component: SyncDataPageComponent },
      { path: '', redirectTo: 'basic', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
