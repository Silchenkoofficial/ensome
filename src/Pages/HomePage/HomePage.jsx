import React from "react";
import { FiPlayCircle } from "react-icons/fi";

import { Button, Link } from "src/Components";

import THEME from "src/theme";

import HomeBG from "src/assets/img/home-bg.png";

import { Section } from "src/Pages/Components";
import { Container } from "src/Layouts";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <div
          style={{
            padding: "75px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1 }}>
            <h1 style={{ ...THEME.FONTS.H[1], marginBottom: "30px" }}>
              Find true power in your data with Ensome
            </h1>
            <p style={{ ...THEME.FONTS.P[1] }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "30px",
              }}
            >
              <Button small>Learn more</Button>
              <Button small outlined icon={<FiPlayCircle size={24} />}>
                Watch the demo
              </Button>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={HomeBG}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
        <h2>HELLo</h2>
      </Container>
    </Section>
  );
};

export default HomePage;
