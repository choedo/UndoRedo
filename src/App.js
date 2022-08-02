import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0); // NOTE 더하기 빼기 결과 값을 위한 변수
  const [inputValue, setInputValue] = useState(''); // NOTE 입력한 값에 대한 변수
  const [resultArray, setResultArray] = useState([result]); // NOTE 결과 값 저장을 위한 배열
  const [index, setIndex] = useState(0); // NOTE 결과 값 추출하기 위한 인덱스 값

  // NOTE 인풋 값 감지
  const onChange = e => {
    setInputValue(e.target.value);
  }

  // NOTE + 버튼 클릭 이벤트
  const onPlus = () => {
    // NOTE 값이 들어오지 않았을 때
    if(inputValue === '') {
      alert('값을 입력해주세요!');
      return false;
    }
    setResult(result + parseInt(inputValue));
    setResultArray(resultArray.concat(result + parseInt(inputValue))); // NOTE 계산 결과 값을 배열에 저장
    setIndex(index + 1);
    setInputValue('');
  }

  // NOTE - 버튼 클릭 이벤트
  const onMinus = () => {
    // NOTE 값이 들어오지 않았을 때
    if(inputValue === '') {
      alert('값을 입력해주세요!');
      return false;
    }
    setResult(result - parseInt(inputValue));
    setResultArray(resultArray.concat(result - parseInt(inputValue))); // NOTE 계산 결과 값을 배열에 저장
    setIndex(index + 1);
    setInputValue('');
  }

  // NOTE Undo 버튼 클릭 이벤트
  const onUndo = () => {
    if(index === 0) {
      setResult(0);
    }else {
      setIndex(index - 1);
      setResult(resultArray[index - 1]);
    }
  }

  // NOTE Redo 버튼 클릭 이벤트
  const onRedo = () => {
    if(index === (resultArray.length - 1)) {
      setResult(resultArray[index]);
    }else {
      setIndex(index + 1);
      setResult(resultArray[index + 1]);
    }
  }

  return (
    <div className="app">
      <h1>{result}</h1>
      <p><input value={inputValue} onChange={onChange} /></p>
      <ul>
        <li><button onClick={onUndo}>Undo</button></li>
        <li><button onClick={onPlus}>+</button></li>
        <li><button onClick={onMinus}>-</button></li>
        <li><button onClick={onRedo}>Redo</button></li>
      </ul>
    </div>
  );
}

export default App;