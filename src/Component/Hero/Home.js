import React from "react";
import "./Home.css";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Praise Okhae</span>
            </h1>
            <h2>
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "A Frontend Developer",
                      "A WordPress Expert",
                      "A Shopify Expert",
                      "A Content Writer",
                      "A ReactJs Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>

            <p>
              Responsible for full stack web development for all client
              projects. Increased customer satisfaction by 35% and customer
              retention by 40%.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
