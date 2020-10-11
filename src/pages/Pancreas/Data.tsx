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

const PancreasData = () => {
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
          <Link to="/extradigestif" className={linkStyle}>
            Examing échographique de l'appareil extra-digestif du babouin olive
          </Link>{' '}
          / Données échographique du pancréas
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Rapport et topographie:</h3>
          <p className={paragraph}>
            A l’échographie, on observe le rapport entre la tête du pancréas et
            le duodénum, sur sa droite. Le rein droit est régulièrement observé
            dorsalement et à droite de la tête du pancréas, mais il n’est pas
            toujours dans le même plan, parfois plus caudal.
          </p>
          <p className={paragraph}>
            Le corps du pancréas longe l’estomac caudalement. La glande
            surrénale gauche s’accole au corps du pancréas ventro-crânialement.
            La veine splénique est souvent observée dorsalement au corps du
            pancréas.
          </p>
          <p className={paragraph}>
            La queue du pancréas remonte ventralement et s’insère le plus
            souvent entre la face caudo-médiale de la rate et le pôle crânial du
            rein gauche. Elle peut parfois s’étendre plus latéralement et
            atteindre la face pariétale de la rate.
          </p>

          <h3>Forme de l’organe:</h3>
          <ul>
            <li>
              A la section, le corps et la queue du pancréas apparaissent
              triangulaires avec l’apex du triangle en direction
              ventro-crâniale.
            </li>
            <li>
              La tête a une forme ovoïde en coupe transversale et peut être
              déformée par le duodénum adjacent.
            </li>
            <li>
              Les images échographiques mettent en évidence une portion en
              crochet sous la tête du pancréas, la question d’un processus
              unciforme se pose alors.
            </li>
          </ul>

          <h3>Aspect:</h3>
          <ul>
            <li>Le pancréas semble entouré d’une capsule hyperéchogène.</li>
            <li>
              Il est traversé en son milieu par le canal de Wirsung,
              apparaissant comme deux lignes hyperéchogènes encadrant une
              lumière anéchogène.
            </li>
            <li>
              Le pancréas présente une structure grossièrement granuleuse.
            </li>
            <li>
              L’artère et la veine splénique sont visible dorso-crânialement au
              pancréas, mais les branches pancréatiques de l’artère splénique ne
              sont pas visibles. De même, les rameaux pancréatico- duodénaux ne
              sont pas observés.
            </li>
          </ul>

          <h3>Comparaison d’échogénicité:</h3>
          <ul>
            <li>
              La comparaison d’échogénicité avec le rein gauche et la rate est
              aisée en coupe paramédiane crâniale gauche.
            </li>
            <li>
              Son parenchyme est hypo- à isoéchogène au cortex rénal et
              hypoéchogène à la rate. Son échostructure semble toutefois plus
              grossière que le cortex rénal, avec des ponctuations
              hyperéchogènes, ce qui rend la comparaison difficile.
            </li>
            <li>
              Le pancréas est toujours hyperéchogène par rapport à la glande
              surrénale gauche.
            </li>
          </ul>

          <h3>Mesures du pancréas:</h3>
          <p className={paragraph}>
            <b>Tête du pancréas</b>: mesure non réalisée du fait de sa non
            reproductibilité. En effet, elle est facilement déformée par le
            duodénum adjacent.
          </p>
          <p className={paragraph}>
            <b>Queue du pancréas</b>: mesure avant son segment terminal, au
            niveau du pôle crânial du rein. On cherche à obtenir une section
            triangulaire à peu près équilatérale. La mesure correspond à la
            hauteur du triangle dont la base longe le rein gauche. Plus
            rarement, il arrive que la queue du pancréas n’atteigne pas le rein
            gauche. La mesure est alors réalisée un peu plus médialement.
          </p>
          <p className={paragraph}>
            <b>Corps du pancréas</b>: est effectuée en coupe transversale, en
            prenant la hauteur du triangle dont l’apex est ventral. De plus, la
            mesure est réalisée à distance de la tête et non pas au niveau de la
            veine mésentérique crâniale, car le corps présente un rétrécissement
            à ce niveau-là.
          </p>
          <p className={paragraph}>
            Les diamètres de la veine splénique et de l’artère mésentérique
            crâniale sont mesurés au niveau de la tête du pancréas, dans sa
            coupe transversale.
          </p>
          <p className={paragraph}>
            Le diamètre de la veine splénique est mesuré au niveau de sa
            confluence avec la veine mésentérique crâniale.
          </p>
          <p className={paragraph}>
            Il existe une différence significative d’épaisseur du corps du
            pancréas selon le genre sexuel (mâle > femelle).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PancreasData;
