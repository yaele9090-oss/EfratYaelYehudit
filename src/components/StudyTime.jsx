import styles from './StudyTime.module.css';

export function StudyTime() {
  const currentTime = new Date().toLocaleTimeString('he-IL');

  return (
    <div className={styles.card}>
      <h2>⏰ זמן למידה</h2>
      <p className={styles.timeText}>השעה הנוכחית: {currentTime}</p>
    </div>
  );
}