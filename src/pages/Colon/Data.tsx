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

const ColonData = () => {
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
          / Données échographiques du côlon
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Données échographiques</h3>
          <p className={paragraph}>
            Le côlon est générateur de lignes hyperéchogènes et de cônes
            d’ombres, empêchant régulièrement la visualisation des organes
            adjacents (rein droit, pancréas, foie et rate notamment).
          </p>
          <p className={paragraph}>
            Le côlon descendant peut repousser la paroi dorsale de la vessie et
            il entre parfois en contact avec l’utérus ou les vésicules
            séminales.
          </p>
          <p className={paragraph}>
            Les <i>haustras</i> sont souvent visibles en coupe longitudinale,
            donnant un aspect bosselé à l’organe. Il est possible d’observer
            plusieurs coupes transversales adjacentes de côlon, confirmant la
            présence de boucles coliques.
          </p>
          <p className={paragraph}>
            Les différentes couches de la paroi colique sont rarement
            individualisables. Lorsqu’elles sont bien individualisées, une
            sous-muqueuse hyperéchogène épaisse est encadrée par une muqueuse et
            une musculeuse hypoéchogènes et plus fines. En surface, la séreuse
            hyperéchogène semble présenter la même épaisseur que la muqueuse et
            la musculeuse.
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
        </div>
      </div>
    </div>
  );
};

export default ColonData;
