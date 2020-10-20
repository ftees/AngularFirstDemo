import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  
  transform(value: any, args?: any): any {
    args = args;
    if(!value)return null;
    if(!args)return value;
    console.log(args);
    for (const i of value) {
      console.log(i);
    }
    args = args.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item.name).toLowerCase().includes(args);
    });
}

}
