import React from 'react'

export const SideMenu = () => {
    return (
        <div className="page">
            <div id="nav-container">
                <div className="button" tabIndex="0">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </div>
                <div id="nav-content" tabIndex="0">
                    <ul>
                        <li><a className='bigger' href="#artigo1">Michael Bierut Thirteen Ways of Looking at a Typeface</a></li>
                        <li className='menu'>
                            <ul className='menu-list'>
                                <li>
                                    <a className='menulink' href="#artigo1-intro">
                                        <p>Intro</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-01">
                                        <img src={require('../assets/imgs/artigo1/n1.png')} alt="" />
                                        <p>Because it works.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-02">
                                        <img src={require('../assets/imgs/artigo1/n2.png')} alt="numb" />
                                        <p>Because you like its history.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-03">
                                        <img src={require('../assets/imgs/artigo1/n3.png')} alt="numb" />
                                        <p>Because you like its name.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-04">
                                        <img src={require('../assets/imgs/artigo1/n4.png')} alt="numb" />
                                        <p>Because of who designed it.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-05">
                                        <img src={require('../assets/imgs/artigo1/n5.png')} alt="numb" />
                                        <p>Because it was there.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-06">
                                        <img src={require('../assets/imgs/artigo1/n6.png')} alt="numb" />
                                        <p>Because they made you.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-07">
                                        <img src={require('../assets/imgs/artigo1/n7.png')} alt="numb" />
                                        <p>Because it reminds you of something.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-08">
                                        <img src={require('../assets/imgs/artigo1/n8.png')} alt="numb" />
                                        <p>Because it’s beautiful.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-09">
                                        <img src={require('../assets/imgs/artigo1/n9.png')} alt="numb" />
                                        <p>Because it’s ugly.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-10">
                                        <img src={require('../assets/imgs/artigo1/n10.png')} alt="numb" />
                                        <p>Because it’s boring.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-11">
                                        <img src={require('../assets/imgs/artigo1/n11.png')} alt="numb" />
                                        <p>Because it’s special.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-12">
                                        <img src={require('../assets/imgs/artigo1/n12.png')} alt="numb" />
                                        <p>Because you believe in it.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-13">
                                        <img src={require('../assets/imgs/artigo1/n13.png')} alt="numb" />
                                        <p>Because you can't not.</p>
                                    </a></li>
                                <li>
                                    <a className='menulink' href="#artigo1-outro">
                                        <p>The book is beautiful, by the way, and not the least bit slutty.</p>
                                    </a></li>
                            </ul>
                        </li>
                        <li><a className='bigger' href="#artigo2">“Absence in design is very important”: Karel Martens on paying attention to the things we don’t see</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
