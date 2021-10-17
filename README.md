# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). 

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

## Overview

### The challenge

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

### Screenshot

![](./screenshots/interactive-pricing-component-fullscreen.png)

I've included 4 screenshots in the `/screenshots` folder: mobile, tablet, desktop, and fullscreen.

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/mobilefirst-using-vanilla-js-flexbox-bem-and-css-grid-Gp55YDxNE)
- [Live Site URL](https://victor-nyagudi.github.io/interactive-pricing-component/)

## My process

I wrote the HTML while observing mostly the desktop version and viewed the mobile version once or twice because
I knew I was going to need CSS grid to rearrange the layout. 

The CSS for the mobile version came next, and then I expanded from there up to desktop. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

I normally say I learned a lot during these challenges, but this time, I really mean it. I really didn't know where or
how to start at the beginning since this is my first time working with sliders. 

I knew I could separate the components into separate bits then style them, but I didn't how to do this. However, I came across a couple of very helpful resources I'll link in the [useful resources section](#useful-resources) below. 

Still, after a fair amount of reading, I figured it out. After completing this challenge, I've learned how to use the
`<output>` element I've read about a couple of times. I see how it can be used to output calculated values from a `<form`
such as the sum of two `<input type="number">`, or other inputs dealing with numbers.

Interestingly enough, it feels a lot like changing the `textContent` of an element from the DOM via JavaScript. 
Regardless of whichever route you choose, JavaScript will still be needed since we're responding to the 'input' event.

Speaking of which, I learned about the 'input' event and the `oninput` event handler. The input event occurs when the
value of an `<input>` changes - a little piece of information that should come in handy when working with forms down 
the road. 

Back to sliders, I learned about the different parts of the slider: the slider track, slider thumb, and the entire 
input itself and how all three interact. It was a bit confusing at first, but with practice, I should get better at 
working with them.

I also learned that they appear differently on different browsers and require different pseudo elements unique to each
browser for styling purposes. The `::-moz-range-track` and other slider pseudo elements meant for Mozilla were crossed
out, so I didn't include them in my CSS, just Chrome and IE. I'll make any necessary changes after getting feedback on
whether the current styling is supported by all browsers.

I found the `appearance: none` property very intriguing. It removes all default styling by the browser (and probably
the default functionality as well) leaving you with a completely blank slate.

After getting feedback about it, I finally implemented a screen reader only heading, so if you see this @pikamart from
FrontendMentor, this one's for you :)

I read up on it and now see the value it provides for anyone using a screen reader. It also makes it possible to divide the content into individual `<section>` tags and still provide an `<h2>` that way, those people can navigate the page much more easily. 

Side note: I took some time to learn about pseudo elements, which I didn't fully understand, and used them in
this challenge. Glad I know more about them now. 

Finally, I learned how to use JavaScript to update the slider's background. I found rather creative, and hope to practice
more with this kind of thing.


### Continued development

I didn't do too badly on timing. I would say I went over the 4 to 6 hour mark by about two hours, but again, not concerned abput it. 

I had to do a lot of reading and trying a couple of things out since this is my first slider, but I wouldn't do anything
differently looking back. I'm just glad to have this under my belt, and look forward to practicing styling sliders more
and more until I'm comfortable with them. 

I could also improve on how long I spend on the JavaScript. Sometimes it feels like what I want to do is right there
but just out of reach. Again, more practice should help with this. 

I feel way more comfortable with Flexbox and CSS grid right now. Glad to say I've improved in this sector. 

All in all, I'm looking forward to completing more challenges and getting better every day.

Here's to greater things! 

### Useful resources

- [Styling Range Inputs](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - An amazing article that gave me great insight on how `<input type="range">` can be styled. This helped me get a better understanding of how sliders look across different browsers, and how different browsers have different requirements for styling. I really liked this pattern and will use it going forward.
- [Styling Range Inputs with JS](https://tippingpoint.dev/style-range-input-css) - This is an amazing article which helped me finally understand how to hook up the functionality using JavaScript. The background doesn't natively move with the slider once you've removed the default styling, so you have to do this yourself.
- [The appearance Property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) - The MDN article about this interesting property.
- [Screen-Reader-Only Text Article](https://accessible360.com/accessible360-blog/use-aria-label-screen-reader-text/) - This article gave me a lot of useful info on screen-reader-only text, styling them, and how they help screen reader users with navigation. 
