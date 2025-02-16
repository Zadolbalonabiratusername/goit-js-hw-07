const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach( elem => {
		const category = elem.querySelector(".item h2");
		console.log(`Category: ${category.textContent}`);
		const items = elem.querySelector("li ul");	
		console.log(`Elements: ${items.querySelectorAll("li").length}`);
	} 
);

