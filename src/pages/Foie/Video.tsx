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

const FoieVideo = () => {
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
            Examen échographique de l'appareil extra-digestif du babouin olive
          </Link>{' '}
          / Vidéo foie
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
            src="https://www.youtube.com/embed/U_yNPNOLvl0?start=322"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Examen échographique:</h3>
          <p className={paragraph}>
            Le foie se localise très crânialement : il se situe majoritairement
            sous l’arc costal, et le dépasse en partie à droite.
          </p>
          <p className={paragraph}>
            Le foie gauche est crânial à l’estomac et reste difficilement
            visualisable, du fait du contenu gastrique gazeux.
          </p>
          <p className={paragraph}>
            Pour examiner cet organe, des coupes paramédianes et transverses
            droites à angulation crâniale sont préconisées. Un balayage
            crânio-caudal permet de visualiser l’ensemble du foie.
          </p>
          <p className={paragraph}>
            Lorsque le côlon empêche l’observation correcte de l’organe, une
            coupe intercostale est envisageable (9e espace intercostal). Elle
            fournit une bonne visualisation de la taille ainsi que de la
            position de la vésicule biliaire.
          </p>
          <p className={paragraph}>
            La vésicule biliaire est balayée en coupe transversale droite puis
            parasagittale droite. Le départ du conduit cystique est observé au
            pôle dorsal de la vésicule biliaire.
          </p>
          <p className={paragraph}>
            Les artères hépatiques ne sont habituellement pas visibles à
            l’échographie, mise à part l’artère hépatique commune qui peut être
            observée au niveau du pédicule hépatique.
          </p>
          <p className={paragraph}>
            Les veines sont visualisées sous la forme de structures tubulaires
            anéchogènes. Les veines portes sont issues du tronc porte tandis que
            les veines hépatiques sont drainées par la veine cave caudale,
            dorsalement. Les veines portes se distinguent des veines hépatiques
            par leur paroi hyperéchogène, mais ce critère n’est pas toujours
            fiable. Il est plus simple de les identifier selon leur origine ou
            leur terminaison.
          </p>
          <p className={paragraph}>
            Pour visualiser la veine cave caudale et l’abouchement des veines
            hépatiques, il est nécessaire de réaliser une coupe transverse
            droite à angulation crâniale avec balayage crânio-caudal, jusqu’à
            observer la veine cave caudale à proximité du diaphragme. A ce
            niveau, les veines hépatiques sont identifiables le plus souvent au
            nombre de trois (droite, gauche et médiane). Il est possible qu’il
            existe des variantes anatomiques avec de plus de trois veines
            hépatiques, comme chez l’Homme, ce qui semble être confirmé par
            certains individus échographiés.
          </p>
          <p className={paragraph}>
            Pour repérer la porte du foie, il convient de suivre la veine porte
            en coupe transversale jusqu’à obtenir une coupe en « tête de mickey
            », correspondant à la veine porte, coiffée ventralement par l’artère
            hépatique à gauche et le conduit biliaire à droite. Un peu plus
            crânialement, la veine porte se divise en deux branches portales,
            une droite et une gauche. De même, il existe certainement des
            variantes anatomiques avec des trifurcations portales chez le
            babouin olive, comme c’est le cas en humaine, ou bien dans le genre
            voisin, chez le macaque crabier.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/extradigestif/foie/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default FoieVideo;
