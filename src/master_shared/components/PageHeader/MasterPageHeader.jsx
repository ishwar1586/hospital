// import "./MasterPageHeader.css";

// const MasterPageHeader = ({ config, onAction }) => {
//   const HeaderIcon = config.icon;

//   return (
//     <div className="page-header">
//       <div className="page-header-left">
//         <div className="page-header-icon">
//           <HeaderIcon />
//         </div>

//         <div>
//           <h1 className="page-header-title">
//             {config.title}
//           </h1>

//           <p className="page-header-subtitle">
//             {config.subtitle}
//           </p>
//         </div>
//       </div>

//       <div className="page-header-actions">
//         {config.actions.map((action) => {
//           const ActionIcon = action.icon;

//           return (
//             <button
//               key={action.id}
//               className={`header-btn ${action.variant}-btn`}
//               onClick={() => onAction(action.id)}
//             >
//               <ActionIcon fontSize="small" />
//               <span>{action.label}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MasterPageHeader;




import "./MasterPageHeader.css";

const MasterPageHeader = ({ config, onAction }) => {
    return (
        <div className="master-page-header">

            {/* Left Section */}
            <div className="master-page-header__left">

                <div className="master-page-header__content">

                    <h1 className="master-page-header__title">
                        {config.title}
                    </h1>

                    <p className="master-page-header__subtitle">
                        {config.subtitle}
                    </p>

                </div>

            </div>

            {/* Right Section */}
            <div className="master-page-header__actions">

                {config.actions?.map((action) => {

                    const ActionIcon = action.icon;

                    return (
                        <button
                            key={action.id}
                            type="button"
                            className={`master-page-header__button ${action.variant}-btn`}
                            onClick={() => onAction(action.id)}
                        >

                            {ActionIcon && (
                                <ActionIcon fontSize="small" />
                            )}

                            <span>
                                {action.label}
                            </span>

                        </button>
                    );

                })}

            </div>

        </div>
    );
};

export default MasterPageHeader;