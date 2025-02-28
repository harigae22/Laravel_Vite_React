// resources/js/components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // 状態の初期化

    const increment = () => setCount(count + 1); // カウントアップ

    return (
        <div>
            <p>カウント: {count}</p>
            <button onClick={increment}>カウントアップ</button>
        </div>
    );
};

export default Counter;
