import AnswersItem from "./AnswersItem";


export default function AnswersList({ submittedForms }) {
  
  return (
    <ul>
      {submittedForms.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
