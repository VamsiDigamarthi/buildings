import React, { useState } from "react";
import "./ConstructionPackages.css";
import { AiOutlinePlus } from "react-icons/ai";
import { PiParallelogramFill } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
const ConstructionPackages = () => {
  const [displayItem, setDisplayItem] = useState(0);
  return (
    <div className="construction-pack-container">
      <div className="construction-pack-first-inner-card">
        <PiParallelogramFill size={30} color="#ff6600" />

        <h1>Home Construction Packages in chennai</h1>
        <PiParallelogramFill size={30} color="#ff6600" />
      </div>
      <p>Find the best home construction packages.*</p>
      <p>
        Currently showing for
        <select>
          <option value="all">chennai</option>
          <option value="residential">Hyderabd</option>
          <option value="bengaluru">bengaluru</option>
        </select>
      </p>
      <div className="construction-pack-main-card">
        <div className="constriction-pack-inner-card">
          <h3>Basic Packages - 1,810/sq.f (incl. GST)</h3>
          <div className="construct-pack-down-tabs">
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(1)}
                className="construct-plan-plus-icons"
              >
                <p>Design & Drawings</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 1 && (
                <div>
                  <p>Architectural Layout 2D</p>
                  <p>Basic Elevation</p>
                  <p>Structure Design</p>
                  <p>3d Elevation</p>
                </div>
              )}
            </div>
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(2)}
                className="construct-plan-plus-icons"
              >
                <p>Structure</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 2 && (
                <div>
                  <p>Steel - Sunvik or Prime Gold or kamadhenu or quivalent</p>
                  <p>Cement - Dalmia Bharathi or euivalent of 43 or 53 grade</p>
                  <p> Aggreegate - 20mm & 40mm</p>
                </div>
              )}
            </div>
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(3)}
                className="construct-plan-plus-icons"
              >
                <p>Kitchen</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 3 && (
                <div>
                  <p>Ceramic Wall Dado - Upto Rs.40 per Sqft</p>
                  <p>Main Sink Faucet - Upto Rs. 1300</p>
                  <p>Any Other Faucer or Accessories - ISI Marked</p>
                </div>
              )}
            </div>
          </div>
          <p>Get in touch with us</p>
          <div className="construct-lets-build-btn-card">
            <button>Let's Build</button>
            <TiArrowRight size={25} color="#fff" />
          </div>
        </div>
        <div className="constriction-pack-inner-card">
          <h3>Classic Packages - 1,940/sq.f (incl. GST)</h3>
          <div className="construct-pack-down-tabs">
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(1)}
                className="construct-plan-plus-icons"
              >
                <p>Design & Drawings</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 1 && (
                <div>
                  <p>Architectural Layout 2D</p>
                  <p>Basic Elevation</p>
                  <p>Structure Design</p>
                  <p>3d Elevation</p>
                </div>
              )}
            </div>
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(2)}
                className="construct-plan-plus-icons"
              >
                <p>Structure</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 2 && (
                <div>
                  <p>Steel - Sunvik or Prime Gold or kamadhenu or quivalent</p>
                  <p>Cement - Dalmia Bharathi or euivalent of 43 or 53 grade</p>
                  <p> Aggreegate - 20mm & 40mm</p>
                </div>
              )}
            </div>
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(3)}
                className="construct-plan-plus-icons"
              >
                <p>Kitchen</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 3 && (
                <div>
                  <p>Ceramic Wall Dado - Upto Rs.40 per Sqft</p>
                  <p>Main Sink Faucet - Upto Rs. 1300</p>
                  <p>Any Other Faucer or Accessories - ISI Marked</p>
                </div>
              )}
            </div>
          </div>
          <p>Get in touch with us</p>
          <div className="construct-lets-build-btn-card">
            <button>Let's Build</button>
            <TiArrowRight size={25} color="#fff" />
          </div>
        </div>
        <div className="constriction-pack-inner-card">
          <h3>Premium Packages - 2,250/sq.f (incl. GST)</h3>
          <div className="construct-pack-down-tabs">
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(1)}
                className="construct-plan-plus-icons"
              >
                <p>Design & Drawings</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 1 && (
                <div>
                  <p>Architectural Layout 2D</p>
                  <p>Basic Elevation</p>
                  <p>Structure Design</p>
                  <p>3d Elevation</p>
                </div>
              )}
            </div>
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(2)}
                className="construct-plan-plus-icons"
              >
                <p>Structure</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 2 && (
                <div>
                  <p>Steel - Sunvik or Prime Gold or kamadhenu or quivalent</p>
                  <p>Cement - Dalmia Bharathi or euivalent of 43 or 53 grade</p>
                  <p> Aggreegate - 20mm & 40mm</p>
                </div>
              )}
            </div>
            <div className="construct-pack-plus-icons-parents-card">
              <div
                onClick={() => setDisplayItem(3)}
                className="construct-plan-plus-icons"
              >
                <p>Kitchen</p>
                <AiOutlinePlus size={20} />
              </div>
              {displayItem === 3 && (
                <div>
                  <p>Ceramic Wall Dado - Upto Rs.40 per Sqft</p>
                  <p>Main Sink Faucet - Upto Rs. 1300</p>
                  <p>Any Other Faucer or Accessories - ISI Marked</p>
                </div>
              )}
            </div>
          </div>
          <p>Get in touch with us</p>
          <div className="construct-lets-build-btn-card">
            <button>Let's Build</button>
            <TiArrowRight size={25} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPackages;
