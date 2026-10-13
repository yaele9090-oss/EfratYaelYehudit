import styles from './StudyChecklist.module.css';

export function StudyChecklist() {
  const items = [
    'פרויקט ווב',
    'שיעורי בית פינסקי',
    'גאוגרפיה הגלובוס הגדול',
    'שיעורי בית חשבון',
    'ללמוד שעתיים אנגלית'
  ];

  return (
    <div className={styles.card}>
      <h2>📋 רשימת משימות למידה</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}