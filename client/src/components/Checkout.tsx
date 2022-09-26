import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import { Card, Form, Input, notification } from "antd";
  import { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import agent from "../actions/agent";
import { removeBasket } from "../redux/slice/basketSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
  import CheckoutSummary from "./CheckoutSummery";
  
  const Checkout = () => {
    const [cardName, setCardName] = useState<string>("");

    const [form] = Form.useForm();
  
    const stripe = useStripe();
    const elements = useElements();
  
    const dispatch = useAppDispatch();
    const history = useHistory();
  
    const { basket } = useAppSelector((state) => state.basket);
  
    const handleChange = (e: any) => {
      setCardName(e.target.value);
    };
  
    const handlePayment = async (event: SyntheticEvent) => {
      event.preventDefault();
      if (!stripe || !elements) return;
  
      try {
        const cardElement = elements.getElement(CardNumberElement);
  
        const paymentResult = await stripe.confirmCardPayment(
          basket?.clientSecret!,
          {
            payment_method: {
              card: cardElement!,
              billing_details: {
                name: cardName,
              },
            },
          }
        );
        if (paymentResult.paymentIntent?.status === "succeeded") {
          await agent.Users.addCourse();

          notification.success({
            message: "Your payment is successful",
          });
          dispatch(removeBasket());
          await agent.Baskets.clear();
          setTimeout(() => {
            history.push("/profile");
          }, 1000);
        } else {
          notification.error({
            message: paymentResult.error?.message!,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    const OPTIONS = {
      showIcon: true,
    };
  
    return (
      <>
        <div className="checkout">
          <div className="checkout__form">
            <h1>Checkout Page</h1>
            <Card title="Fill your card details here">
              <Form name="payment" form={form} layout="vertical">
                <Form.Item
                  name="cardName"
                  rules={[
                    { required: true, message: "Card Name is required", min: 5 },
                  ]}
                  label="Name on card"
                >
                  <Input
                    name="cardName"
                    onChange={handleChange}
                    value={cardName}
                    placeholder="Mention the name on your card"
                  />
                </Form.Item>
                <Form.Item label="Card number">
                  <div className="stripe-input">
                    <CardNumberElement options={OPTIONS} />
                  </div>
                </Form.Item>
                <div className="inline">
                  <Form.Item label="Expiry date">
                    <div className="stripe-input">
                      <CardExpiryElement />
                    </div>
                  </Form.Item>
                  <Form.Item label="CVV">
                    <div className="stripe-input">
                      <CardCvcElement />
                    </div>
                  </Form.Item>
                </div>
              </Form>
            </Card>
          </div>
          <div className="checkout__summary">
            <CheckoutSummary stripe={stripe} handleSubmit={handlePayment} />
          </div>
        </div>
      </>
    );
  };
  
  export default Checkout;