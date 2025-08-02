import React, { Component } from 'react';
import camper from '../../static/images/off-grid/camper.png';
import dune from '../../static/images/off-grid/dune.jpg';
import hills from '../../static/images/off-grid/hills.svg';
import logo from '../../static/images/off-grid/logo.png';
import mountains from '../../static/images/off-grid/mountains.svg';
import peaks from '../../static/images/off-grid/peaks.svg';
import ray from '../../static/images/off-grid/ray.png';
import sitter from '../../static/images/off-grid/sitter.png';
import sky from '../../static/images/off-grid/sky.svg';
import stars1 from '../../static/images/off-grid/stars1.jpg';
import stars2 from '../../static/images/off-grid/stars2.png';

import './BackGround.scss';

class BackGround extends Component {
  static displayName = 'BackGround';
  static defaultProps = {};

  render() {
    return (
      <div>
        <div className="layer-container">
          <div id="background">
            <img id="sky" className="scene-layer base" src={sky} alt="Sky" />
            <img id="far-stars" className="scene-layer screen" src={stars1} alt="Far Stars" />
          </div>

          <img id="near-stars" className="scene-layer screen" src={stars2} alt="Near Stars" />
          <img id="far-mountains" className="scene-layer" src={peaks} alt="Far Mountains" />
          <img id="mid-mountains" className="scene-layer" src={mountains} alt="Mid Mountains" />
          <img id="near-mountains" className="scene-layer" src={hills} alt="Near Mountains" />
          <img id="dune" className="scene-layer" src={dune} alt="Dune" />
          <img id="sitter" className="glow" src={sitter} alt="Sitter" />
          <img id="camper" src={camper} alt="Camper" />

          <div id="ray-mask">
            <div id="ray2" className="glow-ray"></div>
            <img id="ray1" className="glow-ray pulse" src={ray} alt="Satellite" />
          </div>

          <div id="logo-container">
            <img id="logo" className="glow" src={logo} alt="Logo" />
            <div id="logo-text">kernelcon 2026 / X.X.26 - Y.Y.26</div>
          </div>
        </div>

        <main className="demo-content">
          <section style={{ minHeight: "120vh", margin: "0vh", padding: "4rem 2rem", color: "white" }}>
            {/* Empty hero section */}
          </section>

          <section
            className="content"
            style={{
              minHeight: "120vh",
              margin: "10vh",
              padding: "4rem 2rem",
              color: "white",
              background: "rgba(255,255,255,0.2)",
            }}
          >
            <h2>Vivamus sagittis</h2>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
          </section>

          <section
            className="content"
            style={{
              minHeight: "120vh",
              margin: "10vh",
              padding: "4rem 2rem",
              color: "white",
              background: "rgba(255,255,255,0.2)",
            }}
          >
            <h2>Morbi leo risus</h2>
            <p>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis
              euismod.
            </p>
          </section>
        </main>
      </div>

    );
  }
}

export default BackGround;
