import "./InformationTab.css";

import SummaryCards from "./SummaryCards";
import DrawerSection from "./DrawerSection";

const InformationTab = ({

    stock,

}) => {

    if (!stock) return null;

    return (

        <div className="information-tab">

            {/* ================================= */}
            {/* Summary Cards */}
            {/* ================================= */}

            <SummaryCards

                stock={stock}

            />

            {/* ================================= */}
            {/* Medicine Information */}
            {/* ================================= */}

            <DrawerSection

                title="Medicine Information"

                type="medicine"

                stock={stock}

            />

            {/* ================================= */}
            {/* Stock Information */}
            {/* ================================= */}

            <DrawerSection

                title="Stock Information"

                type="stock"

                stock={stock}

            />

            {/* ================================= */}
            {/* Pricing Information */}
            {/* ================================= */}

            <DrawerSection

                title="Pricing Information"

                type="pricing"

                stock={stock}

            />

            {/* ================================= */}
            {/* Supplier Information */}
            {/* ================================= */}

            <DrawerSection

                title="Supplier Information"

                type="supplier"

                stock={stock}

            />

        </div>

    );

};

export default InformationTab;