import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value:string): string{
      let words = value.split(' ');
      for(var i=0; i<words.length; i++){
        let word = words[i];
              words[i] = this.toUpperCase(word);
          }
      return words.join(' ');
    }

    private toUpperCase(word: string){
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
    }

}
