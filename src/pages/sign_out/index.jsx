import { useNavigate } from 'react-router-dom';
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
            navigate("/"); // Redirige vers la page d'accueil ou la page de connexion après la déconnexion
        }, 3000);
    };

    return (
        <div className="container" role="button" aria-label="Confirmation de déconnexion">
            <h2>Confirmation de déconnexion</h2>
            <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
            <button
                className="submitButton"
                onClick={handleSignOut}
                role="button"
                aria-label="Bouton de déconnexion"
            >
                Déconnexion
            </button>
        </div>
    );
};

export default Sign_out;
