import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
import NextPrevLinks from '../../components/NextPrevLinks';

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
`;

const grid = css`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  background-color: #f5f5f5;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const remarque = css`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const explication = css`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
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

const PancreasVideo = () => {
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
          / Vidéo pancréas
        </div>
        <Spacing.Height.S />
        <div className={remarque}>
          <i>
            La pastille verte sur la sonde échographique correspond au repère de
            la pastille grise sur l'écran.
          </i>
        </div>
        <Spacing.Height.M />
        <div className={grid}>
          <iframe
            title="video extradigestif"
            width="1148"
            height="500"
            src="https://www.youtube.com/embed/U_yNPNOLvl0?start=103"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <p className={paragraph}>
            Une sonde sectorielle de fréquence 5-7 MHz et associée à un gain
            moyen est recommandée.
          </p>
          <p className={paragraph}>
            Une sonde linéaire peut également être utilisée afin d’observer plus
            finement l’architecture pancréatique. Néanmoins, la tête et le corps
            étant des portions relativement profondes, elles seront difficiles à
            localiser.
          </p>
          <p className={paragraph}>
            Selon l’état d’embonpoint de l’individu échographié, le pancréas
            sera observé plus ou moins en profondeur.
          </p>

          <h3>Tête et début du corps du pancréas:</h3>
          <p className={paragraph}>
            <b>Technique d’examen 1</b>:
            <ul>
              <li>
                Pour trouver la tête et le début du corps du pancréas, il est
                possible d’utiliser le système vasculaire avoisinant l’organe
                comme repère. L’artère mésentérique crâniale est issue de
                l’aorte et naît en regard du début du corps du pancréas,
                dorsalement à celui-ci. Elle est facilement identifiable par son
                espace cellulograisseux hyperéchogène. La veine mésentérique
                crâniale passe dorsalement au pancréas pour confluer avec la
                veine splénique et donner le tronc porte. La veine cave caudale
                chemine dorsalement à la tête du pancréas.
              </li>
            </ul>
          </p>
          <p className={paragraph}>
            <b>Technique d’examen 2</b>:
            <ul>
              <li>
                Depuis la porte du foie, se déplacer caudalement, jusqu’à la
                confluence entre veine mésentérique caudale et veine splénique:
                arrivée sur la tête du pancréas.
              </li>
            </ul>
          </p>
          <h3>Queue du pancréas:</h3>
          <p className={paragraph}>
            <b>Technique d'examen</b>:
            <ul>
              <li>
                Effectuer une coupe sagittale du rein gauche et se centrer sur
                son pôle crânial. La plupart du temps, la queue du pancréas
                apparaît alors, dans sa section transverse, en forme
                triangulaire et se situe ventralement, entre la face caudale de
                la rate et le pôle crânial du rein gauche.
              </li>
            </ul>
          </p>

          <h3>Corps du pancréas:</h3>
          <p className={paragraph}>
            <b>Technique d'examen</b>:
            <ul>
              <li>
                Le corps du pancréas longe la face viscérale de l’estomac. Il
                est souvent plus facile de partir de la tête ou de la queue du
                pancréas et de suivre le prolongement de l’organe pour parcourir
                le corps. Il peut néanmoins s’avérer très difficile à repérer du
                fait de l’interférence possible avec les gaz de l’estomac, du
                côlon transverse ou des portions de jéjuno-iléon dans la région.
                Il est possible de s’aider de la veine splénique qui longe le
                pancréas dorsalement.
              </li>
            </ul>
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/extradigestif/pancreas/data" className={linkStyle}>
              Données échographiques ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default PancreasVideo;
