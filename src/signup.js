import React, { useState } from "react";

function SignupComponent(){
	const [form, setForm] = useState({
		name: "",
		contact: "",
		password: "",
		c_password: "",
		email: ""
	});

	function updateForm(value) {
   	return setForm((prev) => {
     	return { ...prev, ...value };
   	});
 	}
	
	async function onSubmit(e) {
		e.preventDefault();
		if (form.password != form.c_password) {
			alert("Password and confirm password do not match!");
			return ;
		}
		const res = await fetch(`http://localhost:5000/user`, {
     	method: "POST",
     	headers: {
       	"Content-Type": "application/json",
     	},
     	body: JSON.stringify(form),
   	})
   	.catch(error => {
     	window.alert(error);
     	return;
   	});

   	// console.log(res);
 
   	if (res.status >= 200 && res.status < 300) {
   		alert("You're successfully signed up!");
   	}
   	else {
   		alert("Sorry, we could not sign you up!");
   	}
	}

	return (
		<div class="container mt-5" style={{width: "600px"}}>
			<form onSubmit={onSubmit}>
				<div class="mb-3">
			    <label for="name" class="form-label">Name</label>
			    <input
			    	type="name" 
			    	class="form-control" 
			    	id="name" 
			    	value={form.name} 
			    	onChange={ e => updateForm({ name: e.target.value })}
			    />
			  </div>
			  <div class="mb-3">
			    <label for="contact" class="form-label">Contact Number</label>
			    <input 
			    	type="contact" 
			    	class="form-control" 
			    	id="contact" 
			    	value={form.contact}
			    	onChange={(e)=> updateForm({ contact: e.target.value })}
			    />
			  </div>
			  <div class="mb-3">
			    <label for="email" class="form-label">Email address</label>
			    <input 
			    	type="email" 
			    	class="form-control" 
			    	id="email"
			    	value={form.email}
			    	onChange={(e)=> updateForm({ email: e.target.value })}
			    />
			  </div>
			  <div class="mb-3">
			    <label for="password" class="form-label">Password</label>
			    <input 
			    	type="password" 
			    	class="form-control" 
			    	id="password"
			    	value={form.password}
			    	onChange={(e)=> updateForm({ password: e.target.value })}
			    />
			  </div>
			  <div class="mb-3">
			    <label for="c-password" class="form-label">Confirm Password</label>
			    <input 
			    	type="c-password" 
			    	class="form-control" 
			    	id="c-password"
			    	value={form.c_password}
			    	onChange={(e)=> updateForm({ c_password: e.target.value })}
			    />
			  </div>
			  <div class="d-flex align-items-center justify-content-center">
		  		<button type="submit" class="btn btn-primary">Sign Up</button>
		  	</div>
			</form>
		</div>
	);
}
export default SignupComponent;