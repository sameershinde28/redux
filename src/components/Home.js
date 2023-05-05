import React from 'react';

function Home() {
    return (
        <div>
            <div className='add-to-cart'>
                <img src='https://th.bing.com/th/id/R.75f19c3afe6e06bb699e9acb1e865059?rik=l8kpZ%2fT7akkNMQ&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f1%2fShopping-Cart-PNG-Royalty-Free-Photo.png&ehk=qt1C828QqIQVtzjrcjwuBWO3wWbRFeRu0%2fajPgNbz%2fw%3d&risl=&pid=ImgRaw&r=0' alt='' />
            </div>
            <h1>New Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://n4.sdlcdn.com/imgs/f/n/r/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg' alt='mobile-img' />
                </div>
                <div className='text-wrapper item'>
                    <span>I-PHONE</span>
                    <span>PRICE:$10,000</span>
                </div>

                <div className='btn-wrapper item'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
