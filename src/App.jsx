import './App.css'

function App() {

  return (
    <div className="">
      <header className="header">
        <div className="header container">
          <div className="header-logo">
            <div className="header-logo-first">Food</div>
            <div className="header-logo-second">House</div>
          </div>
          <div className="header-menu">
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Меню</a></li>
              <li><a href="#">Сервис</a></li>
              <li><a href="#">О нас</a></li>
            </ul>
          </div>
          <div className="header-cart">
            <img src="img/cart-icon.svg" alt="" />
            <div className="cart-counter">
              12
            </div>
          </div>
        </div>
      </header>
      <div className="banner container">
        <div className="banner-info">
          <div className="banner-delivery">
            Экспресс-доставка от Яндекс.Еды
          </div>
          <div className="banner-title">
            Быстро и&nbsp;вкусно
          </div>
          <div className="banner-subtitle">Сеть быстрого питания #1 в Казани</div>
          <div className="banner-bottom">
            <div className="banner-btn">Сделать заказ</div>
            <div className="banner-bottom-text">бесплатная доставка от 500 рублей</div>
          </div>
        </div>
        <div className="banner-img">
          <img src="img/image.png" alt="" />
        </div>
      </div>
      <div className="menu container">
        <div className="menu-title">
          Наше Меню
          <div className="menu-line"></div>
        </div>
        <div className="categories">
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
        </div>
      </div>
    </div>
  )
}

export default App
