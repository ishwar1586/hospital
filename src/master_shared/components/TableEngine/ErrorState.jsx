export default function ErrorState({ message = "Unable to load records.", onRetry }) {
  return <div className="table-error-state" role="alert"><strong>{message}</strong>{onRetry && <button type="button" onClick={onRetry}>Try again</button>}</div>;
}
