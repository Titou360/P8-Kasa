import { NavLink } from "react-router-dom"

export default function Navbar() {

return (
 <>
         <ul>
          <li>
            <NavLink to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            exact="true">
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink to ="/about"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
            À propos
            </NavLink>
          </li>

        </ul></>
)

}