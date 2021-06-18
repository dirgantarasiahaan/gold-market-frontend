import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';


@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(
    value: any): string {
  let first = value.substr(0,1).toUpperCase();
  return first + value.substr(1);
  }

}
