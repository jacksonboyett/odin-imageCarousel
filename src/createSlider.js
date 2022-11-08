import mountain1 from './images/mountain1.jpeg';
import mountain2 from './images/mountain2.jpeg';
import mountain3 from './images/mountain3.jpeg';
import mountain4 from './images/mountain4.jpeg';

export default function createSlider() {
  // Create inital DOM elements
  const slider = document.createElement('div');
  const slide1 = document.createElement('div');
  const slide2 = document.createElement('div');
  const slide3 = document.createElement('div');
  const slide4 = document.createElement('div');
  // Add classes to DOM elements
  slider.classList.add('slider');
  slide1.classList.add('slide');
  slide2.classList.add('slide');
  slide3.classList.add('slide');
  slide4.classList.add('slide');
  // Add images
  const mountainOne = new Image();
  mountainOne.src = mountain1;
  const mountainTwo = new Image();
  mountainTwo.src = mountain2;
  const mountainThree = new Image();
  mountainThree.src = mountain3;
  const mountainFour = new Image();
  mountainFour.src = mountain4;
  // Append images to slide divs
  slide1.append(mountainOne);
  slide2.append(mountainTwo);
  slide3.append(mountainThree);
  slide4.append(mountainFour);
  // Append slide divs to slider
  slider.append(slide1);
  slider.append(slide2);
  slider.append(slide3);
  slider.append(slide4);

  return slider;
}
