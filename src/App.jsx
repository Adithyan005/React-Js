import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mail: "",
    };
    this.handle1 = this.handle1.bind(this);
    this.handle2 = this.handle2.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handle1(event) {
    this.setState({ name: event.target.value });
  }
  handle2(event) {
    this.setState({ mail: event.target.value });
  }
  handlesubmit(event) {
    alert("Name: " + this.state.name + "\nEmail: " + this.state.mail);
  }

  render() {
    return (
      <>
        <h1 className="text-center">Forms</h1>
        <form action="">
          <div className="row md-2">
            <div className="col md-6 m-3 p-1">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.handle1}
              />
              <br />
            </div>

            <div className="col md-6 m-3 p-1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="form-control"
                value={this.state.mail}
                onChange={this.handle2}
              />
              <br />
            </div>
          </div>

          <div className="mb-2 p-2 mx-auto">
            <button
              onClick={this.handlesubmit}
              className="btn btn-success text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default App;
