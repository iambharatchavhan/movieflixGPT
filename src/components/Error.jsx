import React from 'react'

function Error() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <div className="four_zero_four_bg bg-center h-[60vh]" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)', backgroundRepeat:"no-repeat" }}>
              <h1 className="text-center text-4xl">404</h1>
            </div>

            <div className="contant_box_404 mt-10">
              <h3 className="text-4xl">Look like you're lost</h3>
              <p>"Whoops! This page appears to be lost in the digital wilderness."</p>
              <a href="/" className="link_404 inline-block bg-green-500 text-white px-4 py-2 my-5">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Error
