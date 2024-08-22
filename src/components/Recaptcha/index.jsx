import { useEffect, useRef, useState } from 'react';
import "./recaptcha.scss";

// Définition du composant ReCaptcha
const ReCaptcha = ({ siteKey, callback }) => {
    // Référence au div qui contiendra le widget reCAPTCHA
    const recaptchaRef = useRef(null);

    // État pour indiquer si reCAPTCHA est chargé
    const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

    // Fonction à appeler lorsque reCAPTCHA se charge
    const onRecaptchaLoad = () => {
        setIsRecaptchaLoaded(true);
    };

    useEffect(() => {
        // Assignation de la fonction du composant à la callback globale de la fenêtre
        window.onRecaptchaLoad = onRecaptchaLoad;

        if (!window.grecaptcha) {
            // Chargement du script uniquement s'il n'est pas déjà disponible
            const script = document.createElement('script');
            script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
        else if (window.grecaptcha && window.grecaptcha.render) {
            // Si reCAPTCHA est déjà chargé, appeler la fonction directement
            onRecaptchaLoad();
        }

        // Nettoyage de la callback globale lors du démontage du composant
        return () => {
            window.onRecaptchaLoad = null;
        };
    }, []); // Effect exécuté lors du montage du composant

    useEffect(() => {
        // Lorsque reCAPTCHA est chargé, initialiser le widget
        if (isRecaptchaLoaded) {
            window.grecaptcha.render(recaptchaRef.current, {
                'sitekey': siteKey, // Clé du site reCAPTCHA
                'callback': callback // Fonction de rappel pour gérer le token
            });
        }
    }, [isRecaptchaLoaded]); // Effect exécuté lorsque isRecaptchaLoaded change

    // Rendu du composant
    return (
        <div ref={recaptchaRef} className="custom-captcha"></div>
    );
};

export default ReCaptcha; // Exporte le composant ReCaptcha pour pouvoir l'utiliser dans d'autres fichiers
