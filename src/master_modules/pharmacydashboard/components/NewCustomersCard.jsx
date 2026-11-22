import "@/master_modules/pharmacydashboard/components/NewCustomersCard.css";


const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const CustomersCard = ({ data }) => {
  return (
    <div className="customers-card">
      <div className="card-header">
        <h3 className="card-title">New Customers</h3>
        <span className="view-all">View All</span>
      </div>

      {data.map((user, i) => (
        <div key={i} className="customer-row">
          <div className="avatar">
            {getInitials(user.name)}
          </div>

          <div className="customer-info">
            <p>{user.name}</p>
            <span>{user.email}</span>
          </div>

          <div className="dots">•••</div>
        </div>
      ))}
    </div>
  );
};

export default CustomersCard;