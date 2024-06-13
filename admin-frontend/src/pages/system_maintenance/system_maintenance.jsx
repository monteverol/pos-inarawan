import React from 'react';
import './system_maintenance.css';
import AdminNavigation from '../../components/admin_navigation/admin_navigation';
import backup_restore_icon from '../../assets/icons/backup_and_restore_icon.png';
import archive_icon from '../../assets/icons/maintenance_archive_icon.png';
import logs_icon from '../../assets/icons/logs_icon.png';

function SystemMaintenance() {
    return(
        <div className="SystemMaintenance">
            <AdminNavigation />
            <div className="content">
                <h1>SYSTEM MAINTENANCE</h1>
                <div className="links">
                    <div className="link">
                        <img src={backup_restore_icon} alt="Backup and Restore Icon" />
                        <h1>Backup & Restore</h1>
                    </div>
                    <div className="link">
                        <img src={archive_icon} alt="Archive Icon" />
                        <h1>View Archive</h1>
                    </div>
                    <div className="link">
                        <img src={logs_icon} alt="Logs Icon" />
                        <h1>View Logs</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SystemMaintenance;