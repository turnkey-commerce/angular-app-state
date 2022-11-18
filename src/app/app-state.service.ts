import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessState, Stage } from './process-state.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  getState() : ProcessState {
    let processState = JSON.parse(localStorage.getItem('processState')!);
    return processState;
  }

  setState(processState: ProcessState) {
    localStorage.setItem('processState', JSON.stringify(processState));
  }

  clearState() {
    localStorage.removeItem('processState');
  }

  navigateState(processState: ProcessState, router: Router) {
    switch(processState.stage) { 
      case Stage.One: { 
        router.navigate(['stage1']); 
        break; 
      } 
      case Stage.Two: { 
        router.navigate(['stage2']);
        break; 
      } 
      default: { 
         break; 
      } 
    }
  }
}
