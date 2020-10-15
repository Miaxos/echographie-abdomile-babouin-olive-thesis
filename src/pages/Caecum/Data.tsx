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

const CaecumData = () => {
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
          / Données échographiques de la jonction iléocæcale et cæcum
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Données échographiques</h3>
          <p className={paragraph}>
            Le caecum présente de nombreux replis caecaux. La paroi est
            difficilement observée et lorsqu’elle est visualisée, il est
            possible de distinguer quatre couches différentes alternant
            hypoéchogénicité et hyperéchogénicité, dont une sous-muqueuse
            épaisse.
          </p>
          <p className={paragraph}>
            La jonction caeco-colique se présente sous la forme d’une
            constriction : le sphincter caeco-colique. Elle présente une
            apparence similaire aux images échographiques obtenues chez les
            carnivores domestiques, c’est-à-dire grossièrement en forme de
            fleur.
          </p>
          <p className={paragraph}>
            Les nœuds lymphatiques iléo-caecaux sont observés aux alentours de
            la jonction iléocæcale.
          </p>
          <MesureDigShared />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/digestif/caecum/atlas" className={linkStyle}>
              {'<- Atlas'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default CaecumData;
