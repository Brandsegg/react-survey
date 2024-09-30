import { useState } from "react";
import AnswersList from "./AnswersList";



function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedForms, setSubmittedForms] = useState([]); //save all forms here as they are created

  //static list of values for radio-buttons. Might change to something better.
  const radioButtonData = ({
    opt1: 1,
    opt2: 2,
    opt3: 3,
    opt4: 4
  });

  const checkBoxData = ({
    opt1: 'Swimming',
    opt2: 'Bathing',
    opt3: 'Chatting',
    opt4: 'I don\'t like to spend time with it'
  });


  const [formData, setFormData] = useState({
    colourRating: 0,
    spendTimeOptions: [], 
    feedbackText: '',
    username: '',
    email: ''
  });

  const returnForms = () => {
    return submittedForms
  }
  

  const handleChange = (event) => {
    const { colourRating, spendTimeOptions, feedbackText, username, email } = event.target;

    //check that checked
    if (event.target.type === 'checkbox') {

      if (!formData.spendTimeOptions.includes(event.target.value)) {
        setFormData({ ...formData, [event.target.name]: formData.spendTimeOptions.push(event.target.value) });
      }
      else {
        setFormData({ ...formData, [event.target.name]: formData.spendTimeOptions.splice(formData.spendTimeOptions.indexOf(event.target.value), 1) })
      }

      //console.log(formData.spendTimeOptions)
    }
    //console.log(event.target.value)
    setFormData({ ...formData, [event.target.name]: event.target.value });

  }

  const addSubmittedFormToFormList = (submittedForm) => {
    setSubmittedForms([...submittedForms, submittedForm]);
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    let newSubmittedForm = {
      colourRating: formData.colourRating,
      spendTimeOptions: formData.spendTimeOptions,
      feedbackText: formData.feedbackText,
      username: formData.username,
      email: formData.email
    }
    addSubmittedFormToFormList(newSubmittedForm);
    console.log(submittedForms)
  }


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList submittedForms={submittedForms}/>
      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/*<!-- Radio inputs go here -->*/}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="colourRating"
                  onChange={handleChange}
                  value={radioButtonData.opt1}
                ></input>
                <label htmlFor="color-one">1 </label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="colourRating"
                  onChange={handleChange}
                  value={radioButtonData.opt2}
                ></input>
                <label htmlFor="color-two">2 </label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="colourRating"
                  onChange={handleChange}
                  value={radioButtonData.opt3}
                ></input>
                <label htmlFor="color-three">3</label >
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="colourRating"
                  onChange={handleChange}
                  value={radioButtonData.opt4}
                ></input>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/*<!-- checkboxes go here -->*/}
            <ul>
              <li>
                <label >
                  <input
                    name="spend-time"
                    type="checkbox"
                    onChange={handleChange}
                    value={checkBoxData.opt1}
                  />Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    onChange={handleChange}
                    value={checkBoxData.opt2}
                  />Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    onChange={handleChange}
                    value={checkBoxData.opt3}
                  />Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    onChange={handleChange}
                    value={checkBoxData.opt4}
                  />I don't like to
                  spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label >What else have you got to say about your rubber duck?<textarea
            name="feedbackText"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formData.feedbackText}
          ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
//export { returnForms };
//export array of all forms

