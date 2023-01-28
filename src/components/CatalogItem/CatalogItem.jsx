function CatalogItem({item}) {

    return(
        <div className="item">
            <div className="item-img">
              <img src={item.src} alt="" />
            </div>
            <div className="item-info">
              <div className="info-title">
                {item.name}
              </div>
              <div className="info-weight">
                {item.weight}
              </div>
              <div className="info-comp">
                {item.comp}
              </div>
              <a href="#" className="info-btn">Добавить в корзину</a>
            </div>
          </div>
    )

}

export default CatalogItem