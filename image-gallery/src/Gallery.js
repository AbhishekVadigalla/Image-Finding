import React from 'react'

function Gallery({data}) {
  return (
    <div className='row'>
        
      {
        data.map(img=>
          <div className='col-md-3 m-4'>
            <div className='container - fluid'>
              <div class="card" style={{width: "18rem"}}>
  <img src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`} class="card-img-top"/>
  <div class="card-body">
    
    <a href="#" class="btn btn-primary" download>Download Image</a>
  </div>
</div>
              </div>
          </div>
          
        )
      }
      </div>
  )
}

export default Gallery
