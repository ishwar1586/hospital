import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

import {
    labReportMock,
} from "@/master_modules/configs/labReport.mock";

import "@/master_assets/styles/labreport.css";

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

        const data = payload[0];

        return (
            <div
                className="lab-tooltip"
                style={{
                    background:
                        data.payload.color,
                }}
            >

                <span>
                    {data.name}:{" "}
                    <b>{data.value}</b>
                </span>

            </div>
        );
    }

    return null;
};

/* CUSTOM LABEL */

const renderCustomLabel = ({
    percent,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
}) => {

    const RADIAN = Math.PI / 180;

    const radius =
        innerRadius +
        (outerRadius - innerRadius) *
        0.55;

    const x =
        cx +
        radius *
        Math.cos(
            -midAngle * RADIAN
        );

    const y =
        cy +
        radius *
        Math.sin(
            -midAngle * RADIAN
        );

    return (
        <text
            x={x}
            y={y}
            fill="#ffffff"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={14}
            fontWeight={700}
        >
            {`${(
                percent * 100
            ).toFixed(1)}%`}
        </text>
    );
};

const LabReportChart = () => {

    return (
        <div className="lab-chart-card">

            {/* HEADER */}

            <div className="lab-chart-header">

                <h3>
                    Lab Report Status
                </h3>

            </div>

            {/* CHART */}

            <div className="lab-chart-body">

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <PieChart>

                        <Pie
                            data={labReportMock}

                            cx="50%"
                            cy="54%"

                            outerRadius={95}

                            dataKey="value"

                            labelLine={false}

                            label={
                                renderCustomLabel
                            }

                            activeShape={{
                                stroke: "#1d4ed8",
                                strokeWidth: 1,
                            }}
                        >

                            {labReportMock.map(
                                (entry, index) => (

                                    <Cell
                                        key={index}
                                        fill={entry.color}
                                    />
                                )
                            )}

                        </Pie>

                        {/* TOOLTIP */}

                        <Tooltip
                            content={
                                <CustomTooltip />
                            }
                        />

                       

                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            iconType="circle"
                            iconSize={2}
                        

                            wrapperStyle={{
                                paddingTop: "6px",
                                fontSize: "11px",
                            }}

                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default LabReportChart;