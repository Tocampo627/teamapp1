import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  title = 'teamapp1';

  onInput(member: string) {
    this.newMemberName = member;
  }
  addMember() {
    // the if ! is checking for a falsy value, which is " "
    if (!this.newMemberName) {
      this.errorMessage = 'Your name cant be empty 👎';
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
}
