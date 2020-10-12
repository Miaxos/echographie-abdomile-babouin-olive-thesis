import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import Mail from '../Icons/Mail';
import { RED, LIGHT_RED } from '../../styles/color';

const contactContainer = css`
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 40px;
`;

const contact = css`
  &:first-child {
    margin-right: auto;
  }
`;

const icon = css`
  margin-right: 5px;
`;

const nameStyle = css`
  color: ${RED};
`;

const titleStyle = css`
  marign-top: 1px;
  marign-bottom: 1px;
`;
const contactStyle = css`
  margin-top: 1px;
  display: flex;
  align-items: center;

  a {
    color: ${LIGHT_RED};
  }
`;

type Props = {
  name: string;
  title: string;
  subtitle?: string;
  mail: string;
  ordre?: string;
};

const Contact = ({ name, title, subtitle, mail, ordre }: Props) => {
  return (
    <div className={contact}>
      <div className={nameStyle}>
        <b>{name}</b>
      </div>
      <div className={titleStyle}>
        <i>{title}</i>
      </div>
      {subtitle && (
        <div className={titleStyle}>
          <i>{subtitle}</i>
        </div>
      )}
      {ordre && <div className={titleStyle}>Numéro d'ordre: {ordre}</div>}
      <div className={contactStyle}>
        <Mail className={icon} width={15} color={RED} />
        <a href={`mailto:${mail}`}>{mail}</a>
      </div>
    </div>
  );
};

const HomeContact = () => {
  return (
    <div className={contactContainer}>
      <Contact
        name="Dr. Maud Martin"
        title="Autrice de la thèse"
        mail="maud.martin.vet@outlook.fr"
        ordre="31468"
      />

      <Contact
        name="Dr. Romain Lacoste"
        title="DMV"
        subtitle="Directeur - Station de Primatologie - CNRS"
        mail="romain.lacoste@primato.cnrs.fr"
      />
    </div>
  );
};

export default HomeContact;
