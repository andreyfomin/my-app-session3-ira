import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {
  ngPipe: DatePipe = new DatePipe("en-US");

  transform(value: any, args?: any): any {
    let returnValue = this.ngPipe.transform(value, 'dd-MMM-yyyy');
    let longValue = this.ngPipe.transform(value, 'dd-MMM-yyyy HH:mm');
    let isShort = args==='short';
    return isShort ? returnValue : longValue;
  }

}
