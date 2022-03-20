<svelte:head>
	<title>Post</title>
</svelte:head>

<div class="content">

	<h1>
		<div class="posts">
			<picture>
				<source srcset="image3.jpg" type="image/webp" />
				<img src="image3.jpg" alt="posts" width="180%" height="180%"/>
			</picture>
		</div>
	</h1>

</div>

<h1>Latest posts</h1>
	<div class="row">
		<div class="column">
			<br><br>
		
			<picture>
				<source srcset="image4.jpg" type="image/webp" />
				<img src="image4.jpg" alt="Welcome" width="470" height="300"/>
			</picture>
		</div>
		<div class="column">
		  <h2><br><a sveltekit:prefetch href="/essec">Application to ESSEC Business School</a>
			<br>So for this one let’s talk about the MiM Application to ESSEC Business School
			<br>I hope this will be informative enough for someone who’s planning to apply to 
			<br>ESSEC or any other school for that matter as most of the schools have almost the same components....<br>
		</h2>
		</div>
	  </div>

	  <div class="row">
		<div class="column">
			<br><br>
		
			<picture>
				<source srcset="image5.jpg" type="image/webp" />
				<img src="image5.jpg" alt="Welcome" width="470" height="300"/>
			</picture>
		</div>
		<div class="column">
		  <h2><br><a sveltekit:prefetch href="/finance">How to finance your studies at ESSEC Business School</a>
			<br>Well if you are reading this, either you have already secured admission at ESSEC or you are planning to.
			<br>Either way, you are on the right track.
			<br>So as the title suggests let’s talk about how you can finance your studies at ESSEC.....<br>
		</h2>
		</div>
	  </div>

<style>


	h1 
	{
	font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	width: 100%;
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}


	.posts img {
		position: static;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 00;
		display: block;
	}

	* {
  box-sizing: border-box;
}


.column {
  float: left;
  width: 50%;
  padding: 10px;
  
}

.row   {
  content: "";
  display: table;
  clear: both;
}

</style>
