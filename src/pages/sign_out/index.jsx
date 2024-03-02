import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sign_out = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Implement your sign-out logic here, e.g., clear localStorage
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        // Additional logic if needed...

        toast.success('Déconnecté'); // Show a success toast
        setTimeout(() => {
            navigate("/"); // Redirect to the home page or login page after sign-out
        }, 3000);
    };

    return (
        <div className="container">
            <h2>Confirmation de déconnexion</h2>
            <p>Êtes-vous sûr de vouloir vous déconnecter?</p>
            <button className="submitButton" onClick={handleSignOut}>
                Déconnexion
            </button>
        </div>
    );
};

export default Sign_out;
