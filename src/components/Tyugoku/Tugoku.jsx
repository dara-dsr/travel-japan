import React from 'react';
import './Tugoku.css';
import fon from '../../images/img/Тюгоку-фон.jpg';

import map from '../../images/img/cap/Тюгоку.png';
import map1 from '../../images/img/cap/тюгоку_cap.gif';

import okayma1 from '../../images/img/Тюгоку/сад коракуэн.png';
import okayma2 from '../../images/img/Тюгоку/Битчу-Мацуяма.png';
import okayma3 from '../../images/img/Тюгоку/Художественный музей Хаясибара.png';
import okayma4 from '../../images/img/Тюгоку/Храм Кибицу.png';
import hirosima1 from '../../images/img/Тюгоку/Святилище Ицукусима.png';
import hirosima2 from '../../images/img/Тюгоку/Такехара.png';
import hirosima3 from '../../images/img/Тюгоку/Окуносима.png';
import hirosima4 from '../../images/img/Тюгоку/Фукуяма.png';
import imaguti1 from '../../images/img/Тюгоку/Ивакуни.png';
import imaguti2 from '../../images/img/Тюгоку/Ямагучи.png';
import imaguti3 from '../../images/img/Тюгоку/Мотоносуми Святыня.png';
import imaguti4 from '../../images/img/Тюгоку/Акиёсидай.png';
import tottori1 from '../../images/img/Тюгоку/Тоттори.png';
import tottori2 from '../../images/img/Тюгоку/Гора Дайсэн.png';
import tottori3 from '../../images/img/Тюгоку/Ханакайро.png';
import tottori4 from '../../images/img/Тюгоку/Вакаса.png';
import simane1 from '../../images/img/Тюгоку/Идзумо.png';
import simane2 from '../../images/img/Тюгоку/Мацуэ.png';
import simane3 from '../../images/img/Тюгоку/Ивами Гинзан.png';
import simane4 from '../../images/img/Тюгоку/Цувано.png';

