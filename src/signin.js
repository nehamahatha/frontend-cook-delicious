import React, { useState } from "react";
import auth from "./utils/auth";
import Api from "./utils/api";
import { useNavigate } from "react-router-dom";

function SignInComponent(){
	const [form, setForm] = useState({
		email: "",
		password: ""
	});
	const navigate = useNavigate();


	function updateForm(value) {
   	return setForm((prev) => {
     	return { ...prev, ...value };
   	});
 	}

 	async function onSubmit(e) {
		e.preventDefault();
		if (form.password == null && form.email ==null){
			alert("Please fill all the required field!");
			return ;
		}
		const res = await Api.post(`/login`, JSON.stringify(form))
   	.catch(error => {
     	window.alert(error);
     	return;
   	});
			// const res = await fetch('http://localhost:5000/recipe/62f4496c785e3b1508d69385', {
			// 	method: "GET",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// })
			// .catch(error => {
   //   	window.alert(error);
   //   	return;
   //   });

		if (res.status >= 200 && res.status < 300) {
   		alert("You're successfully signed In!");
   		
   		auth.login(await res.json());
			navigate("/");
   	}
   	else {
   		alert("Sorry, we could not sign you In!");
   	}
	}

	return (
		<div class="container mt-5" style={{width: "600px"}}>
			<form onSubmit={onSubmit}>
			  <div class="mb-3">
			    <label for="email" class="form-label">Email address</label>
			    <input type="email" 
			    	class="form-control" 
			    	id="email" 
			    	value={form.email}
			    	onChange={(e) => updateForm({ email: e.target.value })} />
			  </div>
			  <div class="mb-3">
			    <label for="password1" class="form-label">Password</label>
			    <input type="password" 
			    	class="form-control" 
			    	id="password"
			    	value={form.password}
			    	onChange={(e)=> updateForm({ password: e.target.value })}
			    />
			  </div>
			  <div class="d-flex align-items-center justify-content-center">
			  	<button type="submit" class="btn btn-primary">Log In</button>
			  </div>
			  <div class="d-flex align-items-center justify-content-center">or</div>
			</form>
			<div class="d-flex align-items-center justify-content-center">
		  	<a href="/sign-up" class="btn btn-outline-primary">Sign Up</a>
		  </div>

		  { auth.isLoggedIn() ? <div>Hi {auth.loggedInUser().name}</div> : 'Not Logged in'}
		</div>
	);
}

export default SignInComponent;

