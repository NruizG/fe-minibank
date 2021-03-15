import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
/*  Formats startDate and endDate to string readeable values */
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(date: any): any {
    const start = new Date(date);
    return `${dayjs(date).locale('es').format('DD [de] MMMM [del] YYYY HH:mm [Hrs]')}`;
  }
}
