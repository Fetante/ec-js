import React from 'react'

const Map = () => {
  return (
    <div>
        <section className="map-section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13688.533183240286!2d18.05492022773335!3d59.336081965802194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1698363937089!5m2!1ssv!2sse" width="100%" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title='Google maps'></iframe>
        </section>
    </div>
  )
}

export default Map