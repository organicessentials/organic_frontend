import React from 'react';
import Swal from 'sweetalert2';

const Toast = ({title,type}) => {

    const toast = () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-right',
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast'
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          width:"200px",
          height:"5px",
        })
        Toast.fire({
          icon: type,
          title: title,
        })
    }

  return (
    <div onClick={toast()}></div>
  )
}

export default Toast