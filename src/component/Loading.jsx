export default function Loading() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading IronForge Fitness">
      <div className="loading-logo">
        IRON<span>FORGE</span>
      </div>
      <div className="loading-bar" aria-hidden="true">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}
