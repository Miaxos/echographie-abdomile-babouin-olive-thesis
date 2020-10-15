import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
// @ts-ignore
import mesureglandes from '../../assets/mesureglandessurrenales.png';

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
  flex: 1;
`;

const imageMesure = css`
  width: 100%;
  border: 2px solid #75052d;
  border-radius: 5px;
`;

const explication = css`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
  flex: 1;
`;

const linkStyle = css`
  color: #75052d;
`;

const ariane = css`
  font-size: 12px;
  margin-bottom: 5px;
`;

const imageContainer = css`
  margin: 10px;
`;

const paragraph = css`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
`;

const ImageWithLegend = ({ src, label }: { src: string; label?: string }) => (
  <div className={imageContainer}>
    <img src={src} alt="reins babouin olive" className={imageMesure} />
    {label && (
      <div style={{ color: 'grey', textAlign: 'center' }}>
        <i>{label}</i>
      </div>
    )}
  </div>
);

const GlandesData = () => {
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
            Examen échographique de l'appareil urinaire du babouin olive
          </Link>{' '}
          / Données échographiques des glandes surrénales
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Rapport et topographie</h3>
          <p className={paragraph}>
            La glande surrénale gauche plonge crânio-dorsalement jusqu’au
            pancréas. Elle est donc en contact crânio-dorsal avec le pancréas,
            médio-dorsal avec l’aorte, latéral voire latéro-ventral avec le rein
            gauche et caudal voire caudo-dorsal avec les vaisseaux rénaux. En
            effet, le rein gauche étant un organe assez mobile, la glande
            surrénale gauche peut chevaucher partiellement les vaisseaux rénaux
            et peut se glisser dorsalement au rein.
          </p>
          <p className={paragraph}>
            La glande surrénale droite est en contact crânio-ventral avec le
            foie, latéro-caudal avec le rein et médial avec la veine cave
            caudale.
          </p>

          <h3>Forme des glandes surrénales</h3>
          <ul>
            <li>Glande surrénale gauche:</li>
            <ul>
              <li>Coupe transversale: forme de boomerang</li>
              <li>
                Coupe longitudinale: forme de pointe de lance, avec un apex
                crânial
              </li>
            </ul>
            <li>Glande surrénale droite (plus rarement visualisée):</li>
            <ul>
              <li>Coupe transversale: forme de boomerang</li>
              <li>
                Coupe longitudinale: ovoïde latéralement et triangulaire
                médialement, avec un apex caudal
              </li>
            </ul>
          </ul>

          <h3>Comparaison d’échogénicité</h3>
          <ul>
            <li>
              Cortex surrénalien apparaît hypoéchogène par rapport au pancréas
              et au cortex rénal, parfois même presque anéchogène
            </li>
            <li>
              Medulla centrale (ligne épaisse hyperéchogène), non visualisée à
              chaque fois
            </li>
            <li>Capsule surrénalienne hyperéchogène</li>
          </ul>

          <h3>Mesures des glandes surrénales</h3>
          <ul>
            <li>
              Seules les épaisseurs en coupe sagittale des pôles crânial et
              caudal des glandes surrénales sont mesurées
            </li>
            <li>
              Pour la glande surrénale droite, la mesure s’effectue en coupe
              parasagittale médiale, au niveau de sa section triangulaire
            </li>
          </ul>
          <ImageWithLegend src={mesureglandes} />
        </div>
      </div>
    </div>
  );
};

export default GlandesData;
