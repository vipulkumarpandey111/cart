import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';


class App extends React.Component {

    constructor(){
        super();
        this.state={
            products:[],
            loading:true
        }
        this.db=firebase.firestore();
    }

    componentDidMount(){
      //  firebase
      //  .firestore()
      //  .collection('products')
      //  .get()
      //  .then((snapshot)=>{
      //     snapshot.docs.map((doc)=>{
      //       console.log(doc.data())
      //     })
      //     const products = snapshot.docs.map((doc)=>{
      //       const data=doc.data();
      //       data['id']=doc.id;
      //       return data;
      //     })
      //     this.setState({
      //       products,
      //       loading:false
      //     })
      //  })
       this.db
       .collection('products')
       //.where('price','==',999).where('title','==','mug');
       //.orderBy('price','asc');
       .onSnapshot((snapshot)=>{
          snapshot.docs.map((doc)=>{
            console.log(doc.data())
          })
          const products = snapshot.docs.map((doc)=>{
            const data=doc.data();
            data['id']=doc.id;
            return data;
          })
          this.setState({
            products,
            loading:false
          })
       })
    }

    handleIncreaseQuantity = (product) => {
        const {products}=this.state;
        const index=products.indexOf(product);
        // products[index].qty+=1;
        // this.setState({
        //     products:products
        // })

      const docRef= this.db.collection('products').doc(products[index].id);

      docRef
      .update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log('Updated successfully')
      })
      .catch((error)=>{
        console.log('Error: ',error);
      })
    }
    handleDecreaseQuantity = (product) => {
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty==0){
            return;
        }
        // products[index].qty-=1;
        // this.setState({
        //     products:products
        // })
        const docRef= this.db.collection('products').doc(products[index].id);

      docRef
      .update({
        qty:products[index].qty-1
      })
      .then(()=>{
        console.log('Updated successfully')
      })
      .catch((error)=>{
        console.log('Error: ',error);
      })
    }
    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        //to filter array of items and gives items with ids not equal to passed id
        // const items = products.filter((item)=>item.id!==id);
        // this.setState({
        //     products:items
        // })
        const docRef= this.db.collection('products').doc(id);

        docRef
      .delete()
      .then(()=>{
        console.log('Updated successfully')
      })
      .catch((error)=>{
        console.log('Error: ',error);
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
  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      img:'',
      price:900,
      qty:3,
      title:'laptop'
    })
    .then((docRef)=>{
      console.log('product has been added',docRef);
    })
    .catch((error)=>{
      console.log('Error:',error);
    })
  }
  render(){
    const {products,loading} = this.state;
  return (
    //call CartItem in div
    <div className="App">
        <Navbar count = {this.getCartCount()}/>
        {/*<button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a product</button>*/}
        <Cart 
         products={products}
         onIncreaseQuantity = {this.handleIncreaseQuantity} 
         onDecreaseQuantity = {this.handleDecreaseQuantity} 
         onDeleteProduct = {this.handleDeleteProduct}
         
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding:10,fontSize:20,color:'grey'}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
