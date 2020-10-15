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
          <MesureDigShared />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/digestif/colon/atlas" className={linkStyle}>
              {'<- Atlas'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default ColonData;
