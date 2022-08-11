import React, {useState} from "react";

function RecipeList() {

	return (
		<div class="container mt-5" style={{width: "600px"}}>
			<h1 class="text-center">What you want to cook?</h1>
			<form class="form-inline my-2 my-lg-0">
				<div class="row">
					<div class="col-10">
  					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="dropdownMenuButton1"/>
  					<ul style={{width: "33%"}} class="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
					    <li><a class="dropdown-item" href="/recipe/62f4496c785e3b1508d69385">Chicken Hyderabadi Biryani</a></li>
					    <li><a class="dropdown-item" href="/recipe/paneer">Paneer Butter Masala</a></li>
					    <li><a class="dropdown-item" href="/recipe/dosa">Mysore Masala Dosa</a></li>
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

export default RecipeList;