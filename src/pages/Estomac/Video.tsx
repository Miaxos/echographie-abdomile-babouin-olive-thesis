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

const EstomacVideo = () => {
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
          / Vidéo de l'estomac
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
            src="https://www.youtube.com/embed/ue8f0U3JcaY?start=12"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <p className={paragraph}>
            L’estomac est observable caudalement au foie et majoritairement sur
            la gauche de l’animal, sauf lorsqu’il est très dilaté. Il est
            perpendiculaire à l’axe vertébral. Son fundus correspond au pôle
            gauche et son pylore, au pôle droit.
          </p>
          <p className={paragraph}>
            Les différentes couches de la paroi stomacale ne sont pas toujours
            visualisables. La mesure de cette dernière est plus facilement
            réalisable en coupe transversale de l’organe, avec une sonde
            linéaire de fréquence intermédiaire.
          </p>
          <p className={paragraph}>
            La technique d’examen du pylore et du sphincter pylorique consiste à
            se placer au niveau de la droite de l’estomac et à chercher la
            jonction entre la fin de l’estomac et le début du duodénum. Une zone
            de rétrécissement se dessine alors : il s’agit du sphincter
            pylorique.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/digestif/estomac/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default EstomacVideo;
