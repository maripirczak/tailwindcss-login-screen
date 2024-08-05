// Docs {@link https://tailwindcss.com/docs/text-color}
import React from 'react';

export function App() {
  return (
     <div className='w-screen h-screen p-5 bg-gray-900 place-content-center text-white'>
        {/*Área do formulário */}
        <div className='mt-5'>
          <h1 className='text-3xl font-bold text-white text-center'>Sistema de Login</h1>
                    
          <div className='my-6'>
            <label htmlFor='emailField'className='block text-lg mb-2'>Endereço de e-mail</label>
            <input type='email'id='emailField' className='w-full p-2 rounded-md text-lg bg-gray-800 border-gray-600 outline-yellow-500'></input>
          </div>
          <div className='my-6'>
            <label htmlFor='passwordField'className='block text-lg mb-2'>Senha</label>
            <input type='password'id='passwordField' className='w-full p-2 rounded-md text-lg bg-gray-800 border-gray-600 outline-yellow-500'></input>
          </div>
          <div className='my-6'>
            <button className='w-full p-2 rounded-md text-lg font-bold border-none bg-yellow-500 hover:bg-yellow-400'>Entrar</button>
          </div>
        </div>

        <div className='text-center text-gray-400'> 
          Não é membro? <a href='' className='text-yellow-500 font-bold hover:text-yellow-400'>Faça seu cadastro agora</a>
        </div>

    </div>
  );
}

window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'my-indigo': '#4f45e5',
      },
    },
  },
};
