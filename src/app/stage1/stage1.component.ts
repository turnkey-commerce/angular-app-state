import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from '../app-state.service';
import { ProcessState, Stage } from '../process-state.model';

@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.css']
})
export class Stage1Component implements OnInit {

  projectForm = this.formBuilder.group({
    projectName: '',
  });

  processState!: ProcessState;
  canNavigate: boolean = false;
  canSave: boolean = false;
  projectName: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appStateService: AppStateService,
  ) { }

  ngOnInit(): void {
    this.processState = this.appStateService.getState();
    
    if (this.processState) {
      this.appStateService.navigateState(this.processState, this.router);
      this.projectForm.controls['projectName'].setValue(this.processState.projectName);
    } else {
      this.projectForm.controls['projectName'].setValue('');
      this.canNavigate = false;
    }
  }

  onSubmit(): void {
    this.processState = {
      stage: Stage.One,
      projectName: this.projectForm.get('projectName')!.value,
      results: 0,
    }
    this.appStateService.setState(this.processState);
    if (this.processState.projectName!.length > 0) {
      this.canNavigate = true;
    }
    
  }

  nextStage(): void {
    this.router.navigate(['stage2']);
  }

  initData() {
    this.processState = JSON.parse(localStorage.getItem('processState')!);
  }
}
