import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { Spacing } from '../components/Spacing';
import DigestifImage from '../components/Digestif';

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

const Digestif = () => {
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
          / Examen échographique de l'appareil digestif du babouin olive
        </div>
        <Spacing.Height.S />
        <div className={grid}>
          <DigestifImage />
          <div className={grid}>
            <div>
              <div className={descriptif}>
                <div className={titleSection}>Estomac</div>
                <div className={listSection}>
                  <Link
                    to="/digestif/estomac/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/estomac/atlas"
                    className={linkStyleWithEffect}
                  >
                    Atlas
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/estomac/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographique
                  </Link>
                </div>

                <div className={titleSection}>Duodénum</div>
                <div className={listSection}>
                  <Link
                    to="/digestif/duodenum/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/duodenum/atlas"
                    className={linkStyleWithEffect}
                  >
                    Atlas
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/duodenum/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographique
                  </Link>
                </div>

                <div className={titleSection}>Jéjuno-iléon</div>
                <div className={listSection}>
                  <Link
                    to="/digestif/jejejuno_ileon/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/jejejuno_ileon/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographique
                  </Link>
                </div>

                <div className={titleSection}>Jonction iléocæcale et cæcum</div>
                <div className={listSection}>
                  <Link
                    to="/digestif/caecum/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/caecum/atlas"
                    className={linkStyleWithEffect}
                  >
                    Atlas
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/caecum/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographique
                  </Link>
                </div>

                <div className={titleSection}>Côlon</div>
                <div className={listSection}>
                  <Link
                    to="/digestif/colon/video"
                    className={linkStyleWithEffect}
                  >
                    Examen échographique (Vidéo)
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/colon/atlas"
                    className={linkStyleWithEffect}
                  >
                    Atlas
                  </Link>
                </div>
                <div className={listSection}>
                  <Link
                    to="/digestif/colon/data"
                    className={linkStyleWithEffect}
                  >
                    Données échographique
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

export default Digestif;
