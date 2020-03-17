import { Component, OnInit } from '@angular/core';
import { BugService } from '../../shared/bug.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  IssueList: any = [];

  constructor(public bugService: BugService) { }

  ngOnInit(){
    this.loadEmployees();
  }

  loadEmployees(){
    return this.bugService.GetIssues().subscribe((data: {}) => {
      this.IssueList = data;
    })
  }

  deleteIssue(data) {
    var index = this.IssueList.map(x => { return x.issue_name }).indexOf(data.issue_name);
    return this.bugService.DeleteBug(data.id).subscribe(res => {
      this.IssueList.splice(index, 1)
      console.log("Issue Deleted");
    })
  }
}
