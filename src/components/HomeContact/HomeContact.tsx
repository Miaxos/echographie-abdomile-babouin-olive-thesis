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
  flex: 1;
`;

const icon = css`
  margin-right: 5px;
`;

const nameStyle = css`
  color: ${RED};
`;

const titleStyle = css`
  marign-top: 1px;
`;
const contactStyle = css`
  margin-top: 5px;
  display: flex;
  align-items: center;

  a {
    color: ${LIGHT_RED};
  }
`;

type Props = {
  name: string;
  title: string;
  mail: string;
};

const Contact = ({ name, title, mail }: Props) => {
  return (
    <div className={contact}>
      <div className={nameStyle}>
        <b>{name}</b>
      </div>
      <div className={titleStyle}>
        <i>{title}</i>
      </div>
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
        mail="maud.martin@gmail.com"
      />
    </div>
  );
};

export default HomeContact;
