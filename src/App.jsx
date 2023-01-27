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
          <div className="category-item">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M128.062 16.419C128.164 17.0264 128.144 17.6477 128.005 18.2475C127.866 18.8473 127.61 19.4139 127.252 19.9148C126.894 20.4156 126.44 20.8411 125.918 21.1667C125.395 21.4924 124.814 21.7119 124.206 21.8127L89.8938 27.5315L89.1563 31.2502H114.062C115.306 31.2502 116.498 31.7441 117.377 32.6232C118.256 33.5023 118.75 34.6945 118.75 35.9377V60.9377C118.749 66.0541 116.818 70.9817 113.342 74.7359C109.866 78.4901 105.101 80.7942 100 81.1877V84.3752C100 96.5815 91.25 106.744 79.6875 108.938V128.125H95.3125C96.5557 128.125 97.748 128.619 98.6271 129.498C99.5061 130.377 100 131.57 100 132.813C100 134.056 99.5061 135.248 98.6271 136.127C97.748 137.006 96.5557 137.5 95.3125 137.5H54.6875C53.4443 137.5 52.252 137.006 51.3729 136.127C50.4939 135.248 50 134.056 50 132.813C50 131.57 50.4939 130.377 51.3729 129.498C52.252 128.619 53.4443 128.125 54.6875 128.125H70.3125V108.938C64.5981 107.846 59.4434 104.795 55.7358 100.312C52.0282 95.8288 49.9998 90.193 50 84.3752V81.1877C44.8988 80.7942 40.1341 78.4901 36.658 74.7359C33.1819 70.9817 31.2506 66.0541 31.25 60.9377V35.9377C31.25 34.6945 31.7439 33.5023 32.6229 32.6232C33.502 31.7441 34.6943 31.2502 35.9375 31.2502H79.5937L81.3438 22.519C81.5299 21.5861 81.9955 20.7318 82.6787 20.0698C83.3619 19.4078 84.2304 18.9694 85.1688 18.8127L122.669 12.5627C123.276 12.4617 123.897 12.4812 124.497 12.6203C125.097 12.7594 125.664 13.0154 126.165 13.3735C126.665 13.7316 127.091 14.1849 127.416 14.7074C127.742 15.23 127.962 15.8116 128.062 16.419ZM74.9062 54.6877L77.7188 40.6252H40.625V54.6877H74.9062ZM109.375 54.6877V40.6252H87.2812L84.4688 54.6877H109.375Z" fill="#232323" />
            </svg>
            <div className="category-text">
              Напитки
            </div>
          </div>
          <div className="category-item">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M137.5 81.25C137.5 88.1875 131.938 93.75 125 93.75H25C21.6848 93.75 18.5054 92.433 16.1612 90.0888C13.817 87.7446 12.5 84.5652 12.5 81.25C12.5 77.9348 13.817 74.7554 16.1612 72.4112C18.5054 70.067 21.6848 68.75 25 68.75H81.25L96.875 81.25L112.5 68.75H125C128.315 68.75 131.495 70.067 133.839 72.4112C136.183 74.7554 137.5 77.9348 137.5 81.25ZM75 18.75C18.75 18.75 18.75 56.25 18.75 56.25H131.25C131.25 56.25 131.25 18.75 75 18.75ZM18.75 112.5C18.75 122.875 27.125 131.25 37.5 131.25H112.5C122.875 131.25 131.25 122.875 131.25 112.5V106.25H18.75V112.5Z" fill="#232323" />
            </svg>
            <div className="category-text">
              Бургер
            </div>
          </div>
          <div className="category-item">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M137.5 81.25C137.5 88.1875 131.938 93.75 125 93.75H25C21.6848 93.75 18.5054 92.433 16.1612 90.0888C13.817 87.7446 12.5 84.5652 12.5 81.25C12.5 77.9348 13.817 74.7554 16.1612 72.4112C18.5054 70.067 21.6848 68.75 25 68.75H81.25L96.875 81.25L112.5 68.75H125C128.315 68.75 131.495 70.067 133.839 72.4112C136.183 74.7554 137.5 77.9348 137.5 81.25ZM75 18.75C18.75 18.75 18.75 56.25 18.75 56.25H131.25C131.25 56.25 131.25 18.75 75 18.75ZM18.75 112.5C18.75 122.875 27.125 131.25 37.5 131.25H112.5C122.875 131.25 131.25 122.875 131.25 112.5V106.25H18.75V112.5Z" fill="#232323" />
            </svg>
            <div className="category-text">
              Закуски
            </div>
          </div>
          <div className="category-item">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.2688 29.125C31.2688 19.775 38.9625 11.6 48.9 12.5812C81.2578 15.7869 111.236 31.0126 132.913 55.25C139.6 62.7062 137.519 73.775 129.919 79.2812L127.275 81.2L125.006 77.825L124.956 77.7562C105.019 50.2125 72.5813 32.2875 35.9563 32.2875H31.2688V29.125ZM117.319 83.1875L119.681 86.7062L95.0125 104.612L93.75 105.55V118.687C93.75 120.345 93.0915 121.935 91.9194 123.107C90.7473 124.279 89.1576 124.937 87.5 124.937C85.8424 124.937 84.2527 124.279 83.0806 123.107C81.9085 121.935 81.25 120.345 81.25 118.687V118.312C81.15 117.526 80.7547 116.807 80.1442 116.301C79.5337 115.795 78.7536 115.539 77.962 115.587C77.1705 115.635 76.4267 115.982 75.8813 116.557C75.3359 117.133 75.0298 117.895 75.025 118.687V128.069C75.0252 129.672 74.409 131.215 73.304 132.377C72.1989 133.539 70.6895 134.231 69.0879 134.312C67.4863 134.392 65.9152 133.854 64.6995 132.808C63.4837 131.762 62.7164 130.289 62.5563 128.694L53.5563 135.194C44.25 141.906 31.2438 135.262 31.25 123.781L31.2688 41.6562H35.9563C69.4188 41.6562 99.0563 58.0125 117.319 83.1875ZM56.275 68.6875C57.9326 68.6875 59.5223 68.029 60.6944 66.8569C61.8665 65.6848 62.525 64.0951 62.525 62.4375C62.525 60.7799 61.8665 59.1902 60.6944 58.0181C59.5223 56.846 57.9326 56.1875 56.275 56.1875C54.6174 56.1875 53.0277 56.846 51.8556 58.0181C50.6835 59.1902 50.025 60.7799 50.025 62.4375C50.025 64.0951 50.6835 65.6848 51.8556 66.8569C53.0277 68.029 54.6174 68.6875 56.275 68.6875ZM81.275 87.425C82.9326 87.425 84.5223 86.7665 85.6944 85.5944C86.8665 84.4223 87.525 82.8326 87.525 81.175C87.525 79.5174 86.8665 77.9277 85.6944 76.7556C84.5223 75.5835 82.9326 74.925 81.275 74.925C79.6174 74.925 78.0277 75.5835 76.8556 76.7556C75.6835 77.9277 75.025 79.5174 75.025 81.175C75.025 82.8326 75.6835 84.4223 76.8556 85.5944C78.0277 86.7665 79.6174 87.425 81.275 87.425ZM56.275 106.162C57.9326 106.162 59.5223 105.504 60.6944 104.332C61.8665 103.16 62.525 101.57 62.525 99.9125C62.525 98.2549 61.8665 96.6652 60.6944 95.4931C59.5223 94.321 57.9326 93.6625 56.275 93.6625C54.6174 93.6625 53.0277 94.321 51.8556 95.4931C50.6835 96.6652 50.025 98.2549 50.025 99.9125C50.025 101.57 50.6835 103.16 51.8556 104.332C53.0277 105.504 54.6174 106.162 56.275 106.162Z" fill="#232323" />
            </svg>
            <div className="category-text">
              Пицца
            </div>
          </div>
          <div className="category-item">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_10_123)">
                <path d="M125.25 54.4375V25H95.875L75 4.3125L54.4375 25H25V54.4375L4.3125 75L25 95.875V125.25H54.4375L75 145.938L95.875 125.25H125.25V95.875L145.938 75L125.25 54.4375ZM55.1875 44.0625C61.3125 44.0625 66.25 49 66.25 55.1875C66.25 58.1215 65.0845 60.9353 63.0099 63.0099C60.9353 65.0845 58.1215 66.25 55.1875 66.25C49 66.25 44.0625 61.3125 44.0625 55.1875C44.0625 49 49 44.0625 55.1875 44.0625ZM95.125 106.25C89 106.25 84.0625 101.25 84.0625 95.125C84.0625 92.191 85.228 89.3773 87.3026 87.3026C89.3773 85.228 92.191 84.0625 95.125 84.0625C101.25 84.0625 106.25 89 106.25 95.125C106.25 98.0755 105.078 100.905 102.992 102.992C100.905 105.078 98.0755 106.25 95.125 106.25ZM53.125 106.438L43.75 97.0625L97.0625 43.75L106.438 53.125L53.125 106.438Z" fill="#232323" />
              </g>
              <defs>
                <clipPath id="clip0_10_123">
                  <rect width="150" height="150" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="category-text">
              Акции
            </div>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div>
          <div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div><div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div><div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div><div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div><div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div><div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div><div className="item">
            <div className="item-img">
              <img src="img/item__image.png" alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                Салат "Греческий"
              </div>
              <div className="info-weight">
                300 грамм - 1 порция
              </div>
              <div className="info-comp">
                36 - белков, 11 - жиров, 55 - углеводов
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
