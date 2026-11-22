// src/features/IPDManagement/components/StatsCards/IPDStatsCards.jsx

import React from "react";

import {
  BedOutlined,
  LocalHospitalOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";

import {
  IPD_STATS_CONFIG,
} from "../../config/ipdConfig";

import {
  ipdStatsMock,
} from "../../mock/ipd.mock";

import {
  formatNumber,
  formatPercentage,
  formatTrend,
} from "../../utils/ipdFormatters";

import "./IPDStatsCards.css";


/* ============================================================
 * ICON MAP
 * ============================================================
 *
 * Config se icon key aayegi:
 *
 * "bed"
 * "admission"
 * "discharge"
 *
 * Actual MUI component yahan resolve hoga.
 * ============================================================
 */

const STAT_ICON_MAP = {
  bed: BedOutlined,
  admission: LocalHospitalOutlined,
  discharge: ExitToAppOutlined,
};


/* ============================================================
 * VALUE FORMATTERS
 * ============================================================
 *
 * Stats configuration ke basis par value format hoti hai.
 * ============================================================
 */

const formatStatValue = (
  value,
  valueKey
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "—";
  }

  /*
   * Percentage based secondary values
   */
  if (
    valueKey ===
    "occupancyPercentage" ||
    valueKey ===
    "availabilityPercentage"
  ) {
    return formatPercentage(value);
  }

  return formatNumber(value);
};


/* ============================================================
 * COMPONENT
 * ============================================================
 */

const IPDStatsCards = ({
  statsData = ipdStatsMock,
}) => {
  /* ==========================================================
   * SAFE DATA
   * ==========================================================
   */

  const safeStatsData =
    statsData || {};


  /* ==========================================================
   * SAFE CONFIG
   * ==========================================================
   */

  const statsConfig =
    Array.isArray(IPD_STATS_CONFIG)
      ? IPD_STATS_CONFIG
      : [];


  /* ==========================================================
   * RENDER
   * ==========================================================
   */

  return (
    <section className="ipd-stats-cards">

      <div className="ipd-stats-cards__grid">

        {statsConfig.map((stat) => {
          const {
            id,
            label,
            valueKey,
            icon,
            iconVariant = "primary",
            trendKey,
            trendType = "positive",
            trendSuffix,
            secondaryValueKey,
            secondarySuffix,
          } = stat;


          /* --------------------------------------------------
           * RESOLVE VALUES FROM DATA
           * --------------------------------------------------
           */

          const value =
            safeStatsData?.[valueKey];

          const trend =
            trendKey
              ? safeStatsData?.[trendKey]
              : null;

          const secondaryValue =
            secondaryValueKey
              ? safeStatsData?.[
                  secondaryValueKey
                ]
              : null;


          /* --------------------------------------------------
           * RESOLVE ICON
           * --------------------------------------------------
           */

          const StatIcon =
            STAT_ICON_MAP[icon];


          /* --------------------------------------------------
           * TREND DISPLAY
           * --------------------------------------------------
           */

          const formattedTrend =
            trend !== null &&
            trend !== undefined &&
            trend !== ""
              ? formatTrend(trend)
              : "";


          /* --------------------------------------------------
           * TREND CLASS
           * --------------------------------------------------
           */

          const trendClass =
            trendType
              ? `ipd-stats-card__trend--${trendType}`
              : "";


          /* --------------------------------------------------
           * RENDER CARD
           * --------------------------------------------------
           */

          return (
            <article
              key={id}
              className="ipd-stats-card"
            >

           

              <div className="ipd-stats-card__top">

                <div className="ipd-stats-card__heading">

                  <span className="ipd-stats-card__label">
                    {label}
                  </span>

                </div>


               

                {StatIcon && (
                  <div
                    className={`
                      ipd-stats-card__icon
                      ipd-stats-card__icon--${iconVariant}
                    `}
                  >
                    <StatIcon
                      fontSize="small"
                    />
                  </div>
                )}

              </div>


              
              <div className="ipd-stats-card__value-row">

                <span className="ipd-stats-card__value">
                  {formatStatValue(
                    value,
                    valueKey
                  )}
                </span>

              </div>


                    
              {(formattedTrend ||
                secondaryValue !== null &&
                secondaryValue !== undefined &&
                secondaryValue !== "") && (

                <div className="ipd-stats-card__footer">

                  {/* ==========================================
                      TREND
                      ========================================== */}

                  {formattedTrend && (
                    <span
                      className={`
                        ipd-stats-card__trend
                        ${trendClass}
                      `}
                    >
                      {formattedTrend}
                    </span>
                  )}


                  {/* ==========================================
                      TREND SUFFIX
                      ========================================== */}

                  {formattedTrend &&
                    trendSuffix && (
                      <span className="ipd-stats-card__suffix">
                        {trendSuffix}
                      </span>
                  )}


                  {/* ==========================================
                      SECONDARY VALUE
                      ========================================== */}

                  {secondaryValue !== null &&
                    secondaryValue !== undefined &&
                    secondaryValue !== "" && (
                      <span className="ipd-stats-card__secondary">

                        {formatStatValue(
                          secondaryValue,
                          secondaryValueKey
                        )}

                        {secondarySuffix && (
                          <span className="ipd-stats-card__secondary-suffix">
                            {secondarySuffix}
                          </span>
                        )}

                      </span>
                  )}

                </div>
              )}

            </article>
          );
        })}

      </div>

    </section>
  );
};


export default IPDStatsCards;