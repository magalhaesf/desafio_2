import React from 'react';
import { render } from 'react-dom';

import App from './App';
import Photo from './Photo';

if (document.getElementById('app')) {
    render(<App/>, document.getElementById('app'));
} else {
    render(<Photo/>, document.getElementById('photo'));
}

