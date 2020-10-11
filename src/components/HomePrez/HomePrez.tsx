import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import HomeBadge from '../HomeBadge/HomeBadge';
// @ts-ignore
import reins from '../../assets/reins.png';
// @ts-ignore
import abdomen from '../../assets/abdomen.png';
// @ts-ignore
import extra from '../../assets/extra_digestif.png';
// @ts-ignore
import digestif from '../../assets/digestif.png';
// @ts-ignore
import agm from '../../assets/ag_male.png';
// @ts-ignore
import agf from '../../assets/agf_femelle.png';

const style = css`
  flex: 1;
  min-width: 500px;
  padding: 5px;
`;
const title = css`
  font-family: HelveticaNeue;
  font-size: 24px;
  color: #000000;
  text-align: left;
`;

const paragraph = css`
  text-align: justify;
  margin-bottom: 40px;
`;

const HomePrez = () => {
  return (
    <div className={style}>
      <div className={title}>
        <b>Examen échographique</b> du <br />
        Babouin olive <i>(Papio anubis)</i>
      </div>
      <p className={paragraph}>
        Dans le cadre d’une thèse d’exercice vétérinaire, une étude
        échographique sur l’abdomen du babouin olive <i>(Papio anubis)</i> a été
        menée sur un groupe mixte de babouin olive au centre de primatologie de
        Rousset. Cette interface interactive regroupe les différentes techniques
        d’examen échographique ainsi que les images et les mesures
        échographiques obtenues. Ce site constituera, nous l’espérons, un outil
        majeur d’aide au diagnostic des vétérinaires de zoos ou de centre de
        recherche.
      </p>
      <HomeBadge
        title="Abdomen complet"
        subtitle="Machin truc much"
        image={abdomen}
        to="abdomen"
      />
      <HomeBadge
        title="Appareil urinaire et glandes surrénales"
        subtitle="Examen échographique de l'appareil urinaire"
        image={reins}
        to="urinaire"
      />
      <HomeBadge
        title="Appareil extra-digestif"
        subtitle="machin"
        image={extra}
        to="extradigestif"
      />
      <HomeBadge
        title="Appareil digestif"
        subtitle="machin"
        image={digestif}
        to="urinaire"
      />
      <HomeBadge
        title="Appareil génital mâle"
        subtitle="blbl"
        image={agm}
        to="urinaire"
      />
      <HomeBadge
        title="Appareil génital femelle"
        subtitle="delkerlfekjr"
        image={agf}
        to="urinaire"
      />
    </div>
  );
};

export default HomePrez;
