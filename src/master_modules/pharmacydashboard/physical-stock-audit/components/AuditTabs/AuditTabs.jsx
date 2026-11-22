import auditTabs from "../../config/auditTabs";

import "./AuditTabs.css";

const AuditTabs = ({

    activeTab,

    onChange,

}) => {

    return (

        <div className="audit-tabs">

            {

                auditTabs.map((tab) => (

                    <button

                        key={tab.id}

                        type="button"

                        onClick={() => onChange(tab.value)}

                        className={`audit-tab ${

                            activeTab === tab.value

                                ? "active"

                                : ""

                        }`}

                    >

                        {tab.label}

                    </button>

                ))

            }

        </div>

    );

};

export default AuditTabs;