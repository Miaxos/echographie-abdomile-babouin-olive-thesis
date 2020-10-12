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

const JejunoVideo = () => {
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
          / Vidéo du jéjuno-iléon
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
            src="https://www.youtube.com/embed/ue8f0U3JcaY?start=218"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <p className={paragraph}>
            Les anses jéjuno-iléales sont difficilement examinables à
            l’échographie. Des images mal délimitées évoquent leur présence dans
            l’ensemble de l’abdomen mais il est rarement possible de définir le
            contour des parois. De plus, le côlon ventral est à l’origine de
            nombreux cônes d’ombre, empêchant la visualisation des boucles
            jéjuno-iléales.
          </p>
          <p className={paragraph}>
            Un balayage crânio-caudal et de droite à gauche est néanmoins
            réalisé afin d’identifier une éventuelle anomalie.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/digestif/jejejuno_ileon/data" className={linkStyle}>
              Données échographiques ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default JejunoVideo;
