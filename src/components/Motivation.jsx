export function Motivation() {
  const quotes = [
    'כל הכבוד! להמשיך בכל הכוח!',
    'צעד קטן בכל יום מוביל להצלחה גדולה.',
    'השקעה בלמידה היא ההשקעה הכי טובה.',
    'את בדרך הנכונה, אל תוותרי!',
    'כל למידה מקרבת אותך ליעד.'
  ];

  const showQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px' }}>
      <h2>💪 מוטיבציה</h2>
      <button 
        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        onClick={showQuote}
      >
        הצג משפט מוטיבציה
      </button>
    </div>
  );
}