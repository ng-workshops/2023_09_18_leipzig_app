# 2 Component interaction - Getter and setter

## src/app/home/info-box/info-box.component.html

```html
<mat-card>
  <mat-card-content>
    <div>
      <p>@Input() Message: {{ message }}</p>
      <p>@Input() Name: {{ name }}</p>
    </div>
  </mat-card-content>
</mat-card>
```

## src/app/home/info-box/info-box.component.ts

```ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit {
  private _name!: string;

  @Input()
  message: string | undefined;

  @Input()
  set name(value: string) {
    this._name = value.toLowerCase();
  }

  get name(): string {
    return this._name;
  }
}
```

## src/app/home/home.component.html

```html
<p>
  <button (click)="changeChild()">Change Child data</button>
</p>

<app-info-box [message]="message" [name]="name"></app-info-box>
```

## src/app/home/home.component.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoBoxComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  message = 'INIT';
  name = 'START_';

  changeChild() {
    this.message = new Date().toISOString();
    this.name += 'X';
  }
}
```
