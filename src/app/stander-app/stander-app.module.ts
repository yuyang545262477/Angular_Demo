import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StanderMainComponent} from './stander-main/stander-main.component';
import {RouterModule, Routes} from '@angular/router';

const StandRoute: Routes = [{
  path: '', component: StanderMainComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StandRoute)
  ],
  declarations: [StanderMainComponent]
})
export class StanderAppModule {
}
