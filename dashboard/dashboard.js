// From component folder
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';

// From layout folder
import { Header } from '../layouts/header.js';
import { Sidebar } from '../layouts/sidebar.js';


class Dashboard {

    loadDashboard() {

        // Create new instances
        const users = new Users();
        users.loadUsers();
        const issues = new Issues();
        issues.loadIssues();
        const header = new Header();
        header.loadHeader();
        const sidebar = new Sidebar();
        sidebar.loadSidebar();


        console.log('Dashboard component is loaded');
    }

}

export { Dashboard }; 