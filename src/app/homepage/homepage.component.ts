import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Infinite summer ice cream store';
  subtitle = 'Which one do you want?';

  constructor() { }

  ngOnInit(): void {
  }

}
