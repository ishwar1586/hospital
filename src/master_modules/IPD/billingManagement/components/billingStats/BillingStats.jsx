import "@/master_modules/IPD/billingManagement/styles/billingStats.css";

import { billingStats } from "@/master_modules/IPD/billingManagement/mock/billingStats.mock";

const BillingStats = () => {

  return (

    <div className="billing-stats-grid">

      {billingStats.map(
        (card, index) => {

          const Icon =
            card.icon;

          return (

            <div
              key={index}
              className="billing-stat-card"
            >

              <div
                className={`billing-stat-icon ${card.type}`}
              >

                <Icon />

              </div>

              <div className="billing-stat-content">

                <h4>
                  {card.title}
                </h4>

                <h2>
                  {card.value}
                </h2>

                <p>

                  <span>
                    {card.change}
                  </span>

                  {" "}
                  {card.description}

                </p>

              </div>

            </div>

          );

        }
      )}

    </div>

  );

};

export default BillingStats;