import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sign_out = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Efface les données du localStorage
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        toast.success('Déconnecté'); // Affiche une notification de déconnexion réussie
        setTimeout(() => {
            navigate("/"); // Redirige vers la page d'accueil après la déconnexion
        }, 3000);
    };

    return (
        <div>
            <NavLink
                to={"sign_out"}
                className="active"
                onClick={handleSignOut}
            >
                Déconnexion
            </NavLink>
        </div>
    );
};

export default Sign_out;
