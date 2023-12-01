import { useState } from 'react';

interface Que {
  question: string;
  answer: string;
  options: string[];
}

const Ques = (props: { att: Que }): React.JSX.Element => {
  const [selectAns, setSelectedAns] = useState(null);
  const [activeColor, setActiveColor] = useState('grey');
  const [done, setDone] = useState(false);

  const options: string[] = props.att.options;

  const highlight = (index: any) => {
    setActiveColor('grey');
    setSelectedAns(index);
  };

  const choices: React.JSX.Element[] = props.att.options.map(
    (option, index) => (
      <div
        className="option"
        key={index}
        onClick={() => highlight(index)}
        style={{
          backgroundColor: selectAns === index ? activeColor : 'white',
          cursor: 'pointer',
          pointerEvents: done === true ? 'none' : 'auto',
        }}
      >
        {option}
      </div>
    )
  );

  const handleSubmit = () => {
    if (selectAns === null) {
      return;
    }

    setDone(true);
    if (props.att.answer === options[selectAns]) {
      setActiveColor('green');
      return;
    }

    setActiveColor('red');
  };

  return (
    <div>
      <div className="question">{props.att.question}</div>
      <div className="options">{choices}</div>
      <div
        className="submit"
        onClick={handleSubmit}
        style={{ cursor: 'pointer' }}
      >
        Submit
      </div>
    </div>
  );
};

const MCQ = (): React.JSX.Element => {
  const data: Que[] = [
    { question: 'question 1', answer: '1', options: ['1', '2', '3', '4'] },
  ];

  const questions: React.JSX.Element[] = data.map((ques, index) => (
    <Ques key={index} att={ques} />
  ));

  return <>{questions}</>;
};

export default MCQ;
