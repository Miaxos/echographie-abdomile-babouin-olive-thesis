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

const RateVideo = () => {
  return (
    <div className={style}>
      <div className={content}>
        <Title>
          Examen échographique de l'appareil extra-digestif du babouin olive{' '}
          <i>(Papio anubis)</i>
        </Title>
        <div className={ariane}>
          <Link to="/" className={linkStyle}>
            Accueil
          </Link>{' '}
          /{' '}
          <Link to="/extradigestif" className={linkStyle}>
            Examen échographique de l'appareil extra-digestif du babouin olive
          </Link>{' '}
          / Vidéo rate
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
            title="video extradigestif"
            width="1148"
            height="500"
            src="https://www.youtube.com/embed/U_yNPNOLvl0?start=13"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <p className={paragraph}>
            Organe superficiel : sonde sectorielle de fréquence élevée
            préconisée, associée à un gain moyen.
          </p>
          <p className={paragraph}>
            Utilisation d’une sonde linéaire difficile du fait de la proximité
            de l’arc costal
          </p>
          <p className={paragraph}>
            Localisation : le long de la paroi latérale gauche de l’animal,
            caudalement à l’estomac, crânialement au rein gauche et latéralement
            (voire caudalement) à la queue du pancréas. Elle est plus ou moins
            crâniale selon l’état de distension de l’estomac et passe souvent
            sous l’arc costal.
          </p>
          <p className={paragraph}>
            Les coupes longitudinales sont obtenues par abord latéral,
            transversalement au corps du babouin. La coupe sagittale pure de
            l’organe est impossible du fait de la gêne occasionnée par l’arc
            costal.
          </p>
          <p className={paragraph}>
            Des coupes transversales de l’organe sont obtenues en plaçant la
            sonde dans un plan paramédian afin de visualiser la base ventrale de
            la ratepuis en déplaçant la sonde perpendiculairement à la paroi
            abdominale, tout en se dirigeant crânio-dorsalement.
          </p>
          <p className={paragraph}>
            Pour visualiser les hiles spléniques, il est nécessaire de
            positionner la sonde le long de l’arc costal et de l’orienter
            légèrement crânialement
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/extradigestif/rate/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default RateVideo;
