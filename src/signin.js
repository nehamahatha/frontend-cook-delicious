function SignInComponent() {
	return (
		<div class="container mt-5" style={{width: "600px"}}>
			<form>
			  <div class="mb-3">
			    <label for="exampleInputEmail1" class="form-label">Email address</label>
			    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
			    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			  </div>
			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">Password</label>
			    <input type="password" class="form-control" id="password"/>
			  </div>
			  <div class="d-flex align-items-center justify-content-center">
			  	<button type="submit" class="btn btn-primary">Log In</button>
			  </div>
			  <div class="d-flex align-items-center justify-content-center">or</div>
			</form>
			<div class="d-flex align-items-center justify-content-center">
		  	<a href="/sign-up" class="btn btn-outline-primary">Sign Up</a>
		  </div>
		</div>
	);
}

export default SignInComponent;