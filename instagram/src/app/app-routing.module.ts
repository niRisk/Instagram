import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import and define your routes here
const routes: Routes = [
  // Your route configurations go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
