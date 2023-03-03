/* eslint-disable max-len */
import React, { useRef } from "react";
import Button from "../../common/components/Button/Button";
import Link from "../../common/components/Link/Link";
import { LinkTypes } from "../../common/components/Link/link-types";
import useIntersectionObserver from "../../common/hooks/useIntersectionObserver";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import Title from "../../components/Title/Title";

const WhoAmI = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.WHOAMI);
  const animationEntry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
  });

  return (
    <div ref={ref} className="whoami">
      <div className="whoami__container">
        <Title title="Acerca de mi" subtitle="~: Quien soy?" />
        <p>
          Hola! Mi nombre es <b>Matias</b>, soy programador web. Tengo 1 año de
          experiencia en desarrollo de paginas web y programacion. Estoy
          cursando la carrera de desarrollo de páginas Web en la Universidad
          Nacional de La Matanza.
        </p>
        <p>
          Actualmente me encuentro trabajando en el área de programacion
          Front-end, en la empresa de desarrollo e innovación ADOX.S.A. Mi
          objetivo es construir un puente entre el <b>diseño</b> y el{" "}
          <b>codigo</b>. Si este sitio logro llamar tu atencion contactame.
        </p>
        <Link href="mailto:cipollone5673@gmail.com" type={LinkTypes.BUTTON}>
          <Button label="Ponete en contacto!" />
        </Link>
      </div>
      <div
        className="whoami__moving-border"
        data-animate={animationEntry?.isIntersecting}
      >
        <div className="whoami__concept whoami__concept--design">
          Development
        </div>
        <div className="whoami__concept whoami__concept--coding">
          Programming
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
