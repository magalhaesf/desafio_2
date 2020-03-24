import React, { Component } from 'react';

class Photo extends Component {
    
    constructor() {
        super();
        this.state = {
            image: '',
            _id: '',
            photos: []
        };
        this.addPhoto = this.addPhoto.bind(this);
    }

    addPhoto(e) {
        var form = document.querySelector('form');
        var data = new FormData(form);
        
        e.preventDefault();
        fetch('/api/photos', {
            method: 'POST',
            body: data
        })
            .then(res => {res.json(); console.log(res)})
            .then(data => {
                console.log(data);
                M.toast({html: 'Photo salva'});
                this.fetchPhotos();
            })
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.fetchPhotos();    
    }

    fetchPhotos() {
        fetch('/api/photos')
            .then(res => res.json())
            .then(data => {
                this.setState({photos: data});
            });
    }

    deletePhoto(id, image) {
        if(confirm('Are you sure you want to delete it?')) {
            fetch(`/api/photos/${id}/${image}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    M.toast({html: 'Photo deletada'});
                    this.fetchPhotos();
                });
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s4 center">
                        <form onSubmit={this.addPhoto} action="">
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>File</span>
                                    <input name="image" id="image" type="file"/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text"/>
                                </div>
                            </div>
                            <button className="btn" type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="col s4 center">
                        <table>
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                this.state.photos.map(photo => {
                                    return (
                                        <tr key={photo._id}>
                                            <td> 
                                                <img src = {'../uploads/' + photo.image} style ={{width: '50px'}}/>
                                            </td>
                                            <td>
                                                <button onClick={() => this.deletePhoto(photo._id, photo.image)} className="btn light-blue darken-4">
                                                    <i className="material-icons">delete</i> 
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
        )
    }
}

export default Photo;