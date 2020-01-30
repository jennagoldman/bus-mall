
# BusMall Lab Technical Plan

##### What pages will need to be created?
1. Create an index.html, style.css, and app.js file to start.

2. To index.html, add a form with 3 labels, radio button inputs, images, and a submit button, and a canvas element.


##### What data will need to be saved and updated, and when?
1. Create product data array that includes an id, image path and name for each product.

2. Keep track of number of selections made during the session.
	- ( let numberOfSelections = 0)

3. Keep track of the number of votes for a specific product.
	- ( let productVotesDetails = [])

5. Add to the product's total votes when submit button is clicked.

6. Use findById function from previous lab to return matching product. Increment votes for existing product, 2. add product to the array and set votes to 1 if it isn't already there.


##### What rules exist, and what algorithms need to be defined?
1. The 3 products shown during each round must be unique.
	- If any of the 3 products for a single round repeats, generate new product until all 3 are unique.
		- Create a getRandomProduct() function to come up with a random index position to add to the products array. Return the resulting object.

2. The user should be shown 25 rounds of products before seeing their results.
	- Set display of results elements to block once 25 selections reached, hide product selection elements.

3. Results should show the number of votes for each product.
	- Use Chart.js and pass in productVotesDetails data to make up labels and votes #s.
