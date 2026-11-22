import {
  dashboardTwoCards,
} from "../mock/dashboardTwo.mock";

import {
  dashboardTwoConfig,
} from "../config/dashboardTwo.config";

import "../styles/dashboardOverviewCards.css";

import {
  FaArrowTrendUp,
} from "react-icons/fa6";

const DashboardOverviewCards = () => {

  return (
    <div className="overview-cards-grid">

      {dashboardTwoCards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            className={`overview-card ${card.color}`}
            key={card.id}
          >

            {/* TOP */}

            <div className="overview-card-top">

              {/* ICON */}

              <div className="overview-card-icon">

                <Icon />

              </div>

              {/* INFO */}

              <div className="overview-card-info">

                <h3>
                  {card.value}
                </h3>

                <p>
                  {card.title}
                </p>

              </div>

            </div>

            {/* FOOTER */}

            {dashboardTwoConfig.showFooter && (

              <div className="overview-card-footer">

                <button>
                  {
                    dashboardTwoConfig.footerText
                  }
                </button>

                {dashboardTwoConfig.showGrowth && (

                  <div className="growth-box">

                    <span>
                      {card.growth}
                
                      {/* <FaArrowTrendUp /> */}
                    </span>
                     {/* <div className="growth-icon">  
                    <FaArrowTrendUp />
                    </div> */}

                  </div>
                )}

              </div>
            )}

          </div>
        );
      })}

    </div>
  );
};

export default DashboardOverviewCards;