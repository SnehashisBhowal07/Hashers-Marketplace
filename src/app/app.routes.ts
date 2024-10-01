import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // Add other routes as needed
  ];  
  @NgModule({
    
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}