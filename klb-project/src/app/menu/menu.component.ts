import { Component, OnInit } from '@angular/core';
import { CombosService } from '../shared/combos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  MenuItems:any

  constructor(private comboService:CombosService) { }

  ngOnInit() {
    this.comboService.getActions()
      .subscribe(
        (response:any) => {
          this.MenuItems = response.menu
        })  
  }
}