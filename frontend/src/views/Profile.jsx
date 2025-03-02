import '../components/Profile.css'

const Profile = () => {
    return(
        <>
         <div className='container_profile'>
            <div className='min_box_profile'>
              <div className='titulo_profile'>
                <h5>Datos Personales</h5>
              </div>
              <p>Nombre: Comprador</p>
              <p>Apellido: De Pizza</p>
              <p>Email: pizzalover@gmail.com</p>
              <div className='min_box_btn'>
                <button className='btn_profile'>Logout</button>
              </div>
            </div> 
         </div>
        </>
    )
}

export default Profile