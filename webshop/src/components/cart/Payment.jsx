import React from 'react'
import Button from '@mui/material/Button';

function Payment({ sum, empty }) {

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const bodyData = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": sum,
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7mkme73" + new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://webshop022023.web.app"   // firebase.json failist
    }
    const headersData = {
      "Content-Type": "application/json",
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA=="
    }

    fetch(url, {"method": "POST", "body": JSON.stringify(bodyData), "headers": headersData})
      .then(res => res.json())
      .then(json => {
        if (json.payment_link !== undefined) {
          empty();
        }
        window.location.href = json.payment_link
      }); 
  }

  return (
    <Button variant='contained' onClick={pay}>Pay</Button>
  )
}

export default Payment