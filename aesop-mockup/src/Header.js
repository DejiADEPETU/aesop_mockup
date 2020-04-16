import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <div>
            <h1 class='header-text'>Complimentary standard shipping on all orders +</h1>
    <div class="header">

        <div class='header-child1-nav'>
            <nav>
                <ul>
                    <li>Shop</li>
                    <li>Read</li>
                    <li>Stores</li>
                    <li>Search</li>
                </ul>
            </nav>
        </div>
        <div class='header-child2-body'>
            <div>
                <h1> <span>Aēsop</span></h1>
            </div>
            <div>
                <h2>Formulations for skin, hair, home, and body </h2>
                <h3>Created with sensory pleasure in mind. </h3>
            </div>
        </div>
        <div class='header-child3-login'>
            <div>
                <h1>Login</h1>
            </div>
        </div>
    </div>
    </div>
        )
    } 
}

export default Header;