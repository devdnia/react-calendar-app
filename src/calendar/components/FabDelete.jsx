import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useCalendarStore } from '../../hooks/';

export const FabDelete = () => {

  const { startDeletingEvent, hasEventSelected } = useCalendarStore()
  const { isDateModalOpen } = useSelector(state => state.ui)

  const handleDelete = () => {
    Swal.fire({
      title: '¿ Está seguro de borrar el evento?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Salir`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado', '', 'success')
        startDeletingEvent();
      } else if (result.isDenied) {
        Swal.fire('No se ha eliminado', '', 'info')
      }
    })

  }

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{
        display: (!hasEventSelected || isDateModalOpen ) ? 'none' : ''
      }}
    >
      <i className="fas fa-trash-alt"></i>

    </button>

  )
}
