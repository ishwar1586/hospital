import expiryTabs from "../../config/expiryTabs";

import "./ExpiryTabs.css";

const ExpiryTabs = ({

    activeTab,

    onChange,

}) => {

    return (

        <div className="expiry-tabs">

            {

                expiryTabs.map((tab)=>(

                    <button

                        key={tab.value}

                        type="button"

                        className={`expiry-tab ${

                            activeTab === tab.value

                                ? "active"

                                : ""

                        }`}

                        onClick={()=>

                            onChange(tab.value)

                        }

                    >

                        {tab.label}

                    </button>

                ))

            }

        </div>

    );

};

export default ExpiryTabs;