import "@/master_assets/styles/masterlist.css";

const MasterList = ({ columns, data }) => {
  return (
    <div className="master-list">
      {/* header row */}
      <div className="list-head">
        {columns.map((col) => (
          <span key={col.key}>{col.label}</span>
        ))}
      </div>

      {/* rows */}
      <div className="list-body">
        {data.map((row) => (
          <div className="list-row" key={row.id}>
            {columns.map((col) => (
              <div key={col.key} className="list-cell">
                {col.render
                  ? col.render(row[col.key], row)
                  : row[col.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterList;
