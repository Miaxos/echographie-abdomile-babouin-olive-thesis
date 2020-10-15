import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
// @ts-ignore
import mesuredigestif from '../../assets/mesuredigestif_all_expect_jujeno.png';
import {
  imageContainer,
  imageMesure,
  style,
  content,
  explication,
  linkStyle,
  ariane,
  paragraph,
} from '../../styles/images';
import NextPrevLinks from '../../components/NextPrevLinks';

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

export const MesureDigShared = () => <ImageWithLegend src={mesuredigestif} />;

const EstomacData = () => {
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
          / Données échographiques de l'estomac
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Données échographiques:</h3>
          <p className={paragraph}>
            L’estomac est distendu par du gaz, ce qui rend difficile la
            visualisation des différentes couches pariétales. Lorsque ces
            dernières sont observables, nous pouvons en mettre quatre en
            évidence, le plus souvent de même épaisseur et alternant
            hypoéchogénicité et hyperéchogénicité (muqueuse, sous-muqueuse,
            musculeuse et séreuse).
          </p>
          <p className={paragraph}>
            Régulièrement, la sous-muqueuse semble un peu plus épaisse que les
            autres couches.
          </p>
          <p className={paragraph}>
            Le contenu stomacal est hétérogène avec de nombreux artéfacts de
            réverbération, rendant difficile la distinction avec la paroi. Les
            plis de l’estomac sont parfois observés.
          </p>
          <MesureDigShared />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/digestif/estomac/atlas" className={linkStyle}>
              {'<- Atlas'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default EstomacData;
