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
            <button id="paraEsquerda" onClick={this.paraEsquerda}>
                <i className="material-icons">keyboard_arrow_left</i>
            </button>
            <button id="paraDireita" onClick={this.paraDireita}>
                <i className="material-icons">keyboard_arrow_right</i>
            </button>
        </div>
        )
    }
    
}

// function Slider() {
//     var sliderArr = [];
//     fetch('/api/photos')
//         .then(res => res.json())
//         .then(data => {
//             sliderArr = data;
//         });
//     const [x, setX] = useState(0);
//     const paraEsquerda = () => {
//         x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
//     };
//     const paraDireita = () => {
//         x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
//     };
//     useEffect(() => {
//         const abc = setInterval(() => {
//             x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
//         }, 3000)
//         return() => clearInterval(abc);
//     })
//     let imgStyles = {
//         width: 100 + '%',
//         height: 'auto',
//         position: 'absolute',
//         margin: 'auto',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0
//     };
//     return(
//         <div id="home" className="slider">
//             {   
//                 console.log(sliderArr)
//                 // img.map(dado => {
//                 //     return (
//                 //         <div key={dado._id}className="slide" style={{transform:`translateX(${x}%)`}}> 
//                 //             <img src={dado.image} alt="slide-img" style={imgStyles}></img>
//                 //         </div>
//                 //     )
//                 // })
//             }
//             <div className="divUpImg">
//                 <div className="titleImg center">
//                     <h4>Art Is Eternal Happiness</h4>
//                 </div>
//                 <div className="btnImg center">
//                     <button>WORK WHIT US</button>
//                 </div>
//             </div>
//             <button id="paraEsquerda" onClick={paraEsquerda}>
//                 <i className="material-icons">keyboard_arrow_left</i>
//             </button>
//             <button id="paraDireita" onClick={paraDireita}>
//                 <i className="material-icons">keyboard_arrow_right</i>
//             </button>
//         </div>
//     )
// }

export default Slider;