// eslint-disable eslint-comments/no-unlimited-disable
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
// @ts-ignore
import Gallery from 'react-grid-gallery';
import { pipe } from 'fp-ts/es6/function';
import * as Record from 'fp-ts/es6/Record';
import * as ArrayFP from 'fp-ts/es6/Array';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
import NextPrevLinks from '../../components/NextPrevLinks';

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
  require.context('../../assets/digestif/caecum/', false, /\.(png|jpe?g|svg)$/),
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

const CaecumAtlas = () => {
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
          / Atlas jonction iléocæcale et cæcum
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <Gallery images={IMAGES} enableImageSelection={false} />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/digestif/caecum/video" className={linkStyle}>
              {'<- Vidéo'}
            </Link>
          }
          next={
            <Link to="/digestif/caecum/data" className={linkStyle}>
              {'Donnée échographique ->'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default CaecumAtlas;
