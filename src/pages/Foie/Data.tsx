import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { Spacing } from '../../components/Spacing';
// @ts-ignore
import mesurefoie1 from '../../assets/mesurefoie1.png';
// @ts-ignore
import mesurefoie2 from '../../assets/mesurefoie2.png';
// @ts-ignore
import mesurefoie3 from '../../assets/mesurefoie3.png';
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

const FoieData = () => {
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
          <Link to="extradigestif" className={linkStyle}>
            Examen échographique de l'appareil extra-digestif du babouin olive
          </Link>{' '}
          / Données échographiques du foie
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Rapport et topographie</h3>
          <p className={paragraph}>
            Le foie repose sur le diaphragme qui apparaît sous la forme d’une
            ligne hyperéchogène crâniale.
          </p>
          <p className={paragraph}>
            Le foie gauche est crânial à l’estomac et est situé sous les côtes,
            si bien qu’il n’est examinable qu’en cas de dilatation faible à
            modérée de l’estomac.
          </p>
          <p className={paragraph}>
            Le lobe droit du foie est le plus important et est caudalement en
            contact direct avec le pôle crânial du rein droit.
          </p>
          <p className={paragraph}>
            Le lobe caudé est séparé en deux lobes : le processus caudé recouvre
            ventralement la veine cave caudale, la glande surrénale droite et le
            pôle crânio-ventro-médial du rein droit ; le processus papillaire
            entoure dorsalement la porte du foie.
          </p>
          <p className={paragraph}>
            Aux alentours de la porte du foie, on retrouve la veine cave
            caudale, la veine porte, le pancréas et le duodénum. La glande
            surrénale droite est également en contact constant avec le lobe
            droit du foie.
          </p>
          <p className={paragraph}>
            Les différents lobes hépatiques ne sont pas individualisables, sauf
            en cas d’épanchement péritonéal. De l’épanchement est fréquemment
            observé le long du diaphragme, chez les mâles notamment.
          </p>
          <p className={paragraph}>
            Le duodénum s’observe à gauche de la vésicule biliaire.
          </p>
          <p className={paragraph}>
            En coupe intercostale, la vésicule biliaire ne touche pas
            systématiquement la marge ventrale du foie. Il est fréquent
            d’observer des images de cloisons au sein de la vésicule qui
            correspondent aux replis de cette dernière
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

          <h3>Forme et aspect de l’organe:</h3>
          <p className={paragraph}>
            La taille du foie est évaluée subjectivement : un foie normal
            présente des bords pointus, un lobe gauche fin, longeant le
            diaphragme et difficilement observable, et un recouvrement partiel
            du pôle crânial du rein droit.
          </p>
          <p className={paragraph}>
            Le parenchyme hépatique a un aspect échographique hétérogène,
            d’échostructure grossièrement granuleuse avec des foyers
            hyperéchogènes.
          </p>
          <p className={paragraph}>
            La vésicule biliaire peut présenter un contenu anéchogène, des
            lithiases biliaires ou de la boue biliaire. Les lithiases biliaires
            se présentent sous la forme de structures hyperéchogènes
            responsables d’un cône d’ombre. La boue biliaire apparaît sous la
            forme de contenu sédimentaire échogène et mobile. Les lithiases
            biliaires semblent fréquentes chez les mâles.
          </p>
          <p className={paragraph}>
            Enfin, il est fréquent d’observer des artéfacts de renforcement
            postérieur ou de lobe accessoire au niveau de la vésicule biliaire.
            De plus, il est possible de visualiser le même type d’artéfacts de
            réverbération qu’au niveau de l’estomac ou de la vessie, liés à une
            hyperréflectivité acoustique du péritoine.
          </p>

          <h3>Comparaison d’échogénicité</h3>
          <ul>
            <li>
              Le parenchyme hépatique est hypoéchogène à isoéchogène par rapport
              au cortex rénal droit adjacent.
            </li>
            <li>
              Les parois des vaisseaux portes apparaissent hyperéchogènes au
              sein du parenchyme, ce qui permet de les différencier des veines
              hépatiques. De plus, la vascularisation porte est ventrale tandis
              que les veines hépatiques sont dorsales.
            </li>
            <li>
              La paroi de la vésicule biliaire est hyperéchogène comparée au
              parenchyme hépatique.
            </li>
          </ul>

          <h3>Mesures</h3>
          <ul>
            <li>
              Les mesures des diamètres de la veine porte et de la veine cave
              caudale ont été effectuées au niveau de la porte du foie, en coupe
              longitudinale. Ce type de coupe expose l’opérateur à un risque de
              sous-estimations des diamètres vasculaires.{' '}
            </li>
            <li>
              La veine hépatique médiale a quant à elle été mesurée au niveau de
              sa confluence avec la veine cave caudal.
            </li>
            <li>
              L’épaisseur de la paroi vésiculaire est mesurée dorsalement.
            </li>
          </ul>
          <ImageWithLegend src={mesurefoie1} />
          <ImageWithLegend src={mesurefoie2} />
          <ImageWithLegend src={mesurefoie3} />
        </div>
        <NextPrevLinks
          prev={
            <Link to="/extradigestif/foie/atlas" className={linkStyle}>
              {'<- Atlas'}
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default FoieData;
