import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from "app/user-list/user-list.component";
import { UserViewComponent } from "app/user-view/user-view.component";
import { SearchComponent } from "app/search/search.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: UserListComponent },
  { path: 'user/:id', component: UserViewComponent },
  { path: 'search', component: SearchComponent },
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
