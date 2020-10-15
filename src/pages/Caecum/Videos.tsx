import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
import NextPrevLinks from '../../components/NextPrevLinks';
import {
  style,
  content,
  explication,
  linkStyle,
  ariane,
  remarque,
  grid,
  paragraph,
} from '../../styles/images';

const CaecumVideo = () => {
  return (
    <div className={style}>
      <div className={content}>
        <Title>
          Examen échographique de l'appareil digestif du babouin olive{' '}
          <i>(Papio anubis)</i>
        </Title>
        <div className={ariane}>
          <Link to="/" className={linkStyle}>
            Accueil
          </Link>{' '}
          /{' '}
          <Link to="/digestif" className={linkStyle}>
            Examen échographique de l'appareil digestif du babouin olive
          </Link>{' '}
          / Vidéo de la jonction iléocæcale et cæcum
        </div>
        <Spacing.Height.S />
        <div className={remarque}>
          <i>
            La pastille verte sur la sonde échographique correspond au repère de
            la pastille grise sur l'écran.
          </i>
        </div>
        <Spacing.Height.M />
        <div className={grid}>
          <iframe
            title="video digestif"
            width="1148"
            height="500"
            src="https://www.youtube.com/embed/ue8f0U3JcaY?start=248"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <p className={paragraph}>
            Le caecum se situe majoritairement le long de la limite latérale
            droite de l’abdomen. Il n’est pas toujours bien visualisé ni bien
            délimité. Lorsqu’il est identifié, un balayage de l’organe en coupe
            transversale puis longitudinale est réalisé.
          </p>
          <p className={paragraph}>
            L’apex caecal effectue un repli en direction médiale, avec un angle
            de 45-90°.
          </p>
          <p className={paragraph}>
            Les différentes couches pariétales étant difficilement
            identifiables, la mesure de la paroi est rarement réalisable.
          </p>
          <p className={paragraph}>
            La jonction iléo-caecale est parfois identifiée en face
            médio-dorsale du repli du caecum, en plaçant la sonde échographique
            dans une coupe transversale ou oblique au corps de l’animal. Il est
            possible de s’aider des nœuds lymphatiques iléo-caecaux adjacents
            pour la repérer.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/digestif/caecum/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default CaecumVideo;
