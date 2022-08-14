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
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
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
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }
  generateTeams() {
    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough memebers';
    }
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams';
    }
    const allMemebrs = [...this.members];
    while (allMemebrs.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMemebrs.length);
        const member = allMemebrs.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = '';
  }
}
