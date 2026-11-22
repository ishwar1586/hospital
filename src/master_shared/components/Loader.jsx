export default function Loader({ message = "Loading...", fullScreen = false }) {
  return (
    <div className={`hospital-loader${fullScreen ? " hospital-loader--fullscreen" : ""}`}
      role="status" aria-live="polite" aria-busy="true">
      <span className="hospital-loader__spinner" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
