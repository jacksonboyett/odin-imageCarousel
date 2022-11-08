Wide div
Pictures inside divs
Choose which slide is visible
Next and previous buttons
Navigation dots at the bottom, each circle gets filled when its slide is shown
Each circle linked to each slide
Slide advances every 5 seconds


Module 0: Main hub index

Module 1: Create DOM - picture frame, nav circles, arrows
  a. Main slider container div
	b. wrapper div for each slide
	c. images (4)
	d. buttons for navigating
	e. circles at bottom
Module 2: Populate images into divs
Module 3: Arrow advance and before function
Module 4: Choose circle function to populate the respective images
Module 5: Advance every 5 seconds


Array of all slides using slides = doc.query(slides)
trasform each slide x100 by index number
current slide counter
addeventlistener to next and before buttons that will +1 or -1 from counter
subtract value of current slide from each index before multiplying it by 100
write condition check for last slide