import React from 'react';
import styles from "../styles/Dashboard.module.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

let Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Welcome, BotBlock</h1>
        <h4>Summary</h4>
        <div className={styles.summary}>
          <div>
            <p>New detections</p>
            <h3>0</h3>
          </div>
          <div>
            <p>New reports</p>
            <h3>0</h3>
          </div>
          <div>
            <p>New users</p>
            <h3>0</h3>
          </div>
        </div>
        <h4>Quick actions</h4>
        <div className={styles.quickActions}>
          <div>
            <div>
              <h3>Add a user</h3>
              <p>Invite a user to your team</p>
            </div>
            <button onClick={() => {
              Swal.fire({
                title: "Development Ongoing",
                text: "Working under goes ... !",
                icon: "error"
              });
            }}>Invite a user</button>
          </div>
          <div>
            <div>
              <h3>Create a report</h3>
              <p>Report a user for violating our policies</p>
            </div>
            <button onClick={() => {
              Swal.fire({
                title: "Development Ongoing",
                text: "Working under goes ... !",
                icon: "error"
              });
            }}>Create a report</button>
          </div>
        </div>

        <h4>Recent detection</h4>
        <div className={styles.recentDetection}>
          <div className={styles.titles}>
            <p>Username</p>
            <p>Source on</p>
            <p>Date</p>
            <p>Status</p>
          </div>
          <div className={styles.data}>
            <p>No records available</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard;