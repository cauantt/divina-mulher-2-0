import Link from 'next/link'
import React from 'react'

function Content3() {
  return (
    <div className='flex mac:flex-col   '>
        <div className=" flex  w-full bg-gradient-to-b from-[#720000]  to-[#330F0F]   justify-end items-end mac:justify-center mac:items-center">
        
           
             
             
        <div className='w-[550px] h-full  text-white gap-5 flex flex-col justify-center py-10 mac:justify-center mac:items-center'>

            <p className='text-white rs:text-base text-lg w-[400px] sm:w-[300px] flex'>Eu sei, mulher, que a jornada terrena é bela, mas também desafiadora! Por isso, meu convite é para que caminhemos juntas nesta oportunidade transformadora.

</p>

<p className='text-white w-[400px] text-lg sm:w-[300px] flex'>Apresento a você o Despertar da Mulher Divina - um programa criado para a mulher da Nova Era, que sente o chamado para expandir suas fronteiras mentais e lapidar seu emocional com amor e consciência.</p>

        <Link href="#alvo"><button className='bg-white h-10 w-60 rounded-lg mac:mt-8 text-black font-bold'>Quero despertar</button></Link>

        </div>




        </div>

        <div className='flex w-full  bg-white justify-start items-start mac:justify-center mac:items-center'>

        <div className='w-[560px] h-full flex flex-col gap-5 justify-center items-end py-10 mac:justify-center mac:items-center'>

        <p className='text-black font-medium text-lg w-[400px] rs:text-base flex sm:w-[300px]'>Durante 40 dias, estaremos unidas em um mergulho profundo em nós mesmas, dentro de uma egrégora feminina ancorada e protegida, preparada para apoiar o seu desabrochar.</p>
        <p className='text-black font-medium text-lg w-[400px] rs:text-base flex sm:w-[300px]'>Nesta jornada de autoconhecimento, você terá acesso a todo o meu conteúdo de aulas gravadas, além de bônus exclusivos e uma biblioteca cuidadosamente selecionada para o nosso processo conjunto. Esses materiais abrangem uma ampla gama de temas, todos pensados para enriquecer e aprofundar sua experiência.</p>


        </div>

        </div>
    </div>
  )
}

export default Content3
