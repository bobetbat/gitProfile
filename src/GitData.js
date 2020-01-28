import React from 'react'

export default class GitData extends React.Component {

	render() {
		const {
			login,
			id,
			avatar_url

		} = this.props.data
		return (
			<div className='gitData'>
				<img alt='' url={avatar_url} width="300px" height="600px"/>
				<div>Git Profile Overview</div>
			</div>
		)
	}
}