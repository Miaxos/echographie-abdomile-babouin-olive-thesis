import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
// @ts-ignore
import mesurerate1 from '../../assets/mesurerate1.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mesurerate2 from '../../assets/mesurerate2.png';
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

const RateData = () => {
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
          <Link to="urinaire" className={linkStyle}>
            Examen échographique de l'appareil extra-digestif du babouin olive
          </Link>{' '}
          / Données échographiques de la rate
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Rapport et topographie</h3>
          <p className={paragraph}>
            Crânio-médialement, la rate est en contact direct et systématique
            avec l’estomac, en longeant son fundus.
          </p>
          <p className={paragraph}>
            Caudalement, elle dépasse régulièrement le rein gauche
          </p>
          <p className={paragraph}>
            La plupart du temps, la queue du pancréas se retrouve entre la face
            caudo-médiale de la rate et le pôle crânial du rein gauche.
            Toutefois, la base de la rate est relativement mobile et elle n’est
            pas systématiquement en contact avec le pancréas.
          </p>

          <h3>Forme de la rate</h3>
          <ul>
            <li>La forme globale de la rate s’apparente à une langue.</li>
            <li>
              En région médiale, une coupe transversale de la base de la rate
              met en évidence une forme de quart de disque, plus ou moins
              globuleuse.
            </li>
            <li>
              A mesure que la sonde s’approche de l’apex, elle s’amenuise pour
              devenir triangulaire, puis ovoïde latéralement.
            </li>
            <li>
              Plusieurs hiles spléniques sont identifiés le long de la face
              gastrique, souvent observés au nombre de trois mais cela reste
              variable (deux ou quatre chez certains individus).
            </li>
          </ul>

          <h3>Aspects échographiques</h3>
          <ul>
            <li>Capsule splénique est fine et régulière.</li>
            <li>
              Parenchyme splénique peu homogène, d’échostructure finement
              granuleuse avec des foyers hyperéchogènes.
            </li>
            <li>
              Un Prédisposition des mâles à un épanchement sous-capsulaire.
            </li>
          </ul>

          <h3>Mesure de l’épaisseur de la rate</h3>
          <p className={paragraph}>
            Mesure de l’épaisseur de la rate est effectuée en utilisant la coupe
            passant par les hiles spléniques, le long de l’arc costal. La rate
            est alors coupée dans sa longueur et on cherche à passer par le hile
            le plus caudal, donnant l’épaisseur la plus importante. Cette
            manipulation est relativement reproductible.
          </p>
          <p className={paragraph}>
            Il n’existe pas de différence significative entre le mâle et la
            femelle.
          </p>
          <ImageWithLegend src={mesurerate1} />
          <ImageWithLegend src={mesurerate2} />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/extradigestif/rate/atlas" className={linkStyle}>
              {'<- Atlas'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default RateData;
