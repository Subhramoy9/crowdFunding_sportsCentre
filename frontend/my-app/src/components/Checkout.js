import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();

  const onActionsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/addpayment");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/bag");
  }, [navigate]);

  return (
    <div className={styles.checkout}>
      <div className={styles.contentFrame}>
        <div className={styles.addressCard}>
          <div className={styles.header}>
            <div className={styles.shippingAddress}>Shipping Address</div>
          </div>
          <div className={styles.conent}>
            <div className={styles.currentAddress}>
              <div className={styles.johnMaker}> John Maker</div>
              <div className={styles.johnMaker}>123 Plae Grond Stret</div>
              <div className={styles.johnMaker}>Vermont, California</div>
              <div className={styles.johnMaker}>United States of America</div>
            </div>
            <div className={styles.actions} onClick={onActionsContainerClick}>
              <div className={styles.button}>
                <div className={styles.loremIpsumDolor}>Change</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addressCard}>
          <div className={styles.header}>
            <div className={styles.shippingAddress}>Payment Method</div>
          </div>
          <div className={styles.conent}>
            <div className={styles.currentAddress1}>
              <div className={styles.card}>
                <img className={styles.icon} alt="" src="/icon20.svg" />
                <div className={styles.johnMaker}>
                  <span>{`Mastercard `}</span>
                  <span className={styles.giftCardBalance}>ending in 1252</span>
                </div>
              </div>
              <div className={styles.giftCard}>
                <img className={styles.icon} alt="" src="/icon21.svg" />
                <div className={styles.johnMaker}>
                  <span>{`$ 53.21 `}</span>
                  <span className={styles.giftCardBalance}>
                    gift card balance
                  </span>
                </div>
              </div>
              <div className={styles.billingAddress}>
                <div className={styles.card}>
                  <div className={styles.checkboxInput}>
                    <div className={styles.checkboxInput1} />
                    <div className={styles.inner} />
                  </div>
                  <div className={styles.johnMaker}>
                    Billing address same as Shipping Address
                  </div>
                </div>
              </div>
              <div className={styles.changeBillingAddress}>
                <div className={styles.changeBillingAddress1}>
                  Change Billing Address
                </div>
              </div>
            </div>
            <div className={styles.actions1}>
              <div className={styles.button2} onClick={onButtonContainer1Click}>
                <div className={styles.loremIpsumDolor}>Change</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentFrame1}>
          <div className={styles.header2}>
            <div className={styles.shippingAddress}>Review you Bag</div>
          </div>
          <div className={styles.bagContents}>
            <div className={styles.itemInBag}>
              <div className={styles.productImage}>
                <img className={styles.imageIcon} alt="" src="/image7@2x.png" />
              </div>
              <div className={styles.contentArea}>
                <div className={styles.header3}>
                  <div className={styles.title}>
                    <div className={styles.johnMaker}>Dell XPS 13</div>
                  </div>
                  <div className={styles.subtitle}>
                    <div className={styles.johnMaker}>White</div>
                  </div>
                </div>
                <div className={styles.smallDescription}>
                  <div
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <img className={styles.icon} alt="" src="/star011.svg" />
                    <img className={styles.icon} alt="" src="/star011.svg" />
                    <img className={styles.icon} alt="" src="/star011.svg" />
                    <img className={styles.icon} alt="" src="/star011.svg" />
                    <img className={styles.icon} alt="" src="/star051.svg" />
                  </div>
                  <div className={styles.loremIpsumDolor}>4.5 / 5</div>
                </div>
                <div className={styles.priceRating}>
                  <div className={styles.price}>
                    <div className={styles.johnMaker}>$ 1799.99</div>
                    <div className={styles.johnMaker}>x</div>
                    <div className={styles.johnMaker}>1</div>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.price1}>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon22.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                      <div className={styles.div3}>1</div>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon23.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bagContentsChild} />
            <div className={styles.itemInBag}>
              <div className={styles.productImage1}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image8@2x.png"
                />
              </div>
              <div className={styles.contentArea}>
                <div className={styles.header3}>
                  <div className={styles.title}>
                    <div className={styles.johnMaker}>Iphone 11</div>
                  </div>
                  <div className={styles.subtitle}>
                    <div className={styles.johnMaker}>Navy Blue</div>
                  </div>
                </div>
                <div className={styles.smallDescription}>
                  <div
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star051.svg" />
                  </div>
                  <div className={styles.loremIpsumDolor}>4.5 / 5</div>
                </div>
                <div className={styles.priceRating}>
                  <div className={styles.price}>
                    <div className={styles.johnMaker}>$ 729.99</div>
                    <div className={styles.johnMaker}>x</div>
                    <div className={styles.johnMaker}>3</div>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.price1}>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon22.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                      <div className={styles.div3}>3</div>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon23.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bagContentsChild} />
            <div className={styles.itemInBag}>
              <div className={styles.productImage1}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image9@2x.png"
                />
              </div>
              <div className={styles.contentArea}>
                <div className={styles.header3}>
                  <div className={styles.title}>
                    <div className={styles.johnMaker}>Iphone 11</div>
                  </div>
                  <div className={styles.subtitle}>
                    <div className={styles.johnMaker}>Milky White</div>
                  </div>
                </div>
                <div className={styles.smallDescription}>
                  <div
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star051.svg" />
                  </div>
                  <div className={styles.loremIpsumDolor}>4.5 / 5</div>
                </div>
                <div className={styles.priceRating}>
                  <div className={styles.price}>
                    <div className={styles.johnMaker}>$ 619.99</div>
                    <div className={styles.johnMaker}>x</div>
                    <div className={styles.johnMaker}>1</div>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.price1}>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon22.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                      <div className={styles.div3}>1</div>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon23.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bagContentsChild} />
            <div className={styles.itemInBag}>
              <div className={styles.productImage1}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image10@2x.png"
                />
              </div>
              <div className={styles.contentArea}>
                <div className={styles.header3}>
                  <div className={styles.title}>
                    <div className={styles.johnMaker}>Iphone 11</div>
                  </div>
                  <div className={styles.subtitle}>
                    <div className={styles.johnMaker}>Serious Black</div>
                  </div>
                </div>
                <div className={styles.smallDescription}>
                  <div
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star012.svg" />
                    <img className={styles.icon} alt="" src="/star051.svg" />
                  </div>
                  <div className={styles.loremIpsumDolor}>4.5 / 5</div>
                </div>
                <div className={styles.priceRating}>
                  <div className={styles.price}>
                    <div className={styles.johnMaker}>$ 619.99</div>
                    <div className={styles.johnMaker}>x</div>
                    <div className={styles.johnMaker}>2</div>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.price1}>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon22.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                      <div className={styles.div3}>2</div>
                      <div className={styles.increaseButton}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon23.svg"
                        />
                        <div className={styles.button4}>Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button12} onClick={onButtonContainer2Click}>
        <img className={styles.icon} alt="" src="/icon24.svg" />
        <div className={styles.loremIpsumDolor}>Back</div>
      </div>
      <div className={styles.totalSummary}>
        <div className={styles.line01}>
          <div className={styles.orderSummary}>Order Summary</div>
        </div>
        <div className={styles.line02}>
          <div className={styles.loremIpsumDolor}>Items:</div>
          <div className={styles.loremIpsumDolor}>{`$ 5849.37 `}</div>
        </div>
        <div className={styles.line02}>
          <div className={styles.loremIpsumDolor}>Shipping:</div>
          <div className={styles.loremIpsumDolor}>$ 6.99</div>
        </div>
        <div className={styles.line02}>
          <div className={styles.loremIpsumDolor}>Estimated GST:</div>
          <div className={styles.loremIpsumDolor}>{`$ 760.41 `}</div>
        </div>
        <div className={styles.line02}>
          <div className={styles.loremIpsumDolor}>Gift Card:</div>
          <div className={styles.loremIpsumDolor}>$ 0.00</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.total}>
          <div className={styles.orderSummary}>Order Total:</div>
          <div className={styles.orderSummary}>{`$ 6609.78 `}</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.button14}>
          <div className={styles.loremIpsumDolor}>Place your order</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;