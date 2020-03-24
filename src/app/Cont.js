import React from 'react';

function Cont() {
    return(
        <div id="cont"  className="container">
            <div className="row center">
                <h4>Contact Us</h4>
                <div className="row" style={{border:'1px solid black', width:'5%'}}></div>
            </div>
            <div className="row formContact">
                <form>
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="text" className="validate"/>
                                <label htmlFor="name">Nome</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <textarea id="descricao" className="materialize-textarea"></textarea>
                                <label htmlFor="descricao">Descricao</label>
                            </div>
                            <button className="btn waves-effect waves-light right" type="submit" name="action" style={{marginLeft:'5px', marginRight:'15px'}}>Enviar
                                <i className="material-icons right">send</i>
                            </button>
                            <button className="btn waves-effect waves-light right" type="reset" name="action">Limpar
                                <i className="material-icons right">clear</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col s12 center" style={{border:'1px solid black', marginTop: '2em'}}></div>
            </div>

        </div>
    )
}

export default Cont;