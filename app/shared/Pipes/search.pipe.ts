import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(value: any[], [term]) {
        if (value) {
            term = term.toLowerCase();
            return value.filter((item)=> item.name.toLowerCase().indexOf(term) >= 0 
                || item.email.toLowerCase().indexOf(term) >= 0 
                || item.id.toString().indexOf(term) >= 0);
        }
    }
}