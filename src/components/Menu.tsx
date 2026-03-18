import { useState } from 'react'
import { menuData, tabs, type TabKey } from '../data/menu'

const pricingKey: Partial<Record<TabKey, string>> = {
  starters: 'Incl. = included in prix fixe · First price = prix fixe supplement · Second price = à la carte',
  mains: 'All mains included in the $59 prix fixe · Supplement applies to Filet only',
  desserts: 'All desserts $10 · See server for this evening\'s full selection',
}

export function Menu() {
  const [activeTab, setActiveTab] = useState<TabKey>('starters')

  return (
    <section id="menu">
      <div className="section-inner">
        <span className="eyebrow reveal">Prix Fixe · $59</span>
        <h2 className="section-title reveal">The Menu</h2>
        <div className="gold-rule reveal" />

        <p className="menu-intro reveal">
          Tonight we propose a menu of classic French favorites and daily specials from Chef Pascal.
          The <strong>$59 fixed price menu</strong> includes: first course, main course, cheese and salad.
          Four appetizers are available at no extra charge — others can be substituted for a small supplement.
        </p>

        <div className="menu-tabs reveal">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              className={`menu-tab${activeTab === key ? ' active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {pricingKey[activeTab] && (
          <p className="menu-pricing-key">{pricingKey[activeTab]}</p>
        )}

        {tabs.map(({ key }) => (
          <div key={key} className={`menu-grid${activeTab === key ? ' active' : ''}`}>
            {menuData[key].map((item, i) => (
              <div key={i} className="menu-item">
                <div className="menu-item-top">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        ))}

        <p className="menu-note reveal">
          Salade et Fromage — garden greens in vinaigrette maison, two cheeses and fig-walnut confiture — included with every menu
          <br />
          Beverages, taxes and gratuity additional · No split main courses · Please advise of any dietary requirements
        </p>
      </div>
    </section>
  )
}
