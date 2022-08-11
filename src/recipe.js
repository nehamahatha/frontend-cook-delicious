import React from "react";

function getParamId(pathname) {
	// Todo: how?
	return pathname.split('/').reverse().find(e => e);
}

class Recipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name:"",
			image: '',
			ingredients: [],
			steps: []
		};
	}

	async componentDidMount() {
		const id = getParamId(window.location.pathname);
		const res = await fetch(`http://localhost:5000/recipe/${id}`, {
     	method: "GET",
     	headers: {
       	"Content-Type": "application/json",
     	},
   	})
   	.catch(error => {
     	window.alert(error);
     	return;
   	});
   	const recipe_data = await res.json();
   	// console.log(recipe_data);
   	this.setState({
   		name:recipe_data.name,
   		image: recipe_data.image,
   		ingredients: recipe_data.ingredients,
   		steps: recipe_data.steps
   	})
  }


	render() {
		// const { ingredients, steps, image } = this.state;
		return (
			<div class="container mt-5" style={{width: "600px", paddingBottom: "300px"}}>
				<h1 class="text-center">Here is your {this.state.name}</h1>
				<img width={500} height={300} src={`${this.state.image}`}/>
				<h3>Ingredients</h3>
				<ul>
					{this.state.ingredients.map(e => {
						return <li>{e}</li>;
					})}
				</ul>
				<h3>Steps for your {this.state.name}</h3>
				<ol>
					{this.state.steps.map(e => {
						return (
							<li key={e._id}>
								<p>{e.content}</p>
								{e.image && <img width={500} height={300} src={`${e.image}`}/>}
							</li>
						);
					})}
				</ol>
			</div>
		);
	}
}

export default Recipe;