function SignupComponent(){
	return (
		<div class="container mt-5" style={{width: "600px"}}>
			<form>
				<div class="mb-3">
			    <label for="name" class="form-label">Name</label>
			    <input type="name" class="form-control" id="name" aria-describedby="emailHelp" />
			  </div>
			  <div class="mb-3">
			    <label for="contact" class="form-label">Contact Number</label>
			    <input type="contact" class="form-control" id="contact" aria-describedby="emailHelp" />
			  </div>
			  <div class="mb-3">
			    <label for="email" class="form-label">Email address</label>
			    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
			    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			  </div>
			  <div class="mb-3">
			    <label for="password" class="form-label">Password</label>
			    <input type="password" class="form-control" id="password"/>
			  </div>
			  <div class="mb-3">
			    <label for="c-password" class="form-label">Confirm Password</label>
			    <input type="c-password" class="form-control" id="c-password"/>
			  </div>
			  <div class="d-flex align-items-center justify-content-center">
		  		<a href="/sign-up" class="btn btn-primary">Sign Up</a>
		  	</div>
			</form>
		</div>
	);
}
export default SignupComponent;