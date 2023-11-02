const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/foodthing-unsplash.jpg" alt="salad something!" width={100}/>
                <div>
                Photo by <a href="https://unsplash.com/@shootdelicious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eiliv Aceron</a> on <a href="https://unsplash.com/photos/a-stack-of-cookies-sitting-on-top-of-a-white-plate-dyjDrasWJ1g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

module.exports = home
