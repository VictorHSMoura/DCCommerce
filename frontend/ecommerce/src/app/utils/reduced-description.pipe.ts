import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'reducedDescription'
})
export class ReducedDescription implements PipeTransform {
    transform(texto: string): string {
        let endOn: number = 15
        if(texto.length > endOn) {
            return texto.substr(0, endOn) + '...';
        }
        return texto;
    }
}