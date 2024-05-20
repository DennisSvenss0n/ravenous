function Business(prop) {
    return (
        <div className='restaurantCard'>
            <a href={prop.info.url} target='_blank' rel="noreferrer">
                <img className='image' src={prop.info.img} alt='restaurant' />
            </a>
            <div className='info'>
                <p className='name'>{prop.info.name}</p>
                <p className='address'>{prop.info.address}</p>
                <p className='city'>{prop.info.city}</p>
                <p className='state'>{prop.info.state}</p>
                <p className='zipcode'>{prop.info.zipcode}</p>
                <p className='category'>{prop.info.category}</p>
                <p className='rating'>{prop.info.rating}</p>
                <p className='reviewCount'>{prop.info.reviewCount}</p>
            </div>
        </div>
    );
    
}

export default Business;
