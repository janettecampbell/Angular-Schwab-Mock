import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() loading = false;
  @Output("app-mousedown") event = new EventEmitter<MouseEvent>();

  @HostListener('mousedown', ['$event'])
  handleMousedown(event: MouseEvent) {
    this.event.emit(event);
  }
}
