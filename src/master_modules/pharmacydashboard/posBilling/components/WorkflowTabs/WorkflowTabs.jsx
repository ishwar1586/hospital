import "./WorkflowTabs.css";

import {
    LockOutlined,
    CheckCircleRounded,
} from "@mui/icons-material";

import workflowTabs from "../../config/workflowTabs";

const WorkflowTabs = ({

    activeTab,

    completedTabs = [],

    onTabChange,

}) => {

    /* ==========================================================
       Helpers
    ========================================================== */

    const activeIndex = workflowTabs.findIndex(

        (tab) => tab.id === activeTab

    );

    const totalSteps = workflowTabs.length;

    const completedCount = completedTabs.length;

    const progressPercentage =

        Math.round(

            (completedCount / totalSteps) * 100

        );

    /* ==========================================================
       Check Step State
    ========================================================== */

    const isCompleted = (tabId) =>

        completedTabs.includes(tabId);

    const isActive = (tabId) =>

        activeTab === tabId;

   const isLocked = (index) => {

    /* --------------------------------------
       First Step
    -------------------------------------- */

    if (index === 0) {

        return false;

    }

    /* --------------------------------------
       Allow Going Back
    -------------------------------------- */

    if (index <= activeIndex) {

        return false;

    }

    /* --------------------------------------
       Lock Future Steps
    -------------------------------------- */

    return !completedTabs.includes(

        workflowTabs[index - 1].id

    );

};

    /* ==========================================================
       Handle Click
    ========================================================== */

    // const handleStepClick = (

    //     tab,

    //     index

    // ) => {

    //     if (isLocked(index)) return;

    //     onTabChange?.(tab.id);

    // };

    const handleStepClick = (

    tab,

    index

) => {

    if (

        isLocked(index)

    ) {

        return;

    }

    onTabChange?.(

        tab.id

    );

};

    return (

        <section className="workflow-container">

            {/* ========================================== */}
            {/* Header */}
            {/* ========================================== */}

            <div className="workflow-header">

                <div>

                    <h2>

                        Pharmacy Billing Workflow

                    </h2>

                    <p>

                        Complete every workflow step to
                        generate the final pharmacy bill.

                    </p>

                </div>

                <div className="workflow-progress">

                    <span>

                        Progress

                    </span>

                    <strong>

                        {progressPercentage}%

                    </strong>

                </div>

            </div>

            {/* ========================================== */}
            {/* Progress Bar */}
            {/* ========================================== */}

            <div className="workflow-progress-track">

                <div

                    className="workflow-progress-fill"

                    style={{

                        width:

                            `${progressPercentage}%`,

                    }}

                />

            </div>

            {/* ========================================== */}
            {/* Steps */}
            {/* ========================================== */}

            <div className="workflow-stepper">

                {

                    workflowTabs.map(

                        (

                            tab,

                            index

                        ) => {

                            const Icon =

                                tab.icon;

                            const completed =

                                isCompleted(

                                    tab.id

                                );

                            const active =

                                isActive(

                                    tab.id

                                );

                            const locked =

                                isLocked(

                                    index

                                );

                                                            return (

                                <div

                                    key={tab.id}

                                    className={`
                                        workflow-step
                                        ${active ? "active" : ""}
                                        ${completed ? "completed" : ""}
                                        ${locked ? "locked" : ""}
                                    `}

                                    onClick={() =>

                                        handleStepClick(

                                            tab,

                                            index

                                        )

                                    }

                                    title={

                                        locked

                                            ? "Complete previous step first"

                                            : tab.description

                                    }

                                >

                                    {/* ================================= */}
                                    {/* Connector */}
                                    {/* ================================= */}

                                    {

                                        index !== 0 && (

                                            <div

                                                className={`
                                                    workflow-line
                                                    ${
                                                        completed
                                                            ? "completed"
                                                            : ""
                                                    }
                                                `}

                                            />

                                        )

                                    }

                                    {/* ================================= */}
                                    {/* Step Circle */}
                                    {/* ================================= */}

                                    <div

                                        className="workflow-circle"

                                    >

                                        {

                                            completed ? (

                                                <CheckCircleRounded />

                                            ) : locked ? (

                                                <LockOutlined />

                                            ) : (

                                                <>

                                                    <span className="step-number">

                                                        {

                                                            String(

                                                                index + 1

                                                            ).padStart(

                                                                2,

                                                                "0"

                                                            )

                                                        }

                                                    </span>

                                                    <Icon />

                                                </>

                                            )

                                        }

                                    </div>

                                    {/* ================================= */}
                                    {/* Content */}
                                    {/* ================================= */}

                                    <div className="workflow-content">

                                        <h4>

                                            {tab.label}

                                        </h4>

                                        <p>

                                            {

                                                completed

                                                    ? "Completed"

                                                    : active

                                                    ? "In Progress"

                                                    : locked

                                                    ? "Locked"

                                                    : "Pending"

                                            }

                                        </p>

                                    </div>

                                </div>

                            );

                        }

                    )

                }

            </div>

            {/* ========================================== */}
            {/* Footer */}
            {/* ========================================== */}

            <div className="workflow-footer">

                <span>

                    Completed

                    {" "}

                    <strong>

                        {completedCount}

                    </strong>

                    {" / "}

                    {totalSteps}

                    {" "}Steps

                </span>

                <span>

                    Current Step :

                    {" "}

                    <strong>

                        {

                            workflowTabs[activeIndex]

                                ?.label

                        }

                    </strong>

                </span>

            </div>

        </section>

    );

};

export default WorkflowTabs;