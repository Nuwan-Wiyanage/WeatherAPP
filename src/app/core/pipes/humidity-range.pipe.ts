import { Pipe, PipeTransform } from '@angular/core';

//This pipe is used to map the humidity values with a status
@Pipe({
  name: 'humidityRange'
})
export class HumidityRangePipe implements PipeTransform {

  transform(value: number): string {
    if (value <= 30) {
      return 'Too Dry';
    }
    else if (value > 30 && value <= 60) {
      return 'Comfortable';
    }
    else {
      return 'Too Moist';
    }
  }

}