const Tugoku = () => {
  return (
    <div className="main-container">
      <div className="tugoky-osn">
        <img src={fon} className="tugoky-image" alt="Тюгоку - западный регион Японии" />
        <div>
          <h1 className="tugoky-h1">Тюгоку</h1>
        </div>
        <div className="tugoky-p1">
          <p className="p">
            Западный регион Японии, где гармонично сочетаются древние традиции и современность. 
            Здесь находится Хиросима, старейшее святилище Ицукусима и живописные острова Внутреннего моря Сэто.
          </p>
        </div>
      </div>

      {/* Регион Тюгоку */}
      <section className="region">
        <div className="text">
          <h1>Регион Тюгоку</h1>
          <div className="line"></div>
        </div>
        <div className="content-wrapper">
          <div className="map-container">
            <div className="image-placeholder-2">
              <img src={map} alt="Карта региона Тюгоку" />
            </div>
          </div>
          <div className="text-content">
            <h2>Префектуры: Окаяма, Хиросима, Ямагути, Тоттори, Симанэ</h2>
            <p>
              Регион Тюгоку занимает западную часть главного острова Японии Хонсю. 
              Его условно разделяют на два субрегиона: развитый промышленный регион Саньё 
              вдоль побережья Внутреннего моря Сэто и более сельский регион Санъин 
              вдоль побережья Японского моря.
            </p>
            <p>
              Тюгоку славится богатой историей, уникальными культурными памятниками 
              и потрясающей природой. Здесь сохранились древние святилища, традиционные 
              сады и замки периода Эдо.
            </p>
            <div className="image-placeholder-1">
              <img src={map1} alt="Достопримечательности Тюгоку" />
            </div>
          </div>
        </div>
      </section>

      {/* Направления */}
      <section className="directions">
        <div className="text">
          <h1>Лучшие направления в Тюгоку</h1>
          <div className="line"></div>
        </div>

        {/* Окаяма */}
        <h2 className="directions-names">Префектура Окаяма</h2>
        <p style={{textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px'}}>
          "Префектура солнечного света" известна своими прекрасными садами, историческими замками и островами искусства
        </p>
        <div className="attractions-container">
          {[
            {
              img: okayma1,
              title: "Сад Коракуэн",
              desc: "Один из трёх великих садов Японии, созданный в 1700 году. Сохраняет аутентичный дизайн периода Эдо с прудами, чайными домиками и живописными пейзажами, прекрасен в любое время года."
            },
            {
              img: okayma2,
              title: "Замок Биттю-Мацуяма",
              desc: "Самый высокогорный замок Японии, расположенный на высоте 430 метров. Сохранил оригинальную главную башню периода Эдо и предлагает панорамные виды на окрестности."
            },
            {
              img: okayma3,
              title: "Музей Хаясибара",
              desc: "Частная коллекция семьи Хаясибара, включающая 10 000 экспонатов: самурайские доспехи, мечи, картины, лаковые изделия и предметы декоративно-прикладного искусства периода Эдо."
            },
            {
              img: okayma4,
              title: "Храм Кибицу",
              desc: "Главный храм древней провинции Биттю. Согласно легенде, основан на месте где был побеждён демон Ура. Архитектурный стиль сочетает буддийские и синтоистские элементы."
            },
          ].map((attraction, index) => (
            <div className="attraction-card" key={index}>
              <div className="image-placeholder">
                <img src={attraction.img} alt={attraction.title} />
              </div>
              <h2>{attraction.title}</h2>
              <div className="description">{attraction.desc}</div>
            </div>
          ))}
        </div>

        {/* Хиросима */}
        <h2 className="directions-names">Префектура Хиросима</h2>
        <p style={{textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px'}}>
          Символ мира и возрождения, сочетающий мемориалы истории и потрясающую природную красоту
        </p>
        <div className="attractions-container">
          {[
            {
              img: hirosima1,
              title: "Святилище Ицукусима",
              desc: "Объект Всемирного наследия ЮНЕСКО, известный плавающими воротами тории. Построено в 593 году, перестроено в XII веке. Единственное в Японии святилище, стоящее в море."
            },
            {
              img: hirosima2,
              title: "Мемориал мира Хиросимы",
              desc: "Мемориальный комплекс, включающий Купол Гэнбаку и музей. Символ мира и надежды на будущее без ядерного оружия. Ежегодно 6 августа проходит церемония памяти."
            },
            {
              img: hirosima3,
              title: "Остров Окуносима",
              desc: "Известный как Кроличий остров. Бывший секретный остров, где производилось химическое оружие, теперь дом для сотен диких кроликов. Уникальное сочетание истории и природы."
            },
            {
              img: hirosima4,
              title: "Фукуяма",
              desc: "Второй по величине город префектуры. Известен замком Фукуяма, музеем искусства и традиционными ремёслами. Важный транспортный узел региона."
            },
          ].map((attraction, index) => (
            <div className="attraction-card" key={index}>
              <div className="image-placeholder">
                <img src={attraction.img} alt={attraction.title} />
              </div>
              <h2>{attraction.title}</h2>
              <div className="description">{attraction.desc}</div>
            </div>
          ))}
        </div>

        {/* Ямагути */}
        <h2 className="directions-names">Префектура Ямагути</h2>
        <p style={{textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px'}}>
          "Киото Запада" с богатым самурайским наследием и уникальными природными памятниками
        </p>
        <div className="attractions-container">
          {[
            {
              img: imaguti1,
              title: "Ивакуни",
              desc: "Знаменит арочным мостом Кинтай-кё (1673 г.), одним из трёх самых красивых мостов Японии. Особенно прекрасен во время цветения сакуры в начале апреля."
            },
            {
              img: imaguti2,
              title: "Город Ямагути",
              desc: "Историческая столица префектуры, известная как Западный Киото. Центр культуры периода Муромати с храмом Рурикодзи и пятиэтажной пагодой."
            },
            {
              img: imaguti3,
              title: "Святилище Мотоносуми",
              desc: "Живописное святилище на скалах с видом на Японское море. Знаменито рядом из 123 красных торий, ведущих к главному залу. Популярное место для фото."
            },
            {
              img: imaguti4,
              title: "Плато Акиёсидай",
              desc: "Крупнейшее карстовое плато Японии с уникальными известняковыми образованиями. Пещера Акиёсидо протяженностью 10 км - самая длинная в стране."
            },
          ].map((attraction, index) => (
            <div className="attraction-card" key={index}>
              <div className="image-placeholder">
                <img src={attraction.img} alt={attraction.title} />
              </div>
              <h2>{attraction.title}</h2>
              <div className="description">{attraction.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Тоттори и Симанэ */}
      <section className="sakura-back">
        <div className="all-in">
          <h2 className="directions-names">Префектура Тоттори</h2>
          <p style={{textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px', color: 'white'}}>
            Земля песчаных дюн, горячих источников и древних гор
          </p>
          <div className="attractions-container">
            {[
              {
                img: tottori1,
                title: "Песчаные дюны Тоттори",
                desc: "Крупнейшие песчаные дюны Японии протяженностью 16 км. Уникальный пустынный пейзаж с барханами до 50 м высотой. Можно прокатиться на верблюде."
              },
              {
                img: tottori2,
                title: "Гора Дайсэн",
                desc: "Самая высокая гора в регионе Чугоку (1729 м). Священная гора с древними храмами. Зимой - горнолыжный курорт, летом - место для хайкинга."
              },
              {
                img: tottori3,
                title: "Парк Ханакайро",
                desc: "Крупнейший цветочный парк в западной Японии. Сезонные цветочные выставки, особенно известен тюльпанами весной и космеей осенью."
              },
              {
                img: tottori4,
                title: "Залив Вакаса",
                desc: "Живописный залив с кристально чистой водой. Популярное место для дайвинга, сноркелинга и морских прогулок. Известен свежими морепродуктами."
              },
            ].map((attraction, index) => (
              <div className="attraction-card" key={index}>
                <div className="image-placeholder">
                  <img src={attraction.img} alt={attraction.title} />
                </div>
                <h2>{attraction.title}</h2>
                <div className="description">{attraction.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="all-in">
          <h2 className="directions-names">Префектура Симанэ</h2>
          <p style={{textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px', color: 'white'}}>
            Земля древних мифов, серебряных рудников и традиционной культуры
          </p>
          <div className="attractions-container">
            {[
              {
                img: simane1,
                title: "Великое святилище Идзумо",
                desc: "Одно из старейших и важнейших синтоистских святилищ Японии. Согласно мифам, здесь собираются все боги в октябре (месяц без богов)."
              },
              {
                img: simane2,
                title: "Мацуэ",
                desc: "Город воды с сохранившимся замком периода Эдо. Известен каналами, самурайскими усадьбами и как родина писателя Лафкадио Хирна."
              },
              {
                img: simane3,
                title: "Серебряные рудники Ивами",
                desc: "Объект Всемирного наследия ЮНЕСКО. Крупнейшие серебряные рудники Японии периода Эдо, повлиявшие на мировую экономику XVI-XVII веков."
              },
              {
                img: simane4,
                title: "Цувано",
                desc: "Маленький Киото с белыми самурайскими усадьбами. Сохранил атмосферу периода Эдо. Знаменит фестивалем Ёрои и разведением карпов кои."
              },
            ].map((attraction, index) => (
              <div className="attraction-card" key={index}>
                <div className="image-placeholder">
                  <img src={attraction.img} alt={attraction.title} />
                </div>
                <h2>{attraction.title}</h2>
                <div className="description">{attraction.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tugoku;