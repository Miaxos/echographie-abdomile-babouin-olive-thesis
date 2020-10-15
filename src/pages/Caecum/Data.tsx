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

const CaecumData = () => {
  return (
    <div className={style}>
      <div className={content}>
        <Title>
          Examen échographique de l'appareil digestif du babouin olive{' '}
          <i>(Papio anubis)</i>
        </Title>
        <div className={ariane}>
          <Link to="/" className={linkStyle}>
            Accueil
          </Link>{' '}
          /{' '}
          <Link to="digestif" className={linkStyle}>
            Examen échographique de l'appareil digestif du babouin olive
          </Link>{' '}
          / Données échographiques de la jonction iléocæcale et cæcum
        </div>
        <Spacing.Height.M />
        <div className={explication}>
          <h3>Données échographiques</h3>
          <p className={paragraph}>
            Le caecum présente de nombreux replis caecaux. La paroi est
            difficilement observée et lorsqu’elle est visualisée, il est
            possible de distinguer quatre couches différentes alternant
            hypoéchogénicité et hyperéchogénicité, dont une sous-muqueuse
            épaisse.
          </p>
          <p className={paragraph}>
            La jonction caeco-colique se présente sous la forme d’une
            constriction : le sphincter caeco- colique. Elle présente une
            apparence similaire aux images échographiques obtenues chez les
            carnivores domestiques, c’est- à-dire grossièrement en forme de
            fleur.
          </p>
          <p className={paragraph}>
            Les nœuds lymphatiques iléo-caecaux sont observés aux alentours de
            la jonction iléocæcale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaecumData;
