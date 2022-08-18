import Swal from 'sweetalert2';

export default function useSwal (title = '', text = '', icon = 'success', handleConfirm, handleDismiss) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: '#0bc98d',
    cancelButtonColor: '#ef4a62',
    confirmButtonText: 'Xác nhận',
    cancelButtonText: 'Bỏ qua'
  }).then((result) => {
    if (result.isConfirmed && handleConfirm) {
      handleConfirm();
    } else if(result.isDismissed && handleDismiss) {
      handleDismiss();
    }
  });
}