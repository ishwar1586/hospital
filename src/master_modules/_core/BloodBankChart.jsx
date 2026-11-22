import { useState } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Cell,
} from "recharts";

import {
    bloodBankData,
} from "@/master_modules/configs/bloodbank.mock";

import "@/master_assets/styles/bloodbank.css";

/* CUSTOM TOOLTIP */

const CustomTooltip = ({
    active,
    payload,
}) => {

    if (
        active &&
        payload &&
        payload.length
    ) {

        const data = payload[0].payload;

        return (
            <div className="blood-tooltip">

                <h4>{data.group}</h4>

                <p>
                    <span
                        className="tooltip-dot"
                        style={{
                            background: data.color,
                        }}
                    />

                    Units:
                    <b>{data.units}</b>
                </p>

            </div>
        );
    }

    return null;
};

const BloodBankChart = () => {

    const [activeIndex, setActiveIndex] =
        useState(0);

    return (
        <div className="blood-chart-card">

            {/* HEADER */}

            <div className="blood-chart-header">

                <h3>
                    Blood Bank Stock (Units)
                </h3>

            </div>

            {/* CHART */}

            <div className="blood-chart-body">

                <ResponsiveContainer
                    width="100%"
                    height={250}
                >

                    <BarChart
                        data={bloodBankData}
                        barCategoryGap={16}
                    >

                        {/* GRID */}

                        <XAxis
                            //   dataKey="group"
                            //   axisLine={false}
                            //   tickLine={false}
                            //   tick={{
                            //     fontSize: 14,
                            //     fill: "#555",
                            dataKey="group"

                            axisLine={false}
                            tickLine={false}

                            interval={0}

                            tick={{
                                fontSize: 10,
                                fill: "#555",
                            }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: 13,
                                fill: "#666",
                            }}
                        />

                        {/* TOOLTIP */}

                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={false}
                        />

                        {/* BAR */}

                        <Bar
                            dataKey="units"
                            barSize={16}
                            radius={[8, 8, 8, 8]}
                            onMouseEnter={(_, index) =>
                                setActiveIndex(index)
                            }
                        >

                            {bloodBankData.map(
                                (entry, index) => (

                                    <Cell
                                        key={index}
                                        fill={entry.color}
                                        stroke={
                                            activeIndex === index
                                                ? "#0f172a"
                                                : "transparent"
                                        }
                                        strokeWidth={
                                            activeIndex === index
                                                ? 2
                                                : 0
                                        }
                                    />
                                )
                            )}

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

            {/* LEGEND */}

            <div className="blood-legend">

                {bloodBankData.map((item) => (

                    <div
                        className="blood-legend-item"
                        key={item.group}
                    >

                        <span
                            className="blood-legend-dot"
                            style={{
                                background: item.color,
                            }}
                        />

                        <span>
                            {item.group}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default BloodBankChart;