import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkshopDetail from "../WorkshopDetail";
import "./listingWorkshop.scss";

const ListingWorkshop = () => {
    // déclaration et initialisation de la variable d'état nommée workshops à l'aide du useStatehook. Il commence par un tableau vide ( null) et fournit un moyen de mettre à jour son contenu ultérieurement à l'aide de la setWorkshops fonction.
    const [workshops, setWorkshops] = useState(null);
    useEffect(() => {

        let data;

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/dancer_workshop/read',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setWorkshops(response.data.dancerWorkshops);


            })
            .catch((error) => {
                console.log(error);
            });

    }, [])
    // Structure conditionnelle pour véfifier si il y a un atelier et si le nombre d'atelier est supérieur à 0
    if (workshops && workshops.length > 0) {
        console.log(workshops);
        //Utilisation de la méthode .map pour parcourir chaque élément(item) du tableau workshops
        return (
            <div >
                {workshops &&
                    workshops.map((item) => (
                        //Renvoie un élément JSX soit le composant nommé Workshop_detail
                        <WorkshopDetail
                            className="workshopCard"
                            key={item.dancer_workshop_id}
                            workshop={item}
                            aria-label={`Détails de l'atelier ${item.dancer_workshop_id}`}
                        />
                        // key={item.dancer_workshop_id} :attribution d'un key accessoire unique au composant Workshop_detail
                        // workshop={item} :  Cela transmet le courant item(données d'atelier) comme accessoire au Workshop_detailcomposant
                    ))}
            </div>
        )
    }
}

export default ListingWorkshop;

