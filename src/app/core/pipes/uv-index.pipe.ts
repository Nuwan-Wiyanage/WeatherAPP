import { Pipe, PipeTransform } from '@angular/core';

//This pipe is used to map the UVIndex with a status
@Pipe({
  name: 'uvIndex'
})
export class UvIndexPipe implements PipeTransform {
  private readonly uvi = ['Low', 'Low', 'Low', 'Moderate', 'Moderate', 'Moderate', 'High', 'High', 'Very high', 'Very high', 'Very high'];

  transform(value: number): string {
    if (value >= 11) {
      return 'Extreme';
    }
    return this.uvi[Math.round(value)];
  }

}
