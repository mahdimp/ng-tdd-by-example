import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(items: any[], callback: (item: any)=> boolean ): any {
    return items.find((item => callback(item)));
  }

}
