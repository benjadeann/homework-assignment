const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/404cat-unsplash.jpg" alt="cat404" />
                <div>
                Photo by <a href="https://unsplash.com/@jaehunpark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jae Park</a> on <a href="https://unsplash.com/photos/brown-tabby-cat-7GX5aICb5i4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
