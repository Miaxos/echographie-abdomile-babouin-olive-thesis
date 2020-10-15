import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
import NextPrevLinks from '../../components/NextPrevLinks';
import {
  style,
  content,
  explication,
  linkStyle,
  ariane,
  remarque,
  grid,
  paragraph,
} from '../../styles/images';

const GlandesVideo = () => {
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
            Examen échographique de l'appareil urinaire du babouin olive
          </Link>{' '}
          / Vidéo glandes surrénales
        </div>
        <Spacing.Height.S />
        <div className={remarque}>
          <i>
            L'orientation du repère vert de la sonde échographique correspond à
            l'orientation du repère gris à gauche de l'écran.
          </i>
        </div>
        <Spacing.Height.M />
        <div className={grid}>
          <iframe
            title="video rein"
            width="1148"
            height="500"
            src="https://www.youtube.com/embed/rW5OgX5I0kI?start=283"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <p className={paragraph}>
            Afin d’examiner les glandes surrénales, une sonde sectorielle ou
            linéaire peut être utilisée, la sonde sectorielle permettant de
            mieux repérer l’organe, la sonde linéaire permettant de mieux
            visualiser la distinction cortico-médullaire.
          </p>
          <h3>Examen de la glande surrénale gauche:</h3>
          <p className={paragraph}>
            <b>Technique 1</b>:
            <ul>
              <li>
                Utiliser le rein gauche comme repère anatomique et explorer la
                région délimitée latéralement par le pôle crânial de ce dernier
                et médialement par l’aorte.
              </li>
            </ul>
          </p>
          <p className={paragraph}>
            <i>
              Le rein gauche étant un organe relativement mobile, il est
              possible d’utiliser d’autres repères anatomiquement plus stables.
            </i>
          </p>
          <p className={paragraph}>
            <b>Technique 2</b>:
            <ul>
              <li>
                Couper l’aorte transversalement à mi-hauteur de l’abdomen et
                remonter crânialement jusqu’à repérer le départ de l’artère
                rénale gauche. La veine rénale est visualisée ventralement à
                l’artère rénale.
              </li>
              <li>
                Explorer la zone délimitée caudalement par ces repères
                vasculaires rénaux et crânialement par le corps du pancréas. La
                glande surrénale gauche plonge dorso-crânialement.
              </li>
              <li>
                Il est également possible d’utiliser ces repères vasculaires
                rénaux en coupe longitudinale du corps de l’animal.
              </li>
            </ul>
          </p>
          <p className={paragraph}>
            <b>Technique 3</b>:
            <ul>
              <li>
                Suivre le corps du pancréas en coupe transversale, en partant de
                la queue.
              </li>
              <li>
                La glande surrénale gauche se retrouve accolée caudalement à
                celui-ci.
              </li>
            </ul>
          </p>
          <h3>Examen de la glande surrénale droite:</h3>
          <p className={paragraph}>
            Souvent plus difficile à mettre en évidence que la glande surrénale
            gauche (profondeur plus importante, présence d’appareil digestif
            plus superficiel)
          </p>
          <p className={paragraph}>
            <b>Technique</b>:
            <ul>
              <li>
                Technique: utiliser le rein droit comme repère anatomique, en
                explorant la zone délimitée latéralement par le pôle crânial de
                ce dernier, et médialement par la veine cave caudale. La glande
                surrénale droite s’observe accolée au foie.
              </li>
            </ul>
          </p>
          <p className={paragraph}>
            Le côlon ascendant se situant à proximité, il peut compliquer
            l’examen de la glande surrénale droite. Pour le contourner, il est
            possible de réaliser une coupe frontale.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/urinaire/glandes/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default GlandesVideo;
