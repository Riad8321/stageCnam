import React from 'react'
import Header from '../home/header/Header'
import Footer from '../home/footer/Footer'
import './bilan.css'
import 'animate.css';

export default function Bilan() {
  return (
    <>
        <Header />
        <h1 className='h1-bilan animate__animated animate__shakeY'>Le bilan de cette immersion</h1>
        <p className="p-bilan">
        <span>J</span>'ai toujours été passionné par les nouvelles technologies et le développement web, et c'est pour cette raison que j'ai choisi de faire un stage d'observation dans une société de développement web.
        <br/><br/>Lors de mon stage, j'ai eu la chance de travailler avec une équipe de développeurs talentueux et expérimentés. Dès mon arrivée, ils m'ont accueillie chaleureusement et m'ont présenté les différents projets sur lesquels ils travaillaient. Ils m'ont également expliqué en détail comment fonctionnait leur société et leur processus de développement.
        <br/>Au cours de mon stage, j'ai eu l'opportunité d'assister à des réunions de projet et de discuter avec les développeurs pour en apprendre davantage sur leur travail et leur parcours. Grâce à cette immersion, j'ai pu découvrir de nouvelles technologies et approfondir mes connaissances en développement web.
        <br/><br/>Je suis vraiment reconnaissant envers La Boite Immo qui m'a accueillie pour ce stage. Leur équipe de développeurs m'a fait sentir la bienvenue et m'a apporté son soutien tout au long de mon stage. J'ai beaucoup appris grâce à eux, et je suis maintenant plus motivée que jamais à entreprendre ma reconversion dans le domaine du développement web.
        <br/><br/>Je tiens à remercier chaleureusement La Boite Immo qui m'a accueillie pour ce stage d'observation. Cette expérience a été très enrichissante pour moi, et j'espère avoir l'occasion de travailler à nouveau avec eux à l'avenir.
        <br/><br/>Je tiens aussi à remercier le Cnam et TVT, sans eux je n’aurais pas eu cette opportunité.
        </p>
        <h4 className="h2-bilan2">Si l'opportunité de revenir travailler pour La Boite Immo se présente, est-ce que j'envisagerais de la saisir ?</h4>
        <p className="p-bilan2">Bien sûr, je serais ravi de pouvoir retravailler pour La Boite Immo si l'occasion se présentait.</p>
        <Footer />
    </>
  )
}
