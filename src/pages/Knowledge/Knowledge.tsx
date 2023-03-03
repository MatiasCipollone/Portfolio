import React, { useRef } from "react";
import { LogoSize } from "../../common/components/Logos/logos-types";
import HTML from "../../common/components/Logos/social/HTMLLogo";
import CSS3 from "../../common/components/Logos/social/CSS3Logo";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import URL from "../../common/types/url-types";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";
import JSLogo from "../../common/components/Logos/social/JSLogo";
import TSLogo from "../../common/components/Logos/social/TSLogo";
import ReactLogo from "../../common/components/Logos/social/ReactLogo";

const Knowledge = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.KNOWLEDGE);

  return (
    <div ref={ref} className="projects">
      <Title
        title="Algunos conocimientos"
        subtitle="con los que trabajé anteriormente"
      />
      <div className="projects__box-container">
        <Box
          title="HTML 5"
          // description="Boilerplate with the basic structure for a web app using React and Typescript."
          // tags={["Typescript", "SASS", "React", "Webpack"]}
          image={HTML}
          imageSize={LogoSize.BIG}
          url={URL.HTML5}
        />
        <Box
          title="CSS 3"
          // description="An installation that generates unique art for every interaction using augmented reality."
          // tags={["Javascript", "A-frame"]}
          image={CSS3}
          imageSize={LogoSize.BIG}
          url={URL.CSS3}
        />
        <Box
          title="JavaScript"
          // description="Voting Dapp supported by Ethereum blockchain, supporting Proof of humanity validation for voters."
          // tags={["Solidity", "Javascript"]}
          image={JSLogo}
          imageSize={LogoSize.BIG}
          url={URL.JAVASCRIPT}
        />
        <Box
          title="React"
          // description="Github profile containing several projects created for my Youtube channel."
          // tags={["Javascript", "React"]}
          image={ReactLogo}
          imageSize={LogoSize.BIG}
          url={URL.REACT}
        />
        <Box
          title="Typescript"
          // description="This very same website, take a look under the hood."
          // tags={["Typescript", "React", "Sass"]}
          image={TSLogo}
          imageSize={LogoSize.BIG}
          url={URL.TYPESCRIPT}
        />
      </div>
    </div>
  );
};

export default Knowledge;
