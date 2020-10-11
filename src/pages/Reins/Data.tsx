import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
// @ts-ignore
import mesurereins from '../../assets/mesurereins.png';
// @ts-ignore
import mesurereins2 from '../../assets/mesurereins2.png';
// @ts-ignore
import mesurereins3 from '../../assets/mesurereins3.png';
// @ts-ignore
import mesurereins4 from '../../assets/mesurereins4.png';

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

const paragraph = css`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
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

const ReinsData = () => {
  return (
    <div className={style}>
      <div className={content}>
        <Title>
          Examen échographique de l'appareil urinaire du babouin olive (Papio
          anubis)
        </Title>
        <div className={ariane}>
          <Link to="/" className={linkStyle}>
            Accueil
          </Link>{' '}
          /{' '}
          <Link to="urinaire" className={linkStyle}>
            Examing échographique de l'appareil urinaire du babouin olive
          </Link>{' '}
          / Données échographique
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Rapports anatomiques</h3>
          <ul>
            <li>
              Contact constant du pôle crânial du rein droit avec le lobe droit
              du foie
            </li>
            <li>
              Contact inconstant du rein droit avec le duodénum et le pancréas
              médialement
            </li>
            <li>
              Côlon ascendant régulièrement observé aux alentours du rein droit,
              en zone ventrale, compliquant alors son examen
            </li>
            <li>
              Surrénale droite observée en zone crânio-médiale du rein droit
            </li>
          </ul>

          <h3>Forme et Aspect échographique</h3>
          <ul>
            <li>En coupe sagittale, les reins prennent une forme de haricot</li>
            <li>Le contour rénal est régulier et lisse. </li>
            <li>
              Le rein droit s’apparentant souvent à une goutte, avec un bord
              rond crânialement et conique caudalement (la pression exercée sur
              le rein en modifie facilement la forme globale)
            </li>
            <li>
              Dans le plan transverse, les reins ont une forme ovoïde ou en D (D
              inversé pour le rein droit) et la corticale s’apparente à un sabot
              de cheval
            </li>
            <li>La capsule rénale n’est pas visualisée à l’échographie </li>
            <li>
              Le rapport cortico-médullaire est aux alentours de 1 sur les deux
              reins
            </li>
          </ul>

          <h3>Comparaison d’échogénicité</h3>
          <ul>
            <li>
              La corticale rénale est hyperéchogène par rapport à la medulla,
              avec une échostructure finement granuleuse
            </li>
            <li>Le cortex rénal gauche est hypo- à isoéchogène à la rate</li>
            <li>
              Le cortex rénal droit est hyper- à isoéchogène au parenchyme
              hépatique
            </li>
            <li>
              Sinus rénal fortement hyperéchogène et médial, en forme de Y en
              coupe transversale de rein
            </li>
          </ul>

          <h3>Mesures des reins</h3>
          <ImageWithLegend src={mesurereins} />
          <ImageWithLegend src={mesurereins2} />
          <ImageWithLegend src={mesurereins3} />
          <ImageWithLegend src={mesurereins4} />
        </div>
      </div>
    </div>
  );
};

export default ReinsData;
