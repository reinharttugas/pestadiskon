import React, { Component } from "react";
 
 
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      
        console.log("<<<<<<<")
      fetch("https://dev.pestadiskon.com/api/Discounts")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.map(data => (
            {
            discountId: `${data.discountid}`,
            shortDescription: `${data.short_description}`,
            shopName: `${data.shop_name}`,
            provider: `${data.provider}`,
            discountType: `${data.discount_type}`,
            discountDetail :`${data.discount_detail}`,
            description : `${data.description}`,
            imageUrl : `${data.image_url}`,
            idcategory : `${data.idcategory}`,
            discountStartDate : `${data.discount_start_date}`,
            discountEndDate : `${data.discount_end_date}`,
            updateAt : `${data.update_at}`,
            geolocation : `${data.geolocation}`,
            merchantUrl : `${data.merchant_url}`,
            id : `${data.id}`,
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
        
    }
 
    render() {
      const {items } = this.state;
      console.error("<<<")
        return (
          <div className="boxWhite">
            <h2>Test Frontend</h2>
            {
              items.length > 0 ? items.map(item => {
              const {discountId, shortDescription, shopName, provider, discountType, discountDetail, description, 
                imageUrl, idcategory, discountStartDate, discountEndDate, updateAt, geolocation, merchantUrl,id} = item;
                
                if (provider == "ovo"){
                    return (
                            <div key={discountId} className="bgBox">
                            <div className="ctrOvo">
                                {shortDescription} {shopName}<br />
                                {provider} {discountType}<br />
                                {discountDetail} <br />
                                <img src={imageUrl} alt={description} className="box" height = {200} width = {400}/><br />
                                {discountStartDate} {discountEndDate}<br />
                                {updateAt} {geolocation}<br />
                                {merchantUrl}<br />
                                {idcategory} {id}<br />
                                <br />
                                </div>
                            </div>
                    );
                 }
                 else {
                    return (
                        <div key={discountId} className="bgBox">
                        <div className="ctr">
                            {shortDescription} {shopName}<br />
                            {provider} {discountType}<br />
                            {discountDetail} <br />
                            <img src={imageUrl} alt={description} className="box" height = {200} width = {400}/><br />
                            {discountStartDate} {discountEndDate}<br />
                            {updateAt} {geolocation}<br />
                            {merchantUrl}<br />
                            {idcategory} {id}<br />
                            <br />
                            </div>
                        </div>
                    );
                 }
            })
          : null
          }
          </div>
        );
    }
  }
export default Home;