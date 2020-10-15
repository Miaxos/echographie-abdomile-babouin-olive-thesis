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
import NextPrevLinks from '../../components/NextPrevLinks';

const JejunoData = () => {
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
          / Données échographiques du jéjuno-iléon
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Données échographiques</h3>
          <p className={paragraph}>
            Comme précisé ci-dessus, les parois jéjuno-iléales sont rarement
            identifiables. Lorsque les anses intestinales sont vides, flaccides
            et collabées, il est impossible de les individualiser
            longitudinalement ou transversalement. Lorsqu’elles sont
            visualisées, les différentes couches pariétales sont néanmoins non
            identifiables donc la paroi n’est pas mesurée.
          </p>
        </div>
        <NextPrevLinks
          prev={
            <Link to="/digestif/jejejuno_ileon/video" className={linkStyle}>
              {'<- Vidéo'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default JejunoData;
