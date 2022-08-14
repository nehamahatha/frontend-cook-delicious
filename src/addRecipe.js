import React  from "react";
import Api from "./utils/api";


class AddRecipe extends React.Component {
	constructor(props){
		super(props);
		
		const in_msg = "You should enter each item in a new line. Also, don't prefix anything like '1.', '1 ', '-' etc. For example, a correct input would look like:\nMasala\nChicken\nKewra Water\nRice";

		const st_msg = "Similar to the above, don't use any prefix. Steps should be written after a blank line. Any paragraph cannot have a newline."

		this.state = {
			name: "",
			ingredients: "",
			image: "",
			steps: "",
			in_msg: in_msg,
			st_msg: st_msg
		};
	}

	onSubmit = async (e) => {
		e.preventDefault();
		if(!this.state.name || this.state.ingredients.length == 0 || this.state.steps.length==0){
			alert("please fill all the required field");
			return ;
		}

		const recipe_data = {
			name: this.state.name,
			image: this.state.image,
			ingredients: this.state.ingredients.split('\n').filter(e=>e),
			steps: this.state.steps.split('\n').filter(e=>e).map(c => ({content: c})),
		};

		const res = await Api.post(`/add-recipe`, JSON.stringify(recipe_data))
   		.catch(error => {
     		window.alert(error);
     		return;
   	}); 

	}

	// async componentDidMount() {
	// 	const res = await fetch(`http://localhost:5000/addrecipe/`, {
 //     	method: "POST",
 //     	headers: {
 //       	"Content-Type": "application/json",
 //     	},
 //   	})
 //   	.catch(error => {
 //     	window.alert(error);
 //     	return;
 //   	});
 //  }
	render(){
		return(
			<div class="container mt-5" style={{width: "600px", paddingBottom: "300px"}}>
				<h1 class="text-center">You Can Add Your Own Recipes Here</h1><br/>
			   	<h3>Name of the Recipe</h3>
			   	<input
				   	type="text" 
				   	class="form-control" 
				   	value={this.state.name}
				   	onChange={ e => this.setState({ name: e.target.value})}
			   	/>	
			   <br/>
			   <h3>How Is Your Recipe Looks</h3>
			   <input 
			   		type="text" 
			   		class="form-control main-input"  
			   	 	name="url" 
			   	 	value={this.state.image}
			   	 	onChange ={ e => this.setState({image: e.target.value})} 
			   	 	placeholder="Paste a long url" 
			   	/> 
			   	<h3>Enter your Ingredients</h3>			   			  
    			<textarea
    				rows={7}
    				class="form-control"
    			 	value={this.state.ingredients}
    			 	onChange={e => this.setState({ingredients: e.target.value})}
    			 	placeholder={this.state.in_msg}
    		 	/>
    			<h3>Here Is Your Recipe</h3>
    			<textarea 
    				rows={7}
    				class="form-control"
    			  value ={this.state.steps}
    			  onChange={e => this.setState({steps: e.target.value})}
    			  placeholder={this.state.st_msg}
    		 	/> 
    		 	<br/>
    		 	<div class="d-flex align-items-center justify-content-center">
		  			<button onClick={this.onSubmit} class="btn btn-primary">Submit</button>
		  		</div>
			</div>
			
		);
	}
}	

export default AddRecipe;