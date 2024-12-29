import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h2>Counter: {{ count }}</h2>
    <button (click)="increasesBy(1)">+1</button>

    <button (click)="increasesBy(-1)">-1</button>

    <button (click)="reset()">Reset</button>
  `,

})
export class CounterComponent {
  public count: number = 10;

  increasesBy(value: number): void {
    this.count += value;
  }

  reset(): void {
    this.count = 10;
  }
}
