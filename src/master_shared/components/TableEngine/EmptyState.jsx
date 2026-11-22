export default function EmptyState({ title = "No records found", description = "Try changing your filters or add a new record." }) {
  return <div className="table-empty-state" role="status"><strong>{title}</strong><span>{description}</span></div>;
}
