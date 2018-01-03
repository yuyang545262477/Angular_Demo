import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolMainComponent} from './tool-main/tool-main.component';
import {RouterModule, Routes} from '@angular/router';

const ToolRoute: Routes = [
  {path: '', component: ToolMainComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ToolRoute)
  ],
  declarations: [ToolMainComponent]
})
export class ToolAppModule {
}
