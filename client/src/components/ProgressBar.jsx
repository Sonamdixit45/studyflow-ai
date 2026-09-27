function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Progress</span>

        <span>
          {current} / {total}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;