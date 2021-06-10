import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

      constructor(){
        super();
        this.state={
            products:[
                {
                    price:99,
                    title:'Watch',
                    qty:1,
                    img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
                    id:1
                },
                {
                    price:999,
                    title:'Mobile Phone',
                    qty:10,
                    img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
                    id:2
                },
                {
                    price:9999,
                    title:'Laptop',
                    qty:5,
                    img:'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
                    id:3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity = (product) => {
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty==0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products:products
        })
    }
    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        //to filter array of items and gives items with ids not equal to passed id
        const items = products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })

    }
  getCartCount = () =>{
    const {products} = this.state;
    let count  = 0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  getCartTotal=()=>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=>{
      cartTotal = cartTotal+product.qty*product.price
    })
    return cartTotal;
  }
  render(){
    const {products} = this.state;
  return (
    //call CartItem in div
    <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
         products={products}
         onIncreaseQuantity = {this.handleIncreaseQuantity} 
         onDecreaseQuantity = {this.handleDecreaseQuantity} 
         onDeleteProduct = {this.handleDeleteProduct}
         
        />
        <div style={{padding:10,fontSize:20,color:'grey'}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
