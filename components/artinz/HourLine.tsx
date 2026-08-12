/**
 * Hour Line — DIAR only for Phase 1.
 * Subtle navigation device; not the primary visual.
 */
type HourLineProps = {
  time: string;
  progress?: number;
};

export function HourLine({ time, progress = 0 }: HourLineProps) {
  return (
    <div
      className="hour-line"
      data-hour-line
      aria-label={`DIAR chapter time ${time}`}
      style={{ ["--hour-progress" as string]: String(progress) }}
    >
      <div className="hour-line__track" aria-hidden="true">
        <span className="hour-line__marker" />
      </div>
      <span className="hour-line__time">{time}</span>
    </div>
  );
}
