import {Control} from '@angular/common';

export class UserValidators {
    static spaces(control: Control) {
        if (control.value) {
            let regex = /\w+ \w+/;
            if (!control.value.match(regex)) {
            return { spaces: true }
        }
        
        return null;
        }
    }
}