import type { FC } from "react";
import React from "react";
import PageCSSContainer from "../components/PageCSSContainer";
import PageMotionContainer from "../components/PageMotionContainer";

const HomePage = () => {
  return (
    <PageMotionContainer>
      <div className="home page">Home Page</div>
    </PageMotionContainer>
  );
};

export default HomePage;
