import "./TestMasterHeader.css";

import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";

import headerActions from "../../config/headerActions";

const TestMasterHeader = ({ onAction }) => {
    return (
        <div className="test-master-header">

            <div className="test-master-header__left">

                <div className="test-master-header__title-wrapper">

                    <div className="test-master-header__icon">
                        <ScienceOutlinedIcon />
                    </div>

                    <div>
                        <h1 className="test-master-header__title">
                            Test Master
                        </h1>

                        <p className="test-master-header__subtitle">
                            Manage laboratory tests, pricing, sample types,
                            reference ranges and workflow.
                        </p>
                    </div>

                </div>

            </div>

            <div className="test-master-header__actions">

                {headerActions.map((action) => {

                    const Icon = action.icon;

                    return (

                        <button
                            key={action.id}
                            className={`header-btn ${action.variant}-btn`}
                            onClick={() => onAction(action.id)}
                        >

                            <Icon fontSize="small" />

                            <span>{action.label}</span>

                        </button>

                    );

                })}

            </div>

        </div>
    );
};

export default TestMasterHeader;