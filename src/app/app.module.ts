import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRouterModule} from './app-router.module';
import {ShellComponent} from './shell/shell.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
