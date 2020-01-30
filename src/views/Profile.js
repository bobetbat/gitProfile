import React from 'react'
import axios from 'axios'
import Header from '../components/Header'
import GitData from '../components/GitData'

export default class Profile extends React.Component {
	constructor() {
		super()
		this.state = {
			login: '',
			notFound: true,
			profile: {
				login: '-',
				id:'-',
				avatar_url:'-',
				public_repos:'-',
				public_gists:'-',
				followers:'-',
				following:'-',
				name:'-',
				email:'-',
				bio:'-'
			}
		}
	}
	handleChange = (value) => {
		this.setState({login: value})
	}

	fetchData = async () => {
		try {
			const profile = await axios.get(`https://api.github.com/users/${this.state.login}`)
			.then((res) => {
				this.setState({notFound: false})
				return res.data
			})
			this.setState({profile: profile})
		}	catch(err) { 
			this.setState({notFound: true})
			console.log(err)
		} 
		
	}

	render() {
		return (
			<div className='main'>
				<Header />
				<div className='container'>
					<div className="textInput">
						<input
						type='text'
						onChange={e =>
							this.handleChange(
								e.target.value,
							)
						}
						/>
						<button onClick={this.fetchData}>Submit</button>
					</div>
					<GitData data={this.state.profile} />	
				</div>
			</div>
		)
	}
}