import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() cardData?: Item;
  @Output() titleChangeEvent = new EventEmitter();

  onSaveClick() {
    console.log(this.cardData);
    this.titleChangeEvent.emit();
  }
}
