import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string [] = [
    'Superman','Batman', 'Mujer Maravilla', 'Flash', 'Linterna Verde'
  ]
  public removeHero?:string;

  removeLastHero():void{
  this.removeHero =  this.heroNames.pop();
  }
}
