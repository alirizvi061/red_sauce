import React from "react";

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleSubmit(event) {
		alert("A Blog Post was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div className='blogpost'>
				<form onSubmit={this.handleSubmit}>
					<h5>Blog Post</h5>
					<label>
						<input
							type='text'
							value={this.state.value}
							onChange={this.handleChange}
						/>{" "}
					</label>
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
}

export default Blog;
