import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { GreeterService } from "app/greeter.service";
import { UserAltComponent } from './user-alt/user-alt.component';
import { UserRowComponent } from './user-row/user-row.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MyDatePipe } from './my-date.pipe';
import { ColorChangerDirective } from './color-changer.directive';
import { MyValidatorDirective } from './my-validator.directive';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from "app/search.service";
import { KeyupDebouncedDirective } from './keyup-debounced.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserAltComponent,
    UserRowComponent,
    NewUserComponent,
    MyDatePipe,
    ColorChangerDirective,
    MyValidatorDirective,
    UserListComponent,
    UserViewComponent,
    SearchComponent,
    KeyupDebouncedDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GreeterService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor() {
  }
}
