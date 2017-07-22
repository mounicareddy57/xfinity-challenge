import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {

    return array.sort(function(a,b) {
      if(a[args.column]<b[args.column]){
        return -1 * args.dir ;
      }else if(a[args.column]>b[args.column]){
        return 1 * args.dir;
      }else{
        return 0;
      }
    });
  }

}
