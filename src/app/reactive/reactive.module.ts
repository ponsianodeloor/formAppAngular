import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SyncDataPageComponent } from './pages/sync-data-page/sync-data-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent,
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent,
    SyncDataPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
