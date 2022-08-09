function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <div class="container-fluid">
		  	<img class="navbar-brand" width={40} height={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9HGQLbi5fEGZIq5XTMO1z0BdOiefjvmSew&usqp=CAU"/>
		    <a class="navbar-brand" href="/">Cook Delicious</a>
		    <div class="collapse navbar-collapse" id="navbarSupportedContent">
		      
		      <ul class="navbar-nav me-auto mb-2 mb-lg-0" />


		      <div class="dropdown">
	          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
	            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	            Hi User
	          </a>
	          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
	            <li><a class="dropdown-item" href="/sign-in">Login</a></li>
	            <li><hr class="dropdown-divider" /></li>
	            <li><a class="dropdown-item" href="#">Logout</a></li>
	          </ul>
	        </div>
		      

		    </div>
		  </div>
		</nav>
	);
}

export default Navbar;