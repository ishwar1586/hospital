import "./PrescriptionProgress.css";

import {

    CheckCircleRounded,

    PendingActionsRounded,

    ShoppingCartRounded,

} from "@mui/icons-material";

const PrescriptionProgress = ({

    totalMedicines = 0,

    addedMedicines = 0,

}) => {

    /* ===========================================================
       Calculations
    =========================================================== */

    const pendingMedicines =

        totalMedicines -

        addedMedicines;

    const progress =

        totalMedicines === 0

            ? 0

            : Math.round(

                  (addedMedicines /

                      totalMedicines) *

                      100

              );

    return (

        <section className="prescription-progress">

            {/* ==========================================
                Header
            ========================================== */}

            <div className="progress-header">

                <div>

                    <h2>

                        Prescription Progress

                    </h2>

                    <p>

                        Dispense all prescribed medicines before proceeding to billing.

                    </p>

                </div>

                <div className="progress-percentage">

                    {progress}%

                </div>

            </div>

            {/* ==========================================
                Stats
            ========================================== */}

            <div className="progress-stats">

                <div className="progress-card">

                    <ShoppingCartRounded />

                    <div>

                        <span>

                            Total

                        </span>

                        <strong>

                            {totalMedicines}

                        </strong>

                    </div>

                </div>

                <div className="progress-card success">

                    <CheckCircleRounded />

                    <div>

                        <span>

                            Added

                        </span>

                        <strong>

                            {addedMedicines}

                        </strong>

                    </div>

                </div>

                <div className="progress-card warning">

                    <PendingActionsRounded />

                    <div>

                        <span>

                            Pending

                        </span>

                        <strong>

                            {pendingMedicines}

                        </strong>

                    </div>

                </div>

            </div>

            {/* ==========================================
                Progress Bar
            ========================================== */}

            <div className="progress-bar">

                <div

                    className="progress-fill"

                    style={{

                        width: `${progress}%`,

                    }}

                />

            </div>

        </section>

    );

};

export default PrescriptionProgress;