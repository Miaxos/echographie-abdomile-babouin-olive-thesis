import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';

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

const paragraph = css`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
`;

const DuodenumData = () => {
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
          <Link to="digestif" className={linkStyle}>
            Examen échographique de l'appareil digestif du babouin olive
          </Link>{' '}
          / Données échographique du duodénum
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Données échographiques</h3>
          <p className={paragraph}>
            A l’échographie, le duodénum est en contact crânial avec le foie, la
            vésicule biliaire, la veine cave caudale et plus ou moins la glande
            surrénale droite. Caudalement, il est en contact avec le pancréas et
            peut venir en déformer la tête, et touche parfois le rein droit.
          </p>
          <p className={paragraph}>
            Les différentes couches pariétales ne sont pas toujours
            visualisables. Lorsqu’elles sont toutes identifiables, nous pouvons
            en mettre quatre en évidence : une muqueuse interne hypoéchogène,
            une sous-muqueuse hyperéchogène, une musculeuse hypoéchogène et une
            séreuse hyperéchogène externe. La sous-muqueuse et la musculeuse
            sont les deux couches les plus épaisses de la paroi duodénale et
            elles présentent la même épaisseur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DuodenumData;
