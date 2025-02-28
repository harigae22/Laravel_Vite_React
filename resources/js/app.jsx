import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
  // 名前の入力状態を管理
  const [name, setName] = useState('');

  // 入力フィールドが変更されたときに状態を更新
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // TODO: Enterキーを押されたときにアラートを表示
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h2>Enter your name:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Hello, {name ? name : 'stranger'}!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React with State in Laravel</h1>
      <Form />  {/* 状態を使ったフォーム */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<App />);
