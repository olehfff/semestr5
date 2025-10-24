import {useState} from 'react';

function OldClock() {
    const [time, setTime] = useState( () => new Date());

    const [intervalId, setIntervalId] = useState(null);

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('Це інтервал кожні 2000ms ' + Date.now());
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Цей метод викликається перед розмонтуванням компоненту');
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Текущее время: {this.state.time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={this.stop}>
          Остановить
        </button>
      </div>
    );
  }
}