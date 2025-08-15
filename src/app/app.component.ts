import { Component, OnInit } from '@angular/core';
import { FlowService } from './services/flow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pilotoCardif';
  constructor(
    public flowService: FlowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('set Bank');
    this.flowService.setBank('rojo');
    const initialPath = this.flowService.getInitialPath(
      this.flowService.currentBank
    );
    this.router.navigate([initialPath]);
  }
}
