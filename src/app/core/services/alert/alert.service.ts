import { Injectable } from '@angular/core';

// importacion de alertas
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  
  alertSuccess(msg: string) {
    Swal.fire({
      title: 'Success!',
      text: msg,
      icon: 'success',
      confirmButtonText: 'Acept'
    })
  }

  alertError(error: string) {
    Swal.fire({
      title: 'Upss!',
      text: error,
      icon: 'error',
      confirmButtonText: 'Acept'
    })
  }

}
