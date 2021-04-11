import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService';
import ErrorMes from '../errorMes/errorMes';

import Spiner from "../spinner/spiner";
import View from "./View/View";


export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateCharacter();
    }

    gotSevice = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random() * 140 + 25);

        this.gotSevice.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state,
            spinner = loading ? <Spiner/> : null;
        const content = !(loading || error) ?  <View char={char}/>: null;
        const errorM = error ? <ErrorMes/> : null;
        if (loading) {
            return <Spiner/>
        }
        return (
            <div className="random-block rounded">
                {spinner}
                {content}
                {errorM}
            </div>
        );
    }
}


