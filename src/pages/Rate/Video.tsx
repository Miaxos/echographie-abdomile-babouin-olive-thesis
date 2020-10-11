import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
import NextPrevLinks from '../../components/NextPrevLinks';

const style = css`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
  padding-top: 60px;
`;
const content = css`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const grid = css`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  background-color: #f5f5f5;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const remarque = css`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const explication = css`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
`;

const paragraph = css`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
`;

const linkStyle = css`
  color: #75052d;
`;

const ariane = css`
  font-size: 12px;
  margin-bottom: 5px;
`;

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
            Examing échographique de l'appareil extra-digestif du babouin olive
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
            Organe superficiel: sonde sectorielle de fréquence élevée
            préconisée, associée à un gain moyen.
          </p>
          <p className={paragraph}>
            Utilisation d’une sonde linéaire difficile du fait de la proximité
            de l’arc costal
          </p>
          <p className={paragraph}>
            Localisation: le long de la paroi latérale gauche de l’animal,
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
            <Link to="/extradigestif/rate/data" className={linkStyle}>
              Données échographiques ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default RateVideo;
