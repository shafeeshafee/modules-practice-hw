import { UserProfile } from '../components/users-profile.js';

class Header {

    loadHeader() {
        // Create a new instance
        const userProfile = new UserProfile();

        // Invoke the method (component)
        userProfile.loadUserProfile();

        // Output loading status
        console.log('Header component is loaded...');
    }

}

export { Header };