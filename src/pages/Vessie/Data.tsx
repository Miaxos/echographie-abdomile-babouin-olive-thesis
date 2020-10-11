import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
// @ts-ignore
import mesurevessie from '../../assets/mesurevessie.png';

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

const VessieData = () => {
  return (
    <div className={style}>
      <div className={content}>
        <Title>
          Examen échographique de l'appareil urinaire du babouin olive{' '}
          <i>(Papio anubis)</i>
        </Title>
        <div className={ariane}>
          <Link to="/" className={linkStyle}>
            Accueil
          </Link>{' '}
          /{' '}
          <Link to="urinaire" className={linkStyle}>
            Examing échographique de l'appareil urinaire du babouin olive
          </Link>{' '}
          / Données échographique de la vessie
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Forme et topographie de la vessie</h3>
          <ul>
            <li>En coupe transversale:</li>
            <ul>
              <li>Crânialement: forme ovoïde, aplatie ventralement</li>
              <li>Caudalement: section triangulaire</li>
            </ul>
            <li>
              En coupe sagittale: section en forme de poire. Absence de
              distinction nette du trigone vésical
            </li>
            <li>
              Paroi vésicale dorsale possiblement repoussée par l’utérus, voire
              aussi par le côlon
            </li>
          </ul>

          <h3>Aspect de la vessie</h3>
          <ul>
            <li>Contenu anéchogène</li>
            <li>
              Artéfacts fréquents: artéfacts de renforcement postérieur des
              ultrasons, artéfacts de réverbération (dûs à une hyper
              réflectivité du péritoine), artéfacts de lobes latéraux
            </li>
            <li>
              Paroi vésicale composée de trois couches parallèles entre elles
              (sous-muqueuse hyperéchogène, musculeuse hypoéchogène, est séreuse
              hyperéchogène externe) la muqueuse étant confondue avec le contenu
              liquidien de la vessie
            </li>
            <li>
              Vascularisation vésicale et trajet urétéral proximal non
              visualisés
            </li>
            <li>
              Abouchement des uretères parfois observé dorso-latéralement à la
              vessie (trajet intramural)
            </li>
          </ul>

          <h3>Mesure de la paroi vésicale</h3>
          <ul>
            <li>
              Attention à ne pas inclure la paroi musculaire abdominale lors de
              la mesure de la paroi (souvent confondue avec la séreuse vésicale
              )
            </li>
            <li>
              Absence de différence significative d’épaisseur entre une
              réplétion modérée et une réplétion importante
            </li>
            <li>
              Différence significative entre l’épaisseur de la paroi vésicale
              des mâles et des femelles (n<sub>mâles</sub> = 8, n
              <sub>femelles</sub> = 14, p = 0.01616 )
            </li>
          </ul>
          <ImageWithLegend src={mesurevessie} />
        </div>
      </div>
    </div>
  );
};

export default VessieData;
