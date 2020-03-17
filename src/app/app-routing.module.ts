import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';


const routes: Routes = [
  { 
    path: '', 
    component: IssueListComponent
   },
   {
     path: 'add-issue',
     component: AddIssueComponent
   },
   {
     path: 'issues-list',
     component: IssueListComponent
   },
   {
     path: 'edit-issue/:id',
     component: EditIssueComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
