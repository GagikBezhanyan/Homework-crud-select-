import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './pages/post/post.component';
import { CategoryComponent } from './pages/category/category.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';
import { TrimPipe } from './pipes/trim.pipe';
import { ClickDirective } from './directives/click.directive';
import { LoginComponent } from './components/login/login.component';
import { OtherComponent } from './components/other/other.component';
import { LoginGuardService } from './service/login.guard.service';

const router: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  { path: 'login', 
    component: LoginComponent, 
    canActivate: [LoginGuardService]
  },
  
  // {
  //   path: 'admin',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'post',
  //       component: PostComponent
  //     },
  //     {
  //       path: 'category',
  //       component: CategoryComponent
  //     }
  //   ]
  // },
  {
    path: 'admin',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/crud/crud.module').then(m => m.CrudModule)
  },
  // {
  //   path: 'select',
  //   component: SelectCountryComponent
  // },
  {
    path: 'select',
    loadChildren: () => import('./pages/select-country/select-country.module').then(m => m.SelectCountryModule)
    },
  {
    path: '**',
    component: Page404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    PostComponent,
    CategoryComponent,
    ParentComponent,
    ChildComponent,
    TrimPipe,
    ClickDirective,
    LoginComponent,
    OtherComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
