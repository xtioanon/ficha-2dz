import { useEffect, useState } from 'react'
import './App.css'
import Ficha from './components/Ficha/Ficha'
import { Personagem } from './Personagem'
import { recuperarOuCriarPersonagem, salvarPersonagem } from './Storage';
import { NextPage, PreviousPage } from './components/Pagination';
import Profile from './components/Ficha/Profile';

function App() {

  const [personagem, setPersonagem] = useState<Personagem>(
    () => {
      return recuperarOuCriarPersonagem();
    }
  );

  const [page, setPage] = useState<0|1>(0);

  useEffect(()=>{
    salvarPersonagem(personagem);
  }, [personagem]);

  const handleChange = (key: keyof Personagem, value: string | number) =>
  {
    setPersonagem(prev => ({...prev, [key]: value}));
  }

  return (
    <>
    <div className="justify-center flex flex-col bg-amber-50 m-10 space-y-1 border-2 border-black h-screen align-top">
      {page === 0 ?
      <><Ficha personagem={personagem} onChange={handleChange}/> <NextPage onPageChange={() => {setPage(1)}} /></> :
      <><Profile personagem={personagem} onChange={handleChange}/> <PreviousPage onPageChange={() => {setPage(0)}} /></>}
    </div>
    </>
  )
}

export default App
