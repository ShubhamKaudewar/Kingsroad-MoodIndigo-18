import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  teams = [];

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.refreshLeaderboard();
  }

  refreshLeaderboard() {
    this.adminService.getLeaderboard().subscribe(response => {
      console.log(response);
      this.teams = response.leaderboard;
      this.teams.sort((a, b) => {
        return (b.gold + b.food + b.military) - (a.gold + a.food + a.military);
      });
    });
  }
}
