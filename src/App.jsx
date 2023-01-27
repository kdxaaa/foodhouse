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
          <div className="category-item category-salad">
            <div className="icon-frame">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path className='salad-hover' d="M115.625 68.75C117.819 62.3938 118.287 54.775 118.75 45.5375V37.5H104.65C86.9625 37.5 75.8 42.525 69.4 50.475M32.8438 68.8C31.9659 64.668 31.4328 60.4702 31.25 56.25V50H42.2188C48.3438 50 53.475 50.775 57.7125 52.1875M50 50L56.25 25L81.25 40.625M81.25 68.75V65.625C81.25 61.481 79.6038 57.5067 76.6735 54.5765C73.7433 51.6462 69.769 50 65.625 50C61.481 50 57.5067 51.6462 54.5765 54.5765C51.6462 57.5067 50 61.481 50 65.625V68.75M25 68.75H125C126.658 68.75 128.247 69.4085 129.419 70.5806C130.592 71.7527 131.25 73.3424 131.25 75V78.125C131.25 87.5 115.519 112.956 106.25 118.75V125C106.25 126.658 105.592 128.247 104.419 129.419C103.247 130.592 101.658 131.25 100 131.25H50C48.3424 131.25 46.7527 130.592 45.5806 129.419C44.4085 128.247 43.75 126.658 43.75 125V118.75C33.2062 112.162 18.75 87.5 18.75 78.125V75C18.75 73.3424 19.4085 71.7527 20.5806 70.5806C21.7527 69.4085 23.3424 68.75 25 68.75Z" stroke="#232323" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="category-text">
              Салаты
            </div>
          </div>
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
