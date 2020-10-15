import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import ReinsImage from '../components/Reins';
import { Spacing } from '../components/Spacing';

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

const grid = css`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  background-color: #f5f5f5;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const descriptif = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 495px;
  min-width: 300px;
  margin-left: 5px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const linkStyle = css`
  color: #75052d;
`;

const linkStyleWithEffect = css`
  color: #75052d;
  &:hover,
  &:focus {
    font-weight: 600;
  }
`;

const titleSection = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const listSection = css`
  margin-left: 10px;
  margin-bottom: 2px;
`;

const ariane = css`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Urinaire = () => {
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
          / Examen échographique de l'appareil urinaire du babouin olive
        </div>
        <Spacing.Height.S />
        <div className={grid}>
          <ReinsImage />
          <div className={grid}>
            <div>
              <div className={descriptif}>
                <div className={titleSection}>Reins</div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/reins/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/reins/atlas"
                    className={linkStyleWithEffect}
                  >
                    Atlas
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/reins/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographiques
                  </Link>
                </div>

                <div className={titleSection}>Vessie</div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/vessie/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/vessie/atlas"
                    className={linkStyleWithEffect}
                  >
                    Atlas
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/vessie/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographiques
                  </Link>
                </div>

                <div className={titleSection}>Glandes surrénales</div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/glandes/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/glandes/atlas"
                    className={linkStyleWithEffect}
                  >
                    Atlas
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/urinaire/glandes/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographiques
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urinaire;
