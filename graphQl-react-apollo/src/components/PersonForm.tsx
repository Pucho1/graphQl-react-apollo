import React, {useState} from 'react';

const PersonForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStrert] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e: any) => {
    e.preventeDefault();

    setName('');
    setPhone('');
    setStrert('');
    setCity('');
  }

  return (
    <div>
      <h2>PersonForm</h2>
      <form action="" onSubmit={handleSubmit}>
        <input placeholder='name' value={name} onChange={ evt => setName(evt.target.value)}/>
        <input placeholder='phone' value={phone} onChange={ evt => setPhone(evt.target.value)}/>
        <input placeholder='street' value={street} onChange={ evt => setStrert(evt.target.value)}/>
        <input placeholder='city' value={city} onChange={ evt => setCity(evt.target.value)}/>
      </form>
    </div>
  )
}

export default PersonForm;