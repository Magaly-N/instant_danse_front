import { useState } from 'react';

const User_profile = () => {
    // Sample user data, replace with actual user data from your application
    const initialUserData = {
        first_name: 'John',
        last_name: 'Doe',
        birthday: '1990-01-01',
        address: '123 Main Street',
        postcode: '12345',
        city: 'Cityville',
        phone_number: '123-456-7890',
        email: 'john.doe@example.com',
    };

    // State to manage user data and edit mode
    const [userData, setUserData] = useState(initialUserData);
    const [isEditing, setEditing] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission (update user data)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to update user data in your application/database
        // For this example, we will just log the updated data
        console.log('Updated User Data:', userData);
        setEditing(false);
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Nom</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={userData.first_name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Prénom</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userData.last_name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                {/* Add similar form groups for other user data fields */}
                {/* ... */}

                {isEditing ? (
                    <button type="submit">Save Changes</button>
                ) : (
                    <button type="button" onClick={() => setEditing(true)}>
                        Edit Profile
                    </button>
                )}
            </form>
        </div>
    );
};

export default User_profile;
