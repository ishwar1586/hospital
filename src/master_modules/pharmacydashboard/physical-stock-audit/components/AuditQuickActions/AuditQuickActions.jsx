import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import quickActions from "../../config/quickActions";

import "./AuditQuickActions.css";

const AuditQuickActions = () => {

    const handleClick = (action) => {

        console.log(action.title);

    };

    return (

        <div className="audit-quick-actions">

            <div className="audit-quick-header">

                <h3>

                    Quick Actions

                </h3>

                <p>

                    Frequently used inventory operations

                </p>

            </div>

            <div className="audit-quick-grid">

                {

                    quickActions.map((item)=>{

                        const Icon = item.icon;

                        return(

                            <button

                                key={item.id}

                                type="button"

                                className={`quick-card ${item.color}`}

                                onClick={()=>handleClick(item)}

                            >

                                <div className="quick-card-left">

                                    <div className={`quick-icon ${item.color}`}>

                                        <Icon/>

                                    </div>

                                    <div>

                                        <h4>

                                            {item.title}

                                        </h4>

                                        <p>

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                                <ArrowForwardRoundedIcon className="quick-arrow"/>

                            </button>

                        );

                    })

                }

            </div>

        </div>

    );

};

export default AuditQuickActions;