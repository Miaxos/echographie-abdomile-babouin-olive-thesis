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

const ReinsVideo = () => {
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
          / Vidéo des reins
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
            src="https://www.youtube.com/embed/rW5OgX5I0kI?start=12&end=447"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <p className={paragraph}>
            Pour réaliser une échographie rénale, une sonde sectorielle de
            fréquence intermédiaire est préconisée, afin de visualiser
            l’ensemble de l’organe.
          </p>
          <p className={paragraph}>
            Pour faciliter le repérage des reins, la sonde est positionnée dans
            le plan médian en arrière de l’appendice xiphoïde, puis est glissée
            progressivement de chaque côté de l’hypocondre. Selon les individus,
            on les retrouve plus ou moins latéralement, mais ils sont toujours à
            plus de la mi- distance sternum-marge latérale. Le rein droit est
            situé juste en arrière de l’arc costal ou bien se glisse
            partiellement dessous, tandis que le rein gauche est plus mobile,
            entre 1 à 5 doigts de distance de l’hypocondre. Le rein gauche est
            plutôt superficiel tandis que le droit nécessite souvent d’exercer
            une pression moyenne sur l’abdomen.
          </p>
          <p className={paragraph}>
            Les mesures échographiques sont réalisées en coupe sagittale du rein
            pour la longueur, l’épaisseur et le rapport cortico-médullaire
            (médulla/cortex). La pseudo-largeur est mesurée en coupe
            transversale, en prenant pour repère le départ des branches du Y. Ce
            Y correspond au sinus rénal.
          </p>
          <p className={paragraph}>
            La mesure des vaisseaux rénaux est effectuée au niveau de leur
            départ de l’aorte.
          </p>
        </div>
        <NextPrevLinks
          next={
            <Link to="/urinaire/reins/atlas" className={linkStyle}>
              Atlas ->
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default ReinsVideo;
