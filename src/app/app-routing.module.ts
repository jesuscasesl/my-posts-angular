import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'posts', loadChildren: () => import('./pages/posts/posts-list/posts-list.module').then(m => m.PostsListModule) },
  { path: 'posts/details/:id', loadChildren: () => import('./pages/posts/posts-details/posts-details.module').then(m => m.PostsDetailsModule) },
  { path: 'posts/create', loadChildren: () => import('./pages/posts/posts-create/posts-create.module').then(m => m.PostsCreateModule) },
  { path: 'posts/update/:id', loadChildren: () => import('./pages/posts/posts-update/posts-update.module').then(m => m.PostsUpdateModule) },
  { path: 'users', loadChildren: () => import('./pages/users/users-list/users-list.module').then(m => m.UsersListModule) },
  { path: 'users/details/:id', loadChildren: () => import('./pages/users/users-details/users-details.module').then(m => m.UsersDetailsModule) },
  { path: '**', loadChildren: () => import('./pages/notFound/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
