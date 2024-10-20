import { addDoc, collection, getDocs } from 'firebase/firestore';
import {useForm} from 'react-hook-form';
import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import logo from '../assets/image/cita-medica.png'

export const System = () => {
    const {register,handleSubmit,reset} = useForm();
    const [datos,Setdatos] = useState([]);

    const agregar = async (data) =>{

       let responder = await addDoc(collection (db,'consultorio'),{
        name : data.name,
        telephone : parseInt(data.telephone),
        date : data.date
       })
       
       alert("Cita Agentada con exito")
       reset();
       mostrar();
    }

    const mostrar = async() =>{
       let mostrando = await getDocs(collection(db,'consultorio'))
       const datos = mostrando.docs.map((doc) =>( {...doc.data(), id: doc.id })
    )
       
       Setdatos(datos)
       
    }

    useEffect(() => {
        mostrar();
    },[])

  return (
    <>
    <form onSubmit={handleSubmit (agregar)}>
    <section>
    <h1>Clinica Manzanito</h1>
    <h3>¡Agenda tu cita ya!</h3>
    <img src={logo} alt='Imagen de agendar citas'/>
    </section>
    
    <section>
        <label>Nombre paciente</label>
        <input type= "text"{...register('name')} required/>
    </section>
    <section>
        <label>Numero de telefono</label>
        <input type= "text"{...register('telephone')} required/>
    </section>
    <section>
        <label>fecha de la cita </label>
        <input type="date"{...register('date')} required/>
    </section>

    <button type="submit">Enviar</button>
    
    </form>

    <main>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>telephone</th>
                    <th>date</th>
                </tr>
            </thead>
            <tbody>

                {
datos.map((dato) => (
    <tr key={dato.id}> 
    <td>{dato.name}</td>
    <td>{dato.telephone}</td>
    <td>{dato.date}</td>
                
    </tr>
))
                }
            </tbody>
            </table>
        </main>
    </>
  )
}
