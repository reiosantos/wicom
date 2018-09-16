import React, {Component} from 'react';
import crocodile from '../images/crocodile.jpeg';
import baboon from '../images/baboon.jpeg';
import elephant from '../images/elephant.jpeg';
import lions from '../images/lions.jpeg';
import rhino2 from '../images/rhino2.jpeg';
import otherplant from '../images/otherplant.jpeg';
import plant from '../images/plant.jpeg';
import giraffe from '../images/giraffe.jpeg';

class Landing extends Component{
    render(){
        return(
            <div>
                <header>
        <div class="hero-text-box">
        <h2>Conserve our wildlife. <br/>Eradicate wildlife trafficking.</h2>
        <a class="btn btn-full" href="/card">Get started</a>
        <a class="btn btn-ghost" href="/card">Tour the site</a>
        </div>
        </header>
      <h3><strong>Have a tour and see some animals in the wildlife</strong></h3>
      <br/>
        <section class="section-animals">
        <ul class="animals-showcase">
            <li>
                <figure class="animal-photo">
                <img src={elephant} alt="elephant"/>
                </figure>
            </li>
            <li>
                    <figure class="animal-photo">
                <img src={giraffe}alt="giraffe"/>
                </figure>
            </li>
            </ul>
            <ul class="animals-showcase">
            <li>
                <figure class="animal-photo">
                <img src={plant} alt="plant"/>
                </figure>
            </li>
           
            <li>
                <figure class="animal-photo">
                <img src={otherplant} alt="otherplants"/>
                </figure>
            </li>
            <li>
                <figure class="animal-photo">
                <img src={baboon} alt="baboon"/>
                </figure>
            </li>
            <li>
                <figure class="animal-photo">
                    <img src={rhino2} alt="antelope"/>
                </figure>
            </li>
            <li>
                <figure class="animal-photo">
                <img src={crocodile} alt="crocodile"/>
                </figure>
            </li>
            <li>
                <figure class="animal-photo">
                <img src={lions} alt="lion"/>
                </figure>
            </li>
        </ul>
    </section>
    </div>
        );
    }
} 
export default Landing;