import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskExtra',
})
export class MaskExtraPipe implements PipeTransform {
  transform(toModify: string): string {
    return toModify.slice(0, 100) + '...';
  }
}
