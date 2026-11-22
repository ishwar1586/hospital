import "@/master_assets/styles/DashboardCard.css";

const DashboardCard = ({
  title,
  value,
  Icon,
  color,
}) => {

  return (
    <div
      className={`dashboard-card ${color}`}
    >

      {/* TOP */}

      <div className="card-top">

        {/* ICON */}

        <div className="card-icon">

          {Icon && (
            <Icon size={24} />
          )}

        </div>

        {/* INFO */}

        <div className="card-info">

          <p className="card-title">
            {title}
          </p>

          <h3 className="card-value">
            {value}
          </h3>

        </div>

      </div>

    </div>
  );
};

export default DashboardCard;