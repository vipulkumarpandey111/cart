import React from 'react';

const CartItem = (props) => {
//class CartItem extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         price:1999,
    //         title:'Mobile Phone',
    //         qty:1,
    //         img:''
    //     }
    //     //this.testing();
    //     //this.increaseQuantity=this.increaseQuantity.bind(this);
    // }
    //outside of set state ,react doesn't perform batching
    // in synchronous calls as promises or AJAX requests
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         this.setState({qty:this.state.qty+10});

    //         this.setState({qty:this.state.qty+10});

    //         this.setState({qty:this.state.qty+10});
    //         console.log('state',this.state);
    //     });
    // }
    // increaseQuantity = () => {
    //     //console.log('this',this.state);
    //     //setState form 1 - if previous state not required
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // });
    //     //setState form 2 -if previous state required
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty+1
    //         }
    //     });
    // }
    // decreaseQuantity = () => {
    //     const {qty}=this.state;

    //     if(qty==0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     });
    // }
   // render(){
        const {price,title,qty}=props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct}=props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'blue'}}>Rs {price}</div>
                    <div style={{color:'blue'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/128/992/992651.png"
                     onClick={()=>onIncreaseQuantity(product)}
                     />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/128/1828/1828906.png" 
                    onClick={()=>onDecreaseQuantity(product)}
                    />
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/128/1345/1345874.png" 
                    onClick={()=>onDeleteProduct(product.id)}
                    />
                    </div>
                </div>
            </div>
        );
   // }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;