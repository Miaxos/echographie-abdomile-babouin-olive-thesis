import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
import {
  style,
  content,
  explication,
  linkStyle,
  ariane,
  paragraph,
} from '../../styles/images';
import { MesureDigShared } from '../Estomac/Data';
import NextPrevLinks from '../../components/NextPrevLinks';

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
          / Données échographiques du duodénum
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
          <MesureDigShared />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/digestif/duodenum/atlas" className={linkStyle}>
              {'<- Atlas'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default DuodenumData;
