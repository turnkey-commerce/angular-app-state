import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../app-state.service';
import { ProcessState, Stage } from '../process-state.model';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.css']
})
export class Stage2Component implements OnInit {

  processState!: ProcessState;

  constructor(
    private router: Router,
    private appStateService: AppStateService,
  ) {  }

  ngOnInit(): void {
    this.processState = this.appStateService.getState();
    
    if (!this.processState) {
      this.router.navigate(['stage1']);
    }
  }

  process() {
    this.processState.results = Math.floor(Math.random() * 100);
    this.processState.stage = Stage.Two;
    this.appStateService.setState(this.processState);
  }

  newProject() {
    this.appStateService.clearState();
    this.router.navigate(['stage1']);
  }
}
