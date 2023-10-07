import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import img from '../pics/0x0.webp'
import styles from './Dashboarrd.css'
const ListedItems = () => {
  const navigate = useNavigate();

  const onProductImageContainer1Click = useCallback(() => {
    navigate("/itemview");
  }, [navigate]);

  const onButtonContainer16Click = useCallback(() => {
    navigate("/bag");
  }, [navigate]);

  const onNavLinkContainer1Click = useCallback(() => {
    navigate("/bag");
  }, [navigate]);
  return (
    <div className={styles.dashboard}>
      <div className={styles.contentFrame}>
        <div className={styles.topBar}>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.label1}>Search Item</div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputArea}>
                <div className={styles.placeholder}>
                  Apple Watch, Samsung S21, Macbook Pro, ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentArea}>
          <div className={styles.row01}>
            <div className={styles.itemCard}>
              <div
                className={styles.productImage}
                 onClick={onProductImageContainer1Click}
              >
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image17@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Apple Watch</div>
                <div className={styles.smallDescription}>Series 5 SE</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 529.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon32.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon33.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image18@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Sony ZX330BT</div>
                <div className={styles.smallDescription}>Light Grey</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 39.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon34.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon35.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image19@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Serious Black</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon36.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon37.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image20@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Subway Blue</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon38.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon39.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row02}>
            <div className={styles.itemCard4}>
              <div className={styles.productImage8}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image21@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Macbook Pro 16”</div>
                <div className={styles.smallDescription}>Silver - M1 Pro</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 3249.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon40.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon41.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image22@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Product RED</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon42.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon43.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image23@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 11</div>
                <div className={styles.smallDescription}>Milky White</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 619.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon44.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon45.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row02}>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image24@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 12</div>
                <div className={styles.smallDescription}>Rose Pink</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 729.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon46.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon47.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image25@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 12</div>
                <div className={styles.smallDescription}>Navy Blue</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 729.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src="/icon48.svg" />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src="/icon49.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard4}>
              <div className={styles.productImage8}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon9}
                    alt=""
                    src="/image26@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Dell XPS 15 2-in-1</div>
                <div className={styles.smallDescription}>Midnight Gray</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 3199.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src={img} />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row02}>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image27@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 13 Pro</div>
                <div className={styles.smallDescription}>Silly Silver</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 1029.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src={img} />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src={img}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Iphone 13 Pro</div>
                <div className={styles.smallDescription}>Grey</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 1099.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src={img}/>
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon12}
                    alt=""
                    src={img}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div
                  className={styles.itemName}
                >{`Samsung Galaxy Note 21 `}</div>
                <div className={styles.smallDescription}>2 - Options</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 999.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src={img} />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.productImage2}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon13}
                    alt=""
                    src={img}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Samsung Galaxy S21+</div>
                <div className={styles.smallDescription}>Lilac Purple</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 849.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src={img} />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src={img}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row02}>
            <div className={styles.itemCard4}>
              <div className={styles.productImage8}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon14}
                    alt=""
                    src="/image31@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Dell XPS 13</div>
                <div className={styles.smallDescription}>White</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 1799.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src={img}/>
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.itemCard4}>
              <div className={styles.productImage8}>
                <div className={styles.productImage1}>
                  <img
                    className={styles.imageIcon15}
                    alt=""
                    src={img}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.itemName}>Dell XPS 15</div>
                <div className={styles.smallDescription}>Light Grey</div>
                <div className={styles.action}>
                  <div className={styles.itemName}>$ 1899.99</div>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" src={img} />
                    <div className={styles.button1}>Add to Cart</div>
                  </div>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon1} alt="" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardChild} />
      <div className={styles.bagArea}>
        <div className={styles.title}>
          <div className={styles.itemName}>Bag</div>
        </div>
        <div className={styles.bagItems}>
          <div className={styles.row}>
            <div className={styles.bagItem}>
              <div className={styles.productImage32}>
                <img
                  className={styles.imageIcon14}
                  alt=""
                  src={img}
                />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage32}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src={img}
                />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage32}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image13@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.bagItem}>
              <div className={styles.productImage32}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image14@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <div className={styles.button32} onClick={onButtonContainer16Click}>
            <img className={styles.icon1} alt="" src="/icon28.svg" />
            <div className={styles.itemName}>View Bag</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navLinkstop}>
          <div className={styles.logo}>
            <img className={styles.logoChild} alt="" src="/group-11.svg" />
          </div>
          <img
            className={styles.navLinkstopChild}
            alt=""
            src="/rectangle-1@2x.png"
          />
          <div className={styles.title}>
            <img className={styles.icon33} alt="" src="/icon25.svg" />
          </div>
          <div className={styles.navLink}>
            <img className={styles.icon1} alt="" src="/icon30.svg" />
            <div className={styles.link}>Store</div>
          </div>
          <div className={styles.navLink1} onClick={onNavLinkContainer1Click}>
            <img className={styles.icon1} alt="" src="/icon31.svg" />
            <div className={styles.link}>Cart</div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.navLink2}>
            <img className={styles.icon1} alt="" src="/icon11.svg" />
            <div className={styles.link}>Link</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListedItems