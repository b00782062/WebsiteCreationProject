<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="IMG_9431.jpg" type="image/webp" />
				<img src="IMG_9431.jpg" alt="Welcome"/>
			</picture>
		</div>
		<br>
		Hi there
		<br>
		Let me introduce myself
		<br>
		My name is Arif,
		<br>
		and this is my humble online abode
		</h1>
	
</section>

<section>
<div class="row">
	<div class="column">
	  <h2>Apart from this website,<br>
		if you dont already know, I am present on <a href="https://www.youtube.com/iarifahmad">YouTube (iArifAhmad) </a><br>
		where I make videos about my student life abroad, how to stay productive and just tech that I love.
	</h2>
	</div>
	<div class="column">
		<picture>
			<source srcset="image1.jpg" type="image/webp" />
			<img src="image1.jpg" alt="Welcome" width="500" height="350"/>
		</picture>
	</div>
  </div>
</section>

<section>
	<div class="row">
		<div class="column">
			<picture>
				<source srcset="image2.jpg" type="image/webp" />
				<img src="image2.jpg" alt="Welcome" width="500" height="350"/>
			</picture>
		</div>
		<div class="column">
		  <h2>And obviously, I had to start a Podcast too right<br>
			<a href="https://open.spotify.com/show/4R28jhQN4HjS3wapG1RxDy?si=b9d272a2f51a4c47">The Happy Productivity</a>
			Now here I publish episodes every single week<br>
			and I follow the theme of Passion, Career, Happiness, Mindset, and Productivity
		</h2>
		</div>
	  </div>
</section>
	

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
font-family: 		-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		width: 150%;
	}
	h2{

font-family: 		-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		text-align: right;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 10%;
		padding: 0 0 calc(100% * 700 / 2048) 0;
	}
 
	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
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
