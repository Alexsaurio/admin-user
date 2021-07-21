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
      showConfirmButton: false,
      timer: 1500
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
