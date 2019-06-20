import React, {Component} from 'react'

class Form extends Component {

    state = {
        company: "",
        website_url: "",
        username: '',
        password: ''
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        },() => console.log(this.state))
    }

    // console.log(this.state.company);
    render(){
        return(
            <div class="form-modal">
              <div class="form-modal-content">
                <span onClick={this.props.closeForm} class="close">&times;</span>
                <form className="uk-form-small">
                  <h2>Add New Login Details</h2>
                  <label>Company</label>
                  <input onChange={this.handleChange} type="text" name="company" value={this.state.company}/>
                  <br/>
                  <label>Website URL</label>
                  <input onChange={this.handleChange} type="text" name="website_url" value={this.state.website_url}/>
                  <br/>
                  <label>Username</label>
                  <input onChange={this.handleChange} type="text" name="username" value={this.state.username}/>
                  <br/>
                  <label>Password</label>
                  <input onChange={this.handleChange} type="text" name="password" value={this.state.password}/>
                  <br/>
                  <button>Submit</button>
                </form>
              </div>
            </div>
        )
    }
}

export default Form
