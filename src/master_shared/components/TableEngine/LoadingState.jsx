export default function LoadingState({ message = "Loading records..." }) {
  return <div className="table-loading-state" role="status" aria-live="polite">{message}</div>;
}
