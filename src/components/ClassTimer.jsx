import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  timer() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  timerLog() {
    console.log(`Saniye güncellendi: ${this.state.seconds}`);
  }

  // Yüklendikten Sonra
  componentDidMount() {
    this.interval = setInterval(() => this.timer(), 1000);
  }

  // Güncellendikten Sonra
  componentDidUpdate(prevProps, prevState) {
    if (this.state.seconds !== prevState.seconds) {
      this.timerLog();
    }
  }

  // DOM'dan Kaldırıldığında
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("DOM'dan Kaldırıldığında");
  }

  render() {
    return <div>Saniye: {this.state.seconds}</div>;
  }
}
