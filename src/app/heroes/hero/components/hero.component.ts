import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name:string = 'Batman'
  public age:number = 40;

  get toUpter():string{
    return this.name.toUpperCase()
  }

  getDescripcion():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = "Superman"
  }

  changeAge():void{
    this.age = 60
  }

  reset():void{
    this.age = 40,
    this.name = "Batman"
  }
}
