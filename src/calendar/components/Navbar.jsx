import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = () => {

  const { startLougout, user } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-3">
      <span className="navbar-brand ms-3">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; &nbsp;
        { user.name }
      </span>

      <button 
        onClick={ startLougout }
        className="btn btn-outline-danger me-3"
        >
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
