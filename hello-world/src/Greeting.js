
import { Component } from 'react';


class Greeting extends Component {
  render() {
        <h1>Thermometer</h1>
        //const {Lightstatus, DoorLockstatus, Thermometerstatus} = this.props;
        const {divicename, status}= this.propes;
    return (
      <div>
        <h1>{divicename}</h1>
        <p>status: {status}</p>
      </div>
    )
  }
}

export default Greeting;