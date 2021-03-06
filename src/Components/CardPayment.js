import React, {PureComponent} from 'react';
import {
  StyleSheet,

  View,
  Text,
 
} from 'react-native';
import stripe from 'tipsi-stripe'
import Button from './Button'
import axios from 'axios';


stripe.setOptions({
  publishableKey:'pk_test_vbArfEW4x5jzOQFX4EHRcEUJ00UiCWlXHs'
})

class CardPayment extends PureComponent {
  static title = 'Card Form'

  state = {
    loading: false,
    token: null,
  }

  handleCardPayPress = async () => {
    try {
      this.setState({ loading: true, token: null })
      const token = await stripe.paymentRequestWithCardForm({
        // Only iOS support this options
        smsAutofillDisabled: true,
        requiredBillingAddressFields: 'full',
        prefilledInformation: {
          billingAddress: {
            name: 'Gunilla Haugeh',
            line1: 'Canary Place',
            line2: '3',
            city: 'Macon',
            state: 'Georgia',
            country: 'US',
            postalCode: '31217',
            email: 'ghaugeh0@printfriendly.com',
          },
        },
      })

      this.setState({ loading: false, token })
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  makePayment = async() => {
    this.setState({loading:true})

    axios({
      method:'POST',
      url:'https://us-central1-internship-84bb2.cloudfunctions.net/completePaymentWithStripe',
      data:{
        amount:100,
        currency:'usd',
        token:this.state.token
      }
    }).then(response => {
      console.log(response);
      this.setState({loading:false})
    })

  }
 
  render() {
    const { loading, token } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Card Form Example
        </Text>
        <Text style={styles.instruction}>
          Click button to show Card Form dialog.
        </Text>
        <Button
          text="Enter you card and pay"
          loading={loading}
          onPress={this.handleCardPayPress}
         
        />
        <View
          style={styles.token}
          >
          {token &&
          <>
            <Text style={styles.instruction}>
              Token: {token.tokenId}
            </Text>
            <Button text='Make Payment' loading={loading} onPress={this.makePayment}/>
          </>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
})


export default CardPayment;