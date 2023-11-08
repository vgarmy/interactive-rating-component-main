# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

<img src="screenshot.png"


### Links

- Solution URL: https://github.com/vgarmy/interactive-rating-component-main
- Live Site URL: https://vgarmy.github.io/interactive-rating-component-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Framer Motion

### What I learned

How to make an array and pass an id number to a new page. Work with framer motion.

Use of useState

    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (ratingId) => {
        setActiveCard(activeCard === ratingId ? null : ratingId);
    };


### Continued development

More react 

### Useful resources

https://www.framer.com/motion/ - This helped me for the animation reason.


## Author

- Website - https://github.com/vgarmy
- Frontend Mentor - https://www.frontendmentor.io/profile/vgarmy