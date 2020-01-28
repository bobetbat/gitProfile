import React from 'react'
import axios from 'axios'

import Header from './Header'
import GitData from './GitData'

export default class Profile extends React.Component {
	constructor() {
		super()
		this.state = {
			login: '',
			notFound: true,
			profile: {}
		}
	}
	handleChange = (value) => {
		this.setState({login: value})
	}

	fetchData = async () => {
		console.log(this.state)
		const profile = await axios.get(`https://api.github.com/users/${this.state.login.value}`)
		.then((res) => {
			this.setState({notFound: false})
			return res.data
		})
		.catch((err) => {
			this.setState({notFound: true})
			console.log(err)
		}) 
		this.setState({profile: profile})
		// console.log('wtf1',profile)
		// console.log('wtf22',this.state.profile)
		
	}

	render() {
		return (
			<div className='mainWrap'>
				<Header />	
				<div className='input'>
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
				{ this.state.notFound ? 
					<div> 404 </div>
					:
					<GitData data={this.state.profile} />
				}
			</div>
		)
	}
}