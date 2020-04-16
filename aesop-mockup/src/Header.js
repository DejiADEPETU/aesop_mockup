import React, { Component } from 'react';
import './Header.css'

class Header extends Component{
    render(){
        return (
            <div>
            <h1 class='header-text'>Complimentary standard shipping on all orders +</h1>
            <div class="header1">
            <div class='header-child1'>
                <nav class='header-nav'>
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Read</a></li>
                        <li><a href="">Stores</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
            </nav>
        </div>
     </div>
 </div>
        )
    } 
}

export default Header;