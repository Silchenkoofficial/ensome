import React from "react";

import { Button, Switch, Tabs, Link } from "src/Components";

import { FiPlayCircle } from "react-icons/fi";
import HomeBG from "src/assets/img/home-bg.png";

import { FaLongArrowAltRight } from "react-icons/fa";

import { Section } from "src/Pages/Components";
import { Container } from "src/Layouts";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Link to="/">
          Read more
          <FaLongArrowAltRight />
        </Link>
        <Link to="/" disabled>
          Read more
          <FaLongArrowAltRight />
        </Link>
        <Link to="/">Read more</Link>
        <Link to="/" disabled>
          Read more
        </Link>
        {/* <div
          style={{
            padding: "75px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Find true power in your data with Ensome</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Button small>Learn more</Button>
              <Button small outlined icon={<FiPlayCircle size={24} />}>
                Watch the demo
              </Button>
            </div>
          </div>
          <div>
            <img
              src={HomeBG}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div> */}
      </Container>
    </Section>
  );
};

export default HomePage;
