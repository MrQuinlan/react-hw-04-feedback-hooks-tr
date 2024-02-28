import { useState } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = e => {
    const value = e.currentTarget.textContent;

    switch (value) {
      case 'good':
        setGood(state => state + 1);

        break;

      case 'neutral':
        setNeutral(state => state + 1);

        break;

      case 'bad':
        setBad(state => state + 1);

        break;

      default:
        break;
    }

    // this.setState(prevState => {
    //   return { [value]: prevState[value] + 1 };
    // });
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={`${countTotalFeedback()}`}
            positivePercentage={Math.round((good / countTotalFeedback()) * 100)}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;
