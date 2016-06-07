import {Control} from '@angular/common';

export class EmailValidators {
    static isNotEmail(control: Control) {
        if (control.value) {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!control.value.match(regex)) {
                return { isNotEmail: true }
            }
        }
    }
}