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
            <Link to="/digestif/colon/data" className={linkStyle}>
              Données échographiques ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default ColonVideo;
