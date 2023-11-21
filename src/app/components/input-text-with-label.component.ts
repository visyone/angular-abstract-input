import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from '../abstracts/input.component';

@Component({
  selector: 'app-input-text-with-label',
  template: `
  <div>
    <label [attr.for]="cid">{{ label + asterix }}</label>
    <input [id]="cid"
           [type]="type"
           [placeholder]="placeholder"
           [readonly]="inputReadonly"
           [required]="inputRequired"
           (blur)="onBlur.next()"
           (focus)="onFocus.next()"
           [(ngModel)]="value">
  </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextWithLabelComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextWithLabelComponent extends AbstractInputComponent {
  @Input()
  label: string = '';

  get asterix(): string {
    return this.inputRequired ? ' *' : '';
  }
}