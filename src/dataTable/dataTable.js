import React, { Component } from 'react';
import './styles.scss';
import { isFunction } from 'util';


class DataTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { data, header } = this.props;
		let len = header.length;
		return (
			<div className="data-table">
				<table>
					<thead>
						<tr>
							{
								header.map(item => {
									return <th>{item.text}</th>
								})
							}
						</tr>
					</thead>
					<tbody>
						{
							data.map(item => {
								return <tr>
									{
										Object.keys(item).map((key, value) => {
											return <td>{item[key]}</td>
										})
									}
									<td>{header[len - 1].formator(item)}</td>
								</tr>
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default DataTable;
