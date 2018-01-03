import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ShellComponent} from './shell/shell.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/shell', pathMatch: 'full'},
  {
    path: 'shell', component: AppComponent, children: [
      {path: '', component: ShellComponent},
      {path: 'stander', loadChildren: './stander-app/stander-app.module#StanderAppModule'},
      {path: 'tool', loadChildren: './tool-app/tool-app.module#ToolAppModule'},
    ]
  },
];

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouterModule {

}
