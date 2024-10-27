import { FC } from "react"
import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
import { NavLinkRenderProps } from "react-router-dom"

export let NavBar: FC = () => {
    let active = ({isActive}: NavLinkRenderProps) => isActive ? `${styles.active_link} ${styles.link}` : styles.link

    return (
        <div className={styles.navbar}>
            <NavLink to="/about" className={active}>About</NavLink>
            <NavLink to="/users" className={active}>Users</NavLink>
            <NavLink to="/todos" className={active}>Todo's</NavLink>
        </div>
    )
}