import React, {useState} from "react";

class RecipeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipeList:[]
		};
		
	}


	async componentDidMount() {
		const res = await fetch(`http://localhost:5000/recipe/`, {
     	method: "GET",
     	headers: {
       	"Content-Type": "application/json",
     	},
     })
   	.catch(error => {
     	window.alert(error);
     	return;
   	});
   	const recipeList = await res.json();
   	// console.log(recipeList);
   	this.setState({
   		recipeList:recipeList
   	});

	}
	render(){
		return(
			<div class="container mt-5" style={{width: "600px"}}>
				<h1 class="text-center">What you want to cook?</h1>
				<form class="form-inline my-2 my-lg-0">
					<div class="row">
						<div class="col-10">
  						<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="dropdownMenuButton1"/>
  						<ul style={{width: "33%"}} class="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
					    	{this.state.recipeList.map(e => {
					  			return <li><a class="dropdown-item" href={`/recipe/${e._id}`}>	{e.name} </a></li>
					  		})}
					  	</ul>
   					</div>
    				<div class="col-2">
    					<button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    				</div>
    			</div>
    		</form>
  		</div>
		);
	}
}


export default RecipeList;