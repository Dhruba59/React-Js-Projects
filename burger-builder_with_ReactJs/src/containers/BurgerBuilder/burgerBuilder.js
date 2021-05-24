import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modals/Modal';
import UpdateSummary from '../../components/Burger/UpdateSummary/UpdateSummary';
import axios from '../../axios-order';
import { Route } from 'react-router-dom';

const IngredientsPrice = {
  cheese: 30,
  meat: 80,
  salad: 20,
  bacon: 20
}


class burgerBuilder extends Component {
  state = {
    Ingredients: {
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0
    },

    TotalPrice: 50,
    Perchaseable: false,
    OrderButtonClicked: false
  }

  addIngredients = (type) => {
    //console.log(this.state.TotalPrice);

    const newIng = { ...this.state.Ingredients };
    newIng[type] = newIng[type] + 1;
    const newPrice = this.state.TotalPrice + IngredientsPrice[type];

    this.setState({
      Ingredients: newIng,
      TotalPrice: newPrice
    });
    //console.log(this.state.TotalPrice); 
    this.updatePerchaseable(newIng);
  }

  removeIngredients = (type) => {
    const newIng = { ...this.state.Ingredients };
    if (newIng[type] <= 0) return;

    newIng[type] = newIng[type] - 1;
    const newPrice = this.state.TotalPrice - IngredientsPrice[type];

    this.setState({
      Ingredients: newIng,
      TotalPrice: newPrice
    });
    this.updatePerchaseable(newIng);
  }


  updatePerchaseable = (Ingredients) => {
    let countIng = 0;
    Object.keys(Ingredients).forEach((Ing) => {
      countIng = countIng + Ingredients[Ing];
    })
    if (countIng > 0) {
      this.setState({
        Perchaseable: true
      });
    }
    else {
      this.setState({
        Perchaseable: false
      });
    }

  }


  disableInfo = () => {
    let disableInfoArr = { ...this.state.Ingredients };
    for (let igName in disableInfoArr) {
      if (disableInfoArr[igName] === 0) {
        disableInfoArr[igName] = true;
      }
      else {
        disableInfoArr[igName] = false;
      }
    }
    return disableInfoArr;
  }

  OrderHandler = () => {
    this.setState({ OrderButtonClicked: !this.state.OrderButtonClicked });
  }

  storeOnFirebase = () => {
    const data = {
      Ingredients : this.state.Ingredients,
      TotalPrice : this.state.TotalPrice,
      customer : {
        name : 'Linkon',
        address : 'Bagbari, Sylhet',
        email : 'asdfs@mail.com',
        phone :'1231565'
      }
    }
    axios.post('/orders.json',data)
      .then( response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {

    let disableInfoArr = this.disableInfo();

    return (
      <>
        
        <Modal show={this.state.OrderButtonClicked} modalClosed={this.OrderHandler}>
          <UpdateSummary
            IngredientsList={this.state.Ingredients}
            price={this.state.TotalPrice}
            cancel={this.OrderHandler}
            continue={this.storeOnFirebase}/>
        </Modal>

        <Burger Ingredients={this.state.Ingredients} />
        <div><BuildControls
          IngAdded={this.addIngredients}
          IngRemoved={this.removeIngredients}
          disableInfoArray={disableInfoArr}
          price={this.state.TotalPrice}
          orderDisabled={this.state.Perchaseable}
          ordered={this.OrderHandler} /></div>

      </>
    );
  }
}

export default burgerBuilder;