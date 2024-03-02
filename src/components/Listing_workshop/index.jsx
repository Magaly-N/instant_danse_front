import { useState, useEffect } from 'react';
import axios from 'axios';
import Workshop_detail from "../Workshop_detail";

const Listing_workshop = () => {
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
    // structure conditionnelle pour véfifier si il y a un atelier et si le nombre d'atelier est supérieur à 0
    if (workshops && workshops.length > 0) {
        console.log(workshops);
        //utilisation de la méthode .map pour parcourir chaque élément(item) du tableau workshops
        return (
            workshops && workshops.map((item) => {
                //renvoie un élément JSX soit le composant nommé Workshop_detail
                // key={item.dancer_workshop_id} :attribution d'un key accessoire unique au composant Workshop_detail
                // workshop={item} :  Cela transmet le courant item(données d'atelier) comme accessoire au Workshop_detailcomposant
                return <Workshop_detail key={item.dancer_workshop_id} workshop={item} />

            })
        )
    }
}

export default Listing_workshop;

// Si le workshops tableau existe, comporte des éléments et que le Workshop_detail composant est défini, ce code parcourt chaque atelier, crée un Workshop_detailcomposant pour chacun et renvoie le tableau résultant d'éléments JSX.