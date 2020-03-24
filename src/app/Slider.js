import React, { Component } from 'react';
import './slider.scss';
import { render } from 'react-dom';

class Slider extends Component {
    constructor() {
        super();
        this.state = { 
            photos: [],
            x: 0 
        };
        this.fetchPhotos();
    }

    fetchPhotos() {
        fetch('/api/photos')
            .then(res => res.json())
            .then(data => {
                this.setState({photos: data});
            });
    }

    componentDidMount() {
        const intervalo = setInterval(() => {
            this.state.x === -100 * (this.state.photos.length - 1) ? this.setState({x: 0}) : this.setState({x: this.state.x - 100});
        }, 3000)
        return() => clearInterval(intervalo);
    }

    paraEsquerda() {
        this.state.x === 0 ? this.setState({x: -100 * (this.state.photos.length - 1)}) : this.setState({x: this.state.x + 100});
    };
    paraDireita() {
        this.state.x === -100 * (this.state.photos.length - 1) ? this.setState({x: 0}) : this.setState({x: this.state.x - 100});
    };

    render() {
        return (
            <div id="home" className="slider">
            {   
                this.state.photos.map(dado => {
                    return (
                        <div key={dado._id}className="slide" style={{transform:`translateX(${this.state.x}%)`}}> 
                            <img src={"uploads/"+dado.image} alt="slide-img" style={{width:'100%', height:'auto', position:'absolute', margin:'auto', top:0, left:0, right:0}}></img>
                        </div>
                    )
                })
            }
            <div className="divUpImg">
                <div className="titleImg center">
                    <h4>Art Is Eternal Happiness</h4>
                </div>
                <div className="btnImg center">
                    <button>WORK WHIT US</button>
                </div>
            </div>
        </div>
        )
    }
    
}

export default Slider;
