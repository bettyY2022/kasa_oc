import React from "react";
import imageAbout from "../pages/imageAbout.jpg";
import Header from "../pages/Header";
import "../pages/pages.css";
import "../components/Banner.css";
import Collapse from "../components/Collapse";



export default function About() {
    const items = [
       {
          id: 1,
          value: "Fiabilité",
          text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes.",
       },
       {
          id: 2,
          value: "Respect",
          text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
       },
       {
          id: 3,
          value: "Service",
          text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
       },
       {
          id: 4,
          value: "Sécurité",
          text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
       },
    ];
    return (
       <div >
        <Header />
        <div className="cover">
             <img className="imageAbout" src={imageAbout} alt="montagnes"/>
        </div>
          <div >
             {items.map((item) => (
                <div  key={item.id}>
                   <Collapse title={item.value} content={item.text}  />
                </div>
             ))}
          </div>
       </div>
    );
 }
 












// export default function About() {
//     function AboutItems() {
//       const Items = [
//         {
//           id: 1,
//           title: "Fiabilité",
//           texte:
//             "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.",
//         },
//         {
//           id: 2,
//           title: "Respect",
//           texte:
//             "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme",
//         },
//         {
//           id: 3,
//           title: "Service",
//           texte:
//             "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question",
//         },
//         {
//           id: 4,
//           title: "Sécurité",
//           texte: `La sécurité est la priorité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. 
//           En laissant unenote aussi bien à l'hôte qu'aux locataire,cela permet à nos équipes de vérifier que les standarts sont bien respectés. 
//           Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`,
//         },
//       ];
//       return Items;

//     }
    
// <Header />
//     return (
//     <div className="cover">
//     <img className="imageAbout" src={imageAbout} alt="montagnes"/>
//     </div>
//     );


// }




