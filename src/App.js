
import React  from 'react';
import Profil from './Profil'
import ChildComponent from './ChildComponent'
const App = () => {
 const handleAlert = (name) => {
     alert(`Hi, I am  ${name}` )
 }   
        return (
            <div className="App">

           <Profil
            //FullName='Ahmed daldoul' 
            Bio= 'Ingénieur civil développement web , région de Monastir, Tunisie' 
            Func= 'Ingénier Civil'   
            handleAlert={handleAlert} 
            />
       <ChildComponent
       IMG= ''
       />

         </div>
        )
    }

export default App;
