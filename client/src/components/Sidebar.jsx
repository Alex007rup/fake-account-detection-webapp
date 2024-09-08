/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import logo from "../assets/logo.png"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <img src={logo} className={styles.logo} />
        <div>
          <h4>BotBlock</h4>
          <p>Detect and report fake accounts</p>
        </div>
      </div>
      <ul className={styles.menu}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
          <li className={styles.menuItem}>Dashboard</li>
        </NavLink>
        <NavLink to="/monitor" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
          <li className={styles.menuItem}>Monitor</li>
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? styles.active : styles.inactive} onClick={() => {
          Swal.fire({
            title: "Development Ongoing",
            text: "Working under goes ... !",
            icon: "error"
          });
        }} >
          <li className={styles.menuItem}>Users</li>
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => isActive ? styles.active : styles.inactive} onClick={() => {
          Swal.fire({
            title: "Development Ongoing",
            text: "Working under goes ... !",
            icon: "error"
          });
        }} >
          <li className={styles.menuItem}>Reports</li>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : styles.inactive} onClick={() => {
          Swal.fire({
            title: "Development Ongoing",
            text: "Working under goes ... !",
            icon: "error"
          });
        }} >
          <li className={styles.menuItem}>Settings</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;