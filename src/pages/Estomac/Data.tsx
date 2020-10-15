import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
// @ts-ignore
import mesureestomac from '../../assets/mesureestomac.png';

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
          <h3>Données échographiques</h3>
          <p className={paragraph}>
            L’estomac est distendu par du gaz, ce qui rend difficile la
            visualisation des différentes couches pariétales. Lorsque ces
            dernières sont observables, nous pouvons en mettre quatre en
            évidence, le plus souvent de même épaisseur et alternant
            hypoéchogénicité et hyperéchogénicité (muqueuse, sous- muqueuse,
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

          <ImageWithLegend src={mesureestomac} />
        </div>
      </div>
    </div>
  );
};

export default EstomacData;
