import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import List from "../components/List";


const MainPage = () => {
    const name = 'GEEKS'
    return (
        <div>
            <Header/>
            <div className='btn'>MainPage</div>

            <Button name={'Open'} color={'primary'}/>
            <Button name={'Close'} color={'error'}/>
            <Button name={'Save'} color={'secondary'}/>
            <Footer/>
            <List name={name}/>
        </div>
    );
};

export default MainPage;