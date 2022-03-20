<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<section>
		
			  <h1>Get in touch on other platforms<br>
				</h1>
				<div class="row">
					<div class="column">
						<a href="https://www.instagram.com/iarifahmad/">
							<img src="I.png" alt="Instagram Logo"
							width="42" height="42">
						 </a>
					</div>
					<div class="column">
						<a href="https://www.linkedin.com/in/syedarifahmad/">
							<img src="l.png" alt="Instagram Logo"
							width="42" height="42">
						 </a>
					</div>
					<div class="column">
						<a href="https://www.twitter.com/iarifahmad/">
							<img src="t.png" alt="Twitter Logo"
							width="42" height="42">
						 </a>
					</div>
					
				  </div>

		</section>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0rem;
		width: 100%;
		max-width: 1080px ;
		margin: 0 auto;
		padding: 0 auto;
		box-sizing: border-box;
	}

	footer {
		background-color:black;
		opacity: 85%;
		height: 200px;
		width: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px;
		margin-top: 150px;
	}

	footer a {
		font-weight: bold;
	}
	h1{
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;		
text-align: left;
		color: aliceblue;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}

	* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 30%;
  padding: 20px;
  
}

.row   {
  content: "";
  display: table;
  clear: both;
}
</style>
