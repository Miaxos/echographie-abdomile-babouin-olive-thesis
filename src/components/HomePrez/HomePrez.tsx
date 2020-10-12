import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import HomeBadge from '../HomeBadge/HomeBadge';
// @ts-ignore
import reins from '../../assets/reins.png';
// @ts-ignore
// import abdomen from '../../assets/abdomen.png';
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
      {/*
      <HomeBadge
        title="Abdomen complet"
        subtitle="Machin truc much"
        image={abdomen}
        to="abdomen"
      /> */}
      <HomeBadge
        title="Appareil urinaire et ses annexes"
        subtitle="Examen échographique des reins, de la vessie, et des glandes surrénales"
        image={reins}
        to="urinaire"
      />
      <HomeBadge
        title="Appareil extra-digestif"
        subtitle="Examen échographique de la rate, du pancréas et du foie"
        image={extra}
        to="extradigestif"
      />
      <HomeBadge
        title="Appareil digestif"
        subtitle="Examen échographique de l'estomac, du duodénum, du jéjuno-iléon, du caecum et du côlon"
        image={digestif}
        to="digestif"
      />
      <HomeBadge
        title="Appareil génital mâle"
        subtitle="Examen échographique des testicules, de la prostate et des vésicules séminales"
        image={agm}
        to="genital_male"
      />
      <HomeBadge
        title="Appareil génital femelle"
        subtitle="Examen échographique de l'utérus et des ovaires"
        image={agf}
        to="genital_femelle"
      />
    </div>
  );
};

export default HomePrez;
