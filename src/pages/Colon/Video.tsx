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

const ColonVideo = () => {
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
          / Vidéo du côlon
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
            src="https://www.youtube.com/embed/ue8f0U3JcaY?start=358"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <p className={paragraph}>
            Le côlon ascendant débute après le sphincter caeco-colique, zone de
            rétrécissement. Il s’observe également aux alentours du rein droit,
            ventralement à celui-ci.
          </p>
          <p className={paragraph}>
            Le côlon transverse s’observe plus ou moins crânialement, du fait de
            sa mobilité importante. Il est donc parfois possible de le
            visualiser aux alentours de la rate, gênant l’examen de cette
            dernière.
          </p>
          <p className={paragraph}>
            Pour examiner le côlon descendant, il est nécessaire de se placer en
            avant de la symphyse pubienne et de le suivre en remontant
            crânialement. Dans un premier temps, il se situe dorsalement à la
            vessie, puis chemine plus ou moins sur sa droite. En effet, il est
            parfois visualisé sur le plan médian.
          </p>
          <p className={paragraph}>
            La mesure de la paroi colique ne s’effectue que sur côlon non vide
            et que lorsque les quatre couches pariétales sont identifiables.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/digestif/colon/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default ColonVideo;
