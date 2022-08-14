import React, {useState} from "react";
import  { Navigate } from 'react-router-dom';
import Api from "./utils/api";

function lcp(a, b) {
	let cnt = 0;
	while (cnt < a.length && cnt < b.length && a[cnt].toLowerCase() == b[cnt].toLowerCase()) cnt ++;
	return cnt;
}

class RecipeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipeList:[],
			originalList: [],
			query:""
		};
		
	}


	async componentDidMount() {
		const res = await Api.get(`/recipe/`)
   	.catch(error => {
     	window.alert(error);
     	return;
   	});
   	const recipeList = await res.json();
   	console.log(recipeList);
   	this.setState({
   		recipeList:recipeList,
   		originalList: recipeList
   	});
	}

	storeQuery = (e) => {
		const query = e.target.value;
		const recipeList = this.state.originalList.slice().sort((a, b) => lcp(b.name, query) - lcp(a.name, query));
		while(recipeList.length && !lcp(recipeList[recipeList.length - 1].name, query)) recipeList.pop();
		this.setState({ recipeList });
	}

	handleClick = () => {
		const recipeList = this.state.recipeList;
		if (recipeList.length) {
			this.setState({ clicked: `recipe/${recipeList[0]._id}`});
		} 
	}

	render(){
		if (this.state.clicked) {
			return <Navigate to={this.state.clicked} />;
		}
		return(
			<div class="container mt-5" style={{width: "600px"}}>
				<h1 class="text-center">What you want to cook?</h1>
				<form class="form-inline my-2 my-lg-0">
					<div class="row">
						<div class="col-10">
  						<input onChange={this.storeQuery} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="dropdownMenuButton1"/>
  						<ul style={{width: "33%"}} class="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
					    	{this.state.recipeList.map(e => {
					  			return <li><a class="dropdown-item" href={`/recipe/${e._id}`}>	{e.name} </a></li>
					  		})}
					  	</ul>
   					</div>
    				<div class="col-2">
    					<button onClick={this.handleClick} class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    				</div>
    			</div>
    		</form>
  		</div>
		);
	}
}


export default RecipeList;
