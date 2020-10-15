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
} from '../../styles/images';

const DuodenumVideo = () => {
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
          / Vidéo du duodénum
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
            src="https://www.youtube.com/embed/ue8f0U3JcaY?start=108"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <ul>
            <li>
              Le duodénum est visualisable en positionnant la sonde au niveau de
              l’abdomen crânial, sur le plan médian ou légèrement à droite.
            </li>
            <li>
              Pour le repérer, il est possible de suivre le prolongement du
              pylore.
            </li>
            <li>
              De même, il est régulièrement observable à gauche de la vésicule
              biliaire ou médialement au rein droit.
            </li>
            <li>
              Pour suivre l’ensemble du duodénum, il faut tracer un C sur
              l’abdomen du babouin.
            </li>
            <li>
              L’épaisseur de la paroi duodénale est mesurée à l’aide d’une sonde
              linéaire.
            </li>
          </ul>
        </div>
        <NextPrevLinks
          next={
            <Link to="/digestif/duodenum/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default DuodenumVideo;
