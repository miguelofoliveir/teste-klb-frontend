import { Component, OnInit } from '@angular/core';
import { CombosService } from '../shared/combos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Actions:any

  constructor(private comboService:CombosService) { }

  ngOnInit() {
    this.comboService.getActions()
      .subscribe(
        (response:any) => {
          this.Actions = response.actions
        })  
  }

}
