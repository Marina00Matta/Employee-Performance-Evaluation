import Swal from 'sweetalert2'
import {Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class FireAlertService{

    fireAlert(icon,title,text){
        Swal.fire({
            icon: icon,
            title: title,
            text: text
        })
    }
}