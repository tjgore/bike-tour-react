import React from 'react';
import BreadCrumb from './../Layout/BreadCrumb';

import axios from './../../axios_instance';

class Contest extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    slogan: '',
    errors: []
  }

  checkValues = () => {
    let formHasError = false;

    if (document.getElementById("firstName").value === '') {
      this.setState({ errors: [...this.state.errors, "Your first name is required!"] })
      formHasError = true
    }

    if (document.getElementById("lastName").value  === '') {
      this.setState((prevState) => {
        return {
          errors: [...prevState.errors, "Your last name is required!"]
        }
      })
      formHasError = true
    }

    if (document.getElementById("email").value === '') {
      this.setState((prevState) => {
        return {
          errors: [...prevState.errors, "Your email is required!"]
        }
      })
      formHasError = true
    }

    if (document.getElementById("email").value.indexOf('@') === -1) {
      this.setState((prevState) => {
        return {errors: [...prevState.errors, "Your email should be valid!"]
      }
    })
      formHasError = true
    }

    if (document.getElementById("slogan").value === '') {
      this.setState((prevState) => {
        return {
          errors: [...prevState.errors, "Your slogan is required!"]
        }
      })
      formHasError = true
    }

    if (document.getElementById("slogan").value.length > 50 ) {
      this.setState((prevState) => {
        return {
          errors: [...prevState.errors, "Your slogan is too long!"]
        }
      })
      formHasError = true
    }

    if (formHasError === false) {
      this.setState((prevState) => {
        return { 
          errors: []
        }
      })
    }

    return formHasError;
  }

  formHandler = (event) => {
    let value = event.target.value
    let id = event.target.id
    this.setState((prevState) => {return{ errors: []}})
    document.getElementById('failed').innerHTML = ""

    switch (id) {

      case "firstName":
      this.setState({ firstName: value })
      break
      case "lastName":
      this.setState({ lastName: value })
      break
      case "email":
      this.setState({ email: value })
      break
      case "slogan":
      this.setState({ slogan: value })
      break
      default:
      break
    }
  }


  submitForm = (event) => {
    event.preventDefault();
    document.getElementById('submit').innerHTML = "Sending... Please wait"

    console.log("Form submitted")
    if(this.checkValues()) {
     document.getElementById('failed').innerHTML = "Your slogan was not sent! Please try again."
     return;
   }
   let formInfo = { submission: {
    first_name: this.state.firstName,
    last_name: this.state.lastName,
    email: this.state.email,
    slogan: this.state.slogan,
  }
}
axios.post('http://localhost:3001/api/v1/submissions', formInfo)
.then(response => { 
  this.setState({ 
    firstName: '',
    lastName: '',
    email: '',
    slogan:'',
    error: []
  })
  
  if(response.data.message === 'success') {
    document.getElementById('notification').innerHTML = "Your slogan was sent successfully! Thank you!"
  } else {
    document.getElementById('failed').innerHTML = "Your slogan was not sent! Please try again."
  }
  document.getElementById('submit').innerHTML = "submit"
})
.catch(error => { 
  console.log(error)
  document.getElementById('failed').innerHTML = "Your submission failed! Please try again"
  document.getElementById('submit').innerHTML = "submit"
})
}

render () {
  return (
    <div>
    <BreadCrumb image={{ backgroundImage: "url(/images/fast.jpg)"}} title="Boulder Bike Tour Slogan"/>
    <section className="pb-9">
    <div className="container">
    <div className="row">
    <div className="col-12 text-center pt-9 pb-5">
    <h1 className="montserrat font-weight-bold">Get Involved and <br/> come up with a slogan for the race!</h1>
    <p>Ride along with the bikers on their long journey to victory</p>
    <div className="text-love">
    {
      this.state.errors.map((error, i) => {
        return <p key={i} style={{marginBottom: "4px"}}> {error} </p>
      }) 
    }
    </div>
    </div>
    <div className="col-12 col-md-8 offset-md-2 pb-5 txt-gray-700">
    <form>
    <div className="form-group pb-2">
    <label><span className="text-love">*</span> First Name</label>
    <input id="firstName" name="first_name" type="text" required placeholder="Enter your first name" className="form-control" onChange={ (event) => this.formHandler(event) } value={this.state.firstName}/>
    </div>
    <div className="form-group pb-2">
    <label><span className="text-love">*</span> Last Name</label>
    <input id="lastName" name="last_name" type="text" required placeholder="Enter your last name" className="form-control" onChange={ (event) => this.formHandler(event) } value={this.state.lastName}/>
    </div>
    <div className="form-group pb-2">
    <label><span className="text-love">*</span> Email </label>
    <input id="email" name="email" type="email" required placeholder="Enter your email" className="form-control" onChange={ (event) => this.formHandler(event) } value={this.state.email}/>
    </div>
    <div className="form-group pb-2">
    <label><span className="text-love">*</span> Your awesome slogan! </label>
    <textarea id="slogan" name="message" rows="5" className="form-control" placeholder="Enter your slogan" required onChange={ (event) => this.formHandler(event) } value={ this.state.slogan }></textarea>
    </div>
    <div className="form-group text-center">
    <input id="submit" defaultValue="submit" name="contest" onClick={(event) => this.submitForm(event)} className="btn btn-love btn-md mt-3 px-5 font-weight-bold py-2 txt-18 rounded-0" />
    </div>
    <div className="text-center">
      <p id="notification" style={{color: "green"}}></p>
       <p id="failed" style={{color: "red"}}></p>
    </div>
    </form>
    </div>
    </div>
    </div>
    </section>
    </div>
    );
}
}

export default Contest;