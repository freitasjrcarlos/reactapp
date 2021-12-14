import React from 'react';
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';
import useForm from './Hooks/useForm';

const App = () => {

  const nome = useForm();
  const cep = useForm('cep');
  const email = useForm('email');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);


  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('sended');
    } else {
      console.log('Not sended');
    }
  }
  
  return <form onSubmit={handleSubmit}>

    <h2> Checkbox </h2>
    <Checkbox options={['Javascript', 'PHP']} value={linguagens} setValue={setLinguagens} />

    <h2> Cores </h2>
    <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

    <h2> Frutas </h2>
    <Radio options={['Maça', 'Laranja']} value={fruta} setValue={setFruta} />

    <Select options={['smartphone', 'tablet']} value={produto} setValue={setProduto} />


    <Input id="nome" label="Nome" value={nome.value} required placeholder='Carlos' {...nome} />
    <Input id="cep" label="CEP" value={cep.value} required placeholder='00000-000' {...cep} />
    <Input id="email" label="Email" value={email.value} required placeholder='teste@email.com' {...email} />
    <button> Enviar </button>
  </ form>


}
export default App;
