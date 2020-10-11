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

const VessieVideo = () => {
  return (
    <div className={style}>
      <div className={content}>
        <Title>
          Examen échographique de l'appareil urinaire du babouin olive{' '}
          <i>(Papio anubis)</i>
        </Title>
        <div className={ariane}>
          <Link to="/" className={linkStyle}>
            Accueil
          </Link>{' '}
          /{' '}
          <Link to="urinaire" className={linkStyle}>
            Examing échographique de l'appareil urinaire du babouin olive
          </Link>{' '}
          / Vidéo vessie
        </div>
        <Spacing.Height.S />
        <div className={remarque}>
          <i>
            L'orientation du repère vert de la sonde échographique correspond à
            l'orientation du repère gris à gauche de l'écran.
          </i>
        </div>
        <Spacing.Height.M />
        <div className={grid}>
          <iframe
            title="video rein"
            width="1148"
            height="500"
            src="https://www.youtube.com/embed/rW5OgX5I0kI?start=450"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <p className={paragraph}>
            La vessie est située en région caudale de l’abdomen, comprise entre
            la paroi abdominale ventrale, le corps et le col de l’utérus chez
            les femelles, le côlon descendant et l’aorte dorsalement.
          </p>
          <p className={paragraph}>
            Pour limiter les artéfacts de réverbération et visualiser au mieux
            la paroi vésicale, une sonde linéaire de 12 MHz associée à un gain
            faible sont préconisés.
          </p>
          <p className={paragraph}>
            La sonde est positionnée en avant de la symphyse pubienne, en coupe
            sagittale ou transversale, et l’ensemble de l’organe est balayé
            crânio-caudalement puis de droite à gauche.
          </p>
          <p className={paragraph}>
            La mesure de l’épaisseur de la paroi vésicale ne se fait que sur
            vessie pleine et au niveau de la paroi vésicale ventrale.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/urinaire/vessie/data" className={linkStyle}>
              Données échographiques ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default VessieVideo;
