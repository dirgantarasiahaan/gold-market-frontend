import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as id from 'dayjs/locale/id';

@Pipe({
  name: 'relativeDate'
})
export class RelativeDatePipe implements PipeTransform {

  transform(
    value: any,
    parseFormat?: string,
    displayFormat?: string)
    : string {

    if( !displayFormat ) {
      displayFormat = 'dddd, DD MMMM YYYY'
    }

    if( !parseFormat) {
      parseFormat = 'dddd, DD MMMM YYYY'
    }

    const date = dayjs(value, parseFormat);

    return `${date.locale(id).format(displayFormat)}`;
  }

}
