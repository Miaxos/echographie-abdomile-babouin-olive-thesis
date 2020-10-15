// eslint-disable eslint-comments/no-unlimited-disable
import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import Gallery from 'react-grid-gallery';
import { pipe } from 'fp-ts/es6/function';
import * as Record from 'fp-ts/es6/Record';
import * as ArrayFP from 'fp-ts/es6/Array';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
import NextPrevLinks from '../../components/NextPrevLinks';
import {
  style,
  content,
  explication,
  linkStyle,
  ariane,
} from '../../styles/images';

/* eslint-disable */
function importAll(r: any) {
  const images = {};
  // @ts-ignore
  r.keys().map((item: any) => {
    // @ts-ignore
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// @ts-ignore
const images: Record<string, string> = importAll(
  // @ts-ignore
  require.context('../../assets/extra/pancreas/', false, /\.(png|jpe?g|svg)$/),
);
/* eslint-enable */

const IMAGES = pipe(
  images,
  Record.mapWithIndex((key, value) => ({
    src: value,
    thumbnail: value,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: key,
  })),
  Record.toArray,
  ArrayFP.map((elt) => elt[1]),
);

const PancreasAtlas = () => {
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
          <Link to="extradigestif" className={linkStyle}>
            Examen échographique de l'appareil extra-digestif du babouin olive
          </Link>{' '}
          / Atlas pancréas
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <Gallery images={IMAGES} enableImageSelection={false} />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/extradigestif/pancreas/video" className={linkStyle}>
              {'<- Vidéo'}
            </Link>
          }
          next={
            <Link to="/extradigestif/pancreas/data" className={linkStyle}>
              {'Données échographiques ->'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default PancreasAtlas;
