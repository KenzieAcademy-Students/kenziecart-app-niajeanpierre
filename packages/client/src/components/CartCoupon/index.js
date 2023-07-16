import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CartCoupon.scss";
import { useState } from "react";
import axios from "../../utils/axiosConfig";
import { verifyCoupon } from "utils/axiosService";
import { toast } from "react-toastify";

const CartCoupon = ({ coupon, applyCoupon }) => {
  const [code, setCode] = useState("");
  const [codeAccepted, setCodeAccepted] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await verifyCoupon(code);
      applyCoupon(response.data);
      setCodeAccepted(true);
    } catch (error) {
      setCodeAccepted(false);
      toast.error("Coupon code is invalid");
    }
  };

  return (
    <div className="cart-coupon">
      <Container>
        <Row as={Form} onSubmit={handleSubmit}>
          <Col as={Form.Group} xs={12} md={6}>
            <Form.Label> Coupon: </Form.Label>
            {!codeAccepted ? (
              <Form.Control
                type="text"
                name="code"
                value={code}
                placeholder="Enter Coupon Code"
                isInvalid={codeAccepted === false}
                onChange={(e) => setCode(e.target.value)}
              />
            ) : (
              <span>
                {coupon.code} ({coupon.discount * 100}% off)
              </span>
            )}
          </Col>
          <Col
            as={Form.Group}
            xs={12}
            md={6}
            className="d-flex flex-column-reverse"
          >
            <Button type="submit" variant="info" disabled={codeAccepted}>
              Apply Coupon
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartCoupon;
