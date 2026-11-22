import "./DrawerTabs.css";

import { drawerTabs } from "../../config/drawerTabs";

const DrawerTabs = ({

    activeTab,

    setActiveTab,

}) => {

    return (

        <div className="drawer-tabs">

            {

                drawerTabs.map((tab) => (

                    <button

                        key={tab.id}

                        type="button"

                        className={`drawer-tab-btn ${
                            activeTab === tab.id
                                ? "active"
                                : ""
                        }`}

                        onClick={() =>
                            setActiveTab(tab.id)
                        }

                    >

                        <span className="drawer-tab-icon">

                            <tab.icon fontSize="small" />

                        </span>

                        <span>

                            {tab.label}

                        </span>

                    </button>

                ))

            }

        </div>

    );

};

export default DrawerTabs;